import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-forest-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link 
              href="/" 
              className="text-xl font-semibold hover:text-cream-100 transition-colors"
            >
              Sawubona Academy
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                href="/course" 
                className="text-cream-100 hover:text-white transition-colors"
              >
                Course Overview
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-sage-800 text-sage-200">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="font-semibold text-white mb-2">
              JMCG Sawubona Academy
            </p>
            <p className="text-sm">
              Trauma-Informed Leadership & Workforce Healing
            </p>
            <p className="text-sm mt-4 text-sage-400">
              © {new Date().getFullYear()} JMCG. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
