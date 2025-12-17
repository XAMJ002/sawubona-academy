"use client";

import Link from "next/link";
import { Module } from "@/data/course";
import { useLessonProgress } from "@/hooks/useLessonProgress";
import { CompletedBadge } from "./ProgressBadge";

interface ModuleListProps {
  modules: Module[];
}

export function ModuleList({ modules }: ModuleListProps) {
  const { isCompleted, isLoaded } = useLessonProgress();

  return (
    <div className="space-y-6">
      {modules.map((module, index) => {
        const completedLessons = module.lessons.filter((l) => 
          isLoaded && isCompleted(l.id)
        ).length;
        const totalLessons = module.lessons.length;
        const isModuleComplete = completedLessons === totalLessons && totalLessons > 0;

        return (
          <div
            key={module.id}
            className="bg-white rounded-xl border border-sage-200 overflow-hidden hover:border-sage-300 hover:shadow-md transition-all"
          >
            <div className="p-6">
              {/* Module Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {module.title}
                  </h3>
                </div>
                {isModuleComplete && <CompletedBadge />}
              </div>

              {/* Module Description */}
              <p className="text-gray-600 mb-4 ml-13">
                {module.description}
              </p>

              {/* Progress */}
              {isLoaded && (
                <div className="ml-13 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-sage-100 rounded-full overflow-hidden max-w-xs">
                      <div
                        className="h-full bg-forest-600 rounded-full transition-all duration-300"
                        style={{
                          width: `${(completedLessons / totalLessons) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-sage-600">
                      {completedLessons}/{totalLessons} lessons
                    </span>
                  </div>
                </div>
              )}

              {/* Lessons List */}
              <div className="ml-13 space-y-2">
                {module.lessons.map((lesson) => {
                  const lessonComplete = isLoaded && isCompleted(lesson.id);
                  return (
                    <Link
                      key={lesson.id}
                      href={`/course/${lesson.moduleSlug}/${lesson.lessonSlug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-sage-50 transition-colors group"
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                          lessonComplete
                            ? "bg-forest-600 text-white"
                            : "bg-sage-200 text-sage-600 group-hover:bg-sage-300"
                        }`}
                      >
                        {lessonComplete ? (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span className="w-2 h-2 bg-sage-400 rounded-full" />
                        )}
                      </span>
                      <span
                        className={`${
                          lessonComplete ? "text-sage-600" : "text-gray-700"
                        } group-hover:text-forest-600`}
                      >
                        {lesson.title}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Start/Continue Button */}
              <div className="ml-13 mt-4">
                <Link
                  href={`/course/${module.lessons[0].moduleSlug}/${module.lessons[0].lessonSlug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors"
                >
                  {completedLessons > 0 ? "Continue Module" : "Start Module"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
