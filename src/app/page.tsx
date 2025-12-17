import Link from "next/link";
import { Layout } from "@/components/Layout";
import { course, getFirstLesson, getAllLessons } from "@/data/course";

export default function HomePage() {
  const firstLesson = getFirstLesson();
  const totalLessons = getAllLessons().length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-forest-600 to-forest-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            JMCG Sawubona Academy
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 mb-4 max-w-3xl mx-auto">
            Trauma-Informed Leadership & Workforce Healing
          </p>
          <p className="text-lg text-sage-200 mb-8 max-w-2xl mx-auto">
            A transformative course for leaders ready to build people-ready
            workplaces where both workers and communities can heal and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/course/${firstLesson.moduleSlug}/${firstLesson.lessonSlug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-forest-600 rounded-xl font-semibold text-lg hover:bg-cream-100 transition-colors"
            >
              Start Course
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Course Outline
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What is Sawubona?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-forest-600">Sawubona</strong> is a Zulu
              greeting meaning &ldquo;I see you.&rdquo; It&apos;s more than a hello—it&apos;s
              an acknowledgment of the other person&apos;s full humanity, their
              dignity, their worth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              In this course, we extend that seeing to the workplace. We learn
              to see workers not as resources to extract but as whole people
              deserving of healing environments. We shift from asking &ldquo;Is this
              worker job-ready?&rdquo; to &ldquo;Is this workplace people-ready?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Course Overview
            </h2>
            <p className="text-lg text-gray-600">
              {course.modules.length} modules • {totalLessons} lessons •
              Self-paced learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.modules.map((module, index) => (
              <div
                key={module.id}
                className="bg-cream-50 rounded-xl p-6 border border-sage-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-gray-800">{module.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{module.description}</p>
                <p className="text-sage-500 text-sm mt-3">
                  {module.lessons.length} lessons
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-700 transition-colors"
            >
              View full course details
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
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Who Is This Course For?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Workforce Development Professionals",
                desc: "Program managers, career coaches, and staff who support job seekers and workers.",
              },
              {
                title: "Human Services Leaders",
                desc: "Directors, supervisors, and managers in social services, healthcare, and community organizations.",
              },
              {
                title: "Education Administrators",
                desc: "Principals, deans, and leaders in K-12 and higher education settings.",
              },
              {
                title: "Community Violence Intervention Staff",
                desc: "Outreach workers, supervisors, and program leaders doing community safety work.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 bg-white rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-terracotta-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-lg text-cream-100 mb-8">
            Begin your journey toward building a people-ready workplace where
            healing is possible.
          </p>
          <Link
            href={`/course/${firstLesson.moduleSlug}/${firstLesson.lessonSlug}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-forest-600 rounded-xl font-semibold text-lg hover:bg-cream-100 transition-colors"
          >
            Start the Course
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
