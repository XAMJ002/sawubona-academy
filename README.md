# JMCG Sawubona Academy

A trauma-informed leadership and workforce healing online course platform built with Next.js 14.

## Features

- **6 comprehensive modules** covering trauma-informed leadership
- **17 lessons** with reflection questions and downloadable resources
- **Local progress tracking** via localStorage
- **Responsive design** with calm, trauma-informed styling
- **Self-paced learning** with no punitive mechanics

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy" (no configuration needed)

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Run deployment:

```bash
vercel
```

3. Follow the prompts

## Project Structure

```
sawubona-academy/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles
│   │   └── course/
│   │       ├── page.tsx        # Course overview
│   │       └── [moduleSlug]/
│   │           └── [lessonSlug]/
│   │               └── page.tsx # Lesson player
│   ├── components/
│   │   ├── Layout.tsx          # Header/footer wrapper
│   │   ├── ModuleList.tsx      # Module listing component
│   │   ├── LessonPlayer.tsx    # Lesson content display
│   │   └── ProgressBadge.tsx   # Progress indicators
│   ├── data/
│   │   └── course.ts           # Course content data
│   └── hooks/
│       └── useLessonProgress.ts # localStorage progress hook
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization

### Updating Course Content

Edit `src/data/course.ts` to modify:
- Module titles and descriptions
- Lesson content and reflection questions
- Downloadable resource links

### Styling

The app uses Tailwind CSS with custom colors defined in `tailwind.config.ts`:
- `forest` - Primary brand color (deep green)
- `sage` - Secondary tones
- `cream` - Background warmth
- `terracotta` - Accent color

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Progress Storage**: Browser localStorage

## License

Private - JMCG © 2024
