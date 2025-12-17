"use client";

import Link from "next/link";
import { Layout } from "@/components/Layout";
import { course, getModules } from "@/data/course";

export default function HomePage() {
  const modules = getModules();
  const firstModule = modules[0];
  const firstLesson = firstModule?.lessons[0];

  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            {course.description}
          </p>

          {firstModule && firstLesson && (
            <Link
              href={`/course/${firstModule.moduleSlug}/${firstLesson.lessonSlug}`}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-forest-600 text-white font-semibold hover:bg-forest-700 transition"
            >
              Start the course
            </Link>
          )}

          <div className="mt-10 text-sm text-gray-500">
            <p>
              Sawubona Academy is a self-paced, trauma-informed leadership and
              workforce course for managers and practitioners who want to build
              people-ready workplaces.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
