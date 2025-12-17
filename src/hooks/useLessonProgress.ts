"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "sawubona-progress";

interface ProgressState {
  completedLessons: string[];
}

export function useLessonProgress() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed: ProgressState = JSON.parse(stored);
          setCompletedLessons(parsed.completedLessons || []);
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      try {
        const state: ProgressState = { completedLessons };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Error saving progress:", error);
      }
    }
  }, [completedLessons, isLoaded]);

  const isCompleted = useCallback(
    (lessonId: string): boolean => {
      return completedLessons.includes(lessonId);
    },
    [completedLessons]
  );

  const markCompleted = useCallback((lessonId: string): void => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) {
        return prev;
      }
      return [...prev, lessonId];
    });
  }, []);

  const markIncomplete = useCallback((lessonId: string): void => {
    setCompletedLessons((prev) => prev.filter((id) => id !== lessonId));
  }, []);

  const getCompletedCount = useCallback((): number => {
    return completedLessons.length;
  }, [completedLessons]);

  const resetProgress = useCallback((): void => {
    setCompletedLessons([]);
  }, []);

  return {
    completedLessons,
    isLoaded,
    isCompleted,
    markCompleted,
    markIncomplete,
    getCompletedCount,
    resetProgress,
  };
}
