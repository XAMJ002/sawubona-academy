/* eslint-disable @next/next/no-assign-module-variable */

// src/data/course.ts

export type Lesson = {
  id: string
  moduleSlug: string
  lessonSlug: string
  title: string
  summary: string
  body: string
  reflectionQuestions: string[]
  downloads: { label: string; href: string }[]
}

export type CourseModule = {
  id: string
  moduleSlug: string
  title: string
  description: string
  lessons: Lesson[]
}

export type Course = {
  id: string
  slug: string
  title: string
  description: string
  modules: CourseModule[]
}

export const course: Course = {
  id: 'sawabuna-academy',
  slug: 'sawabuna-academy',
  title: 'JMCG Sawubona Academy: Trauma-Informed Leadership & Workforce Healing',
  description:
    'A 6-module, self-paced course for managers and practitioners who want to build people-ready workplaces and trauma-informed workforce systems.',
  modules: [
    {
      id: 'module-1',
      moduleSlug: 'sawubona-seeing-people-not-placements',
      title: 'Sawubona: Seeing People, Not Placements',
      description:
        'Reframe workforce development from “job-ready people” to “people-ready workplaces” and introduce workplace trauma as a public health issue.',
      lessons: [
        {
          id: 'm1-l1',
          moduleSlug: 'sawubona-seeing-people-not-placements',
          lessonSlug: 'workplace-trauma-public-health',
          title: 'Workplace Trauma as a Public Health Issue',
          summary:
            'Introduce workplace trauma as a determinant of health and contrast extraction-based workforce models with healing-centered approaches.',
          body:
            'In this lesson, we explore how workplace trauma affects health, employment stability, and community outcomes. We contrast traditional, placement-focused workforce models with a prevention-oriented, healing-centered framework that asks whether workplaces are truly people-ready.',
          reflectionQuestions: [
            'Where have you seen “placements over people” show up in your own work?',
            'What changes when you see workplace trauma as a public health issue instead of an individual problem?',
          ],
          downloads: [
            {
              label: 'Workplace Trauma as a Public Health Issue – Brief (PDF)',
              href: '/docs/workplace-trauma-brief.pdf',
            },
          ],
        },
        {
          id: 'm1-l2',
          moduleSlug: 'sawubona-seeing-people-not-placements',
          lessonSlug: 'workforce-healing-not-extraction',
          title: 'Workforce Healing, Not Extraction',
          summary:
            'Examine how traditional workforce systems extract labor from people still trying to survive and what a healing-centered alternative looks like.',
          body:
            'This lesson looks at how scarcity-based workforce models measure success through placements while ignoring retention, health, and dignity. We introduce a healing-centered approach that measures thriving, not just survival.',
          reflectionQuestions: [
            'Where do you notice extractive dynamics in your current programs or partnerships?',
            'What would it mean to prioritize healing and capacity-building over short-term placement metrics?',
          ],
          downloads: [
            {
              label: 'Workforce Healing Not Extraction – Slides (PDF)',
              href: '/docs/workforce-healing-not-extraction.pdf',
            },
          ],
        },
        {
          id: 'm1-l3',
          moduleSlug: 'sawubona-seeing-people-not-placements',
          lessonSlug: 'mapping-harm-in-my-system',
          title: 'Reflection: Where Harm Shows Up in My System',
          summary:
            'Use a structured reflection to identify risk and protective factors across your program, workplaces, and systems.',
          body:
            'In this reflective lesson, you map where harm shows up in your context using a prevention framework: program-level, workplace-level, and systems-level factors. The goal is clarity, not blame.',
          reflectionQuestions: [
            'Where do risk factors (burnout, surveillance, instability) cluster in your context?',
            'Where do you already see protective factors you could build on?',
          ],
          downloads: [
            {
              label: 'Where Is Harm Showing Up? – Reflection Worksheet',
              href: '/docs/where-is-harm-showing-up.pdf',
            },
          ],
        },
      ],
    },
    {
      id: 'module-2',
      moduleSlug: 'trauma-fundamentals-for-leaders',
      title: 'Trauma Fundamentals for Leaders',
      description:
        'Build a practical understanding of trauma, stress, and the brain so leaders can interpret behavior through a trauma-aware lens.',
      lessons: [
        {
          id: 'm2-l1',
          moduleSlug: 'trauma-fundamentals-for-leaders',
          lessonSlug: 'types-of-trauma',
          title: 'Types of Trauma and Common Responses',
          summary:
            'Overview of acute, chronic, complex, historical, and collective trauma and how these experiences shape behavior.',
          body:
            'This lesson introduces key trauma categories and common reactions, with emphasis on how these patterns show up in work and program settings.',
          reflectionQuestions: [
            'Which types of trauma are most relevant to the people you serve or supervise?',
            'How might your understanding of “difficult behavior” change with this lens?',
          ],
          downloads: [
            {
              label: 'Trauma Awareness Training – Slides (PDF)',
              href: '/docs/trauma-awareness-training.pdf',
            },
          ],
        },
        {
          id: 'm2-l2',
          moduleSlug: 'trauma-fundamentals-for-leaders',
          lessonSlug: 'barking-dog-wise-owl',
          title: 'The Barking Dog and Wise Owl: Brain and Behavior at Work',
          summary:
            'Use a simple brain model to understand stress responses and why people react the way they do under pressure.',
          body:
            'We explore the triune brain model and the Barking Dog/Wise Owl metaphor to explain how stress hijacks executive function and shows up in workplace behavior.',
          reflectionQuestions: [
            'When have you seen the “Barking Dog” show up for you or your staff?',
            'What helps your “Wise Owl” return in high-stress situations?',
          ],
          downloads: [
            {
              label: 'Barking Dog vs Wise Owl – Activity Sheet',
              href: '/docs/barking-dog-wise-owl.pdf',
            },
          ],
        },
        {
          id: 'm2-l3',
          moduleSlug: 'trauma-fundamentals-for-leaders',
          lessonSlug: 'my-triggers-and-tells',
          title: 'Self-Reflection: My Own Triggers and Tells',
          summary:
            'Map your own triggers, survival strategies, and tells so you can lead from greater self-awareness.',
          body:
            'Leaders are not outside the stress ecosystem. This lesson guides you through reflecting on your own patterns so you can lead with more awareness and less reactivity.',
          reflectionQuestions: [
            'What situations tend to trigger your own Barking Dog?',
            'What practices help you return to grounded leadership when you feel activated?',
          ],
          downloads: [
            {
              label: 'Survival Skills Reflection Worksheet',
              href: '/docs/survival-skills-reflection.pdf',
            },
          ],
        },
      ],
    },
    // Modules 3–6 can be added later
  ],
}

// Helper functions

export function getModules() {
  return course.modules
}

export function getModuleBySlug(moduleSlug: string) {
  return course.modules.find((courseModule) => courseModule.moduleSlug === moduleSlug)
}

export function getLessonBySlugs(moduleSlug: string, lessonSlug: string) {
  const courseModule = getModuleBySlug(moduleSlug)
  if (!courseModule) return undefined
  return courseModule.lessons.find((lesson) => lesson.lessonSlug === lessonSlug)
}
