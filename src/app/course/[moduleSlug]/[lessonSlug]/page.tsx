"use client";

import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/LessonPlayer";
import { getLessonBySlugs, getModuleBySlug } from "@/data/course";

type LessonPageProps = {
  params: {
    moduleSlug: string;
    lessonSlug: string;
  };
};

export default function LessonPage({ params }: LessonPageProps) {
  const module = getModuleBySlug(params.moduleSlug);
  const lesson = getLessonBySlugs(params.moduleSlug, params.lessonSlug);

  if (!module || !lesson) {
    notFound();
  }

  return (
    <LessonPlayer
      module={module}
      lesson={lesson}
      previousLesson={null}
      nextLesson={null}
    />
  );
}
