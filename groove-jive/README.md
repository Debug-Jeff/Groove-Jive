# Groove-Jive
Just grooving and jiving :)

# Mood-Based Song Recommendation Web App

This is a Next.js web application that provides song recommendations based on the user's mood. The app features user authentication, mood selection, song recommendations, and a search functionality.

## Features

- User Authentication (using NextAuth.js)
- Mood Selection
- Song Recommendations based on mood
- Search functionality for songs, artists, and albums
- Responsive design

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:


I'll provide you with the entire file structure of how your project should look if you've set it up locally based on the changes we've made.

Here's how your file structure should look:

```plaintext
mood-based-song-recommendation/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   ├── home/
│   │   └── page.tsx
│   └── login/
│       └── page.tsx
├── components/
│   ├── ErrorBoundary.tsx
│   ├── HomePage.tsx
│   ├── LandingPage.tsx
│   ├── Library.tsx
│   ├── LoginForm.tsx
│   ├── MoodSelector.tsx
│   ├── Player.tsx
│   ├── RecentlyPlayed.tsx
│   ├── SearchBar.tsx
│   ├── Seo.tsx
│   ├── Sidebar.tsx
│   ├── SongCard.tsx
│   └── SongRecommendations.tsx
├── contexts/
│   └── AppContext.tsx
├── lib/
│   ├── analytics.ts
│   ├── db.ts
│   ├── mongodb.ts
│   └── spotify.ts
├── pages/
│   └── api/
│       ├── auth/
│       │   └── [...nextauth].ts
│       ├── recommendations.ts
│       └── user/
│           └── preferences.ts
├── public/
│   ├── favicon.ico
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── manifest.json
├── styles/
│   └── theme.ts
└── __tests__/
    └── MoodSelector.test.tsx
```

This structure includes all the main files and folders we've discussed. Here's a brief explanation of each:

1. Root directory files:

1. `.env.local`: Contains environment variables
2. `.gitignore`: Specifies files to be ignored by Git
3. `next.config.js`: Next.js configuration file
4. `package.json`: Project dependencies and scripts
5. `tsconfig.json`: TypeScript configuration



2. `app/`: Contains the main application pages and layouts (Next.js 13+ App Router)
3. `components/`: Contains all React components
4. `contexts/`: Contains the AppContext for state management
5. `lib/`: Contains utility functions and database connections
6. `pages/`: Contains API routes (Next.js Pages Router for API routes)
7. `public/`: Contains static assets
8. `styles/`: Contains the theme configuration
9. `__tests__/`: Contains test files


Make sure all these files and folders are present in your local setup.