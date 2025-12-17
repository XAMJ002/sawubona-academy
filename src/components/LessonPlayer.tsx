"use client";

import Link from "next/link";
import { Lesson, CourseModule } from "@/data/course";
import { useLessonProgress } from "@/hooks/useLessonProgress";
import { CompletedBadge } from "./ProgressBadge";

interface LessonPlayerProps {
  lesson: Lesson;
  module: CourseModule;
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
              href={`/course/${module.moduleSlug}/${module.lessons[0].lessonSlug}`}
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
