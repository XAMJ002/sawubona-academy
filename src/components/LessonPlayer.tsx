"use client";

import Link from "next/link";
import { Lesson, Module } from "@/data/course";
import { useLessonProgress } from "@/hooks/useLessonProgress";
import { CompletedBadge } from "./ProgressBadge";

interface LessonPlayerProps {
  lesson: Lesson;
  module: Module;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
}

export function LessonPlayer({
  lesson,
  module,
  previousLesson,
  nextLesson,
}: LessonPlayerProps) {
  const { isCompleted, markCompleted, isLoaded } = useLessonProgress();
  const completed = isLoaded && isCompleted(lesson.id);

  const handleMarkComplete = () => {
    markCompleted(lesson.id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <ol className="flex items-center gap-2 text-sage-600">
          <li>
            <Link href="/course" className="hover:text-forest-600">
              Course
            </Link>
          </li>
          <li>
            <span className="mx-2">›</span>
          </li>
          <li>
            <Link
              href={`/course/${module.slug}/${module.lessons[0].lessonSlug}`}
              className="hover:text-forest-600"
            >
              {module.title}
            </Link>
          </li>
          <li>
            <span className="mx-2">›</span>
          </li>
          <li className="text-gray-800 font-medium truncate">{lesson.title}</li>
        </ol>
      </nav>

      {/* Lesson Header */}
      <header className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold text-gray-800">{lesson.title}</h1>
          {completed && <CompletedBadge />}
        </div>
        <p className="text-lg text-sage-600">{lesson.summary}</p>
      </header>

      {/* Video Placeholder */}
      <div className="mb-8">
        <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Video content will appear here</p>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Lesson Content
        </h2>
        <div className="prose prose-sage max-w-none">
          {lesson.body.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Reflection Questions */}
      {lesson.reflectionQuestions.length > 0 && (
        <section className="mb-8 bg-cream-100 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-terracotta-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Reflection Questions
          </h2>
          <p className="text-sage-600 text-sm mb-4">
            Take a moment to consider these questions. There are no right or
            wrong answers.
          </p>
          <ol className="space-y-3">
            {lesson.reflectionQuestions.map((question, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-terracotta-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-700">{question}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Downloads */}
      {lesson.downloads.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-forest-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Downloads
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.downloads.map((download, index) => (
              <a
                key={index}
                href={download.href}
                className="flex items-center gap-3 p-4 bg-white border border-sage-200 rounded-lg hover:border-forest-600 hover:shadow-sm transition-all group"
              >
                <span className="text-2xl">
                  {download.href.endsWith(".pdf") ? "📄" : "📝"}
                </span>
                <span className="text-gray-700 group-hover:text-forest-600">
                  {download.label}
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Mark Complete Button */}
      <section className="mb-8 pt-6 border-t border-sage-200">
        {completed ? (
          <div className="flex items-center gap-3 p-4 bg-forest-600/10 rounded-xl">
            <svg
              className="w-6 h-6 text-forest-600"
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
            <span className="text-forest-600 font-medium">
              You&apos;ve completed this lesson
            </span>
          </div>
        ) : (
          <button
            onClick={handleMarkComplete}
            className="w-full py-4 px-6 bg-forest-600 text-white rounded-xl font-semibold text-lg hover:bg-forest-700 transition-colors"
          >
            Mark Lesson Complete
          </button>
        )}
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between gap-4 pt-6 border-t border-sage-200">
        {previousLesson ? (
          <Link
            href={`/course/${previousLesson.moduleSlug}/${previousLesson.lessonSlug}`}
            className="flex items-center gap-2 text-sage-600 hover:text-forest-600 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden sm:inline">Previous:</span>
            <span className="font-medium truncate max-w-[150px] sm:max-w-none">
              {previousLesson.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/course"
          className="text-sage-600 hover:text-forest-600 transition-colors text-center"
        >
          <svg
            className="w-5 h-5 mx-auto mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <span className="text-sm">Overview</span>
        </Link>

        {nextLesson ? (
          <Link
            href={`/course/${nextLesson.moduleSlug}/${nextLesson.lessonSlug}`}
            className="flex items-center gap-2 text-sage-600 hover:text-forest-600 transition-colors"
          >
            <span className="font-medium truncate max-w-[150px] sm:max-w-none">
              {nextLesson.title}
            </span>
            <span className="hidden sm:inline">:Next</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
