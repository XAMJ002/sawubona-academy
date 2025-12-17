"use client";

import { Layout } from "@/components/Layout";
import { ModuleList } from "@/components/ModuleList";
import { ProgressBadge } from "@/components/ProgressBadge";
import { course, getAllLessons } from "@/data/course";
import { useLessonProgress } from "@/hooks/useLessonProgress";

export default function CoursePage() {
  const { getCompletedCount, isLoaded } = useLessonProgress();
  const allLessons = getAllLessons();
  const totalLessons = allLessons.length;
  const completedCount = isLoaded ? getCompletedCount() : 0;

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Course Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              {course.description}
            </p>

            {/* Overall Progress */}
            <div className="bg-white rounded-xl border border-sage-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-gray-800 mb-1">
                    Your Progress
                  </h2>
                  <p className="text-sage-600 text-sm">
                    {course.modules.length} modules • {totalLessons} total lessons
                  </p>
                </div>
                <div className="sm:w-64">
                  {isLoaded ? (
                    <ProgressBadge
                      completed={completedCount}
                      total={totalLessons}
                    />
                  ) : (
                    <div className="h-2 bg-sage-200 rounded-full animate-pulse" />
                  )}
                </div>
              </div>
              {isLoaded && completedCount === totalLessons && totalLessons > 0 && (
                <div className="mt-4 p-4 bg-forest-600/10 rounded-lg">
                  <p className="text-forest-600 font-medium flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Congratulations! You&apos;ve completed the entire course.
                  </p>
                </div>
              )}
            </div>
          </header>

          {/* Module List */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Course Modules
            </h2>
            <ModuleList modules={course.modules} />
          </section>
        </div>
      </div>
    </Layout>
  );
}
