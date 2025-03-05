# Todo App with Remix

A simple and elegant Todo application built with Remix, React, TypeScript, and Tailwind CSS.

## Features

- Create new todos
- Mark todos as complete/incomplete 
- Delete todos
- Responsive design with Tailwind CSS
- Built using functional programming principles in React
- Written in TypeScript with strong typing

## Tech Stack

- [Remix](https://remix.run/) - Full-stack React framework
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Biome](https://biomejs.dev/) - Linter and formatter

## Development

Clone the repository and install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

## Building and Deployment

Build the application for production:

```sh
npm run build
```

Start the production server:

```sh
npm start
```

## Project Structure

- `app/` - Application source code
  - `components/` - Reusable UI components
  - `features/` - Feature-specific components (e.g., TodoManager)
  - `routes/` - Remix routes
  - `services/` - Service functions for data handling
  - `types.ts` - TypeScript type definitions

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run typecheck` - Run TypeScript type checking
