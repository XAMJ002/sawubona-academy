import { notFound } from "next/navigation";
import { Layout } from "@/components/Layout";
import { LessonPlayer } from "@/components/LessonPlayer";
import {
  getLessonBySlug,
  getModuleBySlug,
  getAdjacentLessons,
  course,
} from "@/data/course";

interface LessonPageProps {
  params: {
    moduleSlug: string;
    lessonSlug: string;
  };
}

// Generate static params for all lessons
export function generateStaticParams() {
  const params: { moduleSlug: string; lessonSlug: string }[] = [];

  course.modules.forEach((module) => {
    courseModule.lessons.forEach((lesson) => {
      params.push({
        moduleSlug: lesson.moduleSlug,
        lessonSlug: lesson.lessonSlug,
      });
    });
  });

  return params;
}

// Generate metadata for the page
export function generateMetadata({ params }: LessonPageProps) {
  const lesson = getLessonBySlug(params.moduleSlug, params.lessonSlug);
  const courseModule = getModuleBySlug(params.moduleSlug);

  if (!lesson || !courseModule) {
    return {
      title: "Lesson Not Found | Sawubona Academy",
    };
  }

  return {
    title: `${lesson.title} | ${courseModule.title} | Sawubona Academy`,
    description: lesson.summary,
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = getLessonBySlug(params.moduleSlug, params.lessonSlug);
  const courseModule = getModuleBySlug(params.moduleSlug);

  if (!lesson || !courseModule) {
    notFound();
  }

  const { previous, next } = getAdjacentLessons(lesson.id);

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <LessonPlayer
            lesson={lesson}
            module={courseModule}
            previousLesson={previous}
            nextLesson={next}
          />
        </div>
      </div>
    </Layout>
  );
}
