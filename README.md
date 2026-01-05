## vee-dashboard

Modern job search dashboard built with **React 18**, **Vite**, **TypeScript**, **Ant Design**, and **Redux Toolkit**.  
The app provides a public layout with a header, footer, profile sidebar, job search form, and reusable job list cards.

---

### Table of Contents

- **Features**
- **Tech Stack**
- **Project Structure**
- **Getting Started**
- **Available Scripts**
- **Environment Variables**
- **Architecture Overview**
  - Routing & Layout
  - State Management (Redux Toolkit + redux-persist)
  - API Client (Axios)
  - UI & Theming
- **Key Components**

---

## Features

- **Public layout** with shared `Header` and `Footer` using Ant Design `Layout`.
- **Home dashboard** showing:
  - Profile sidebar
  - Job search form with filters
  - Reusable job lists (Featured, Recommended, Latest).
- **Responsive design** with custom `Container` component and `useScreenSize` hook.
- **Reusable job card & list components** with shared TypeScript types.
- **Global state management** with Redux Toolkit and persisted store (auth, jobs).
- **Configurable theme** via Ant Design `ConfigProvider`.

---

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Ant Design (`antd`), `@ant-design/icons`
- **State Management**: Redux Toolkit, React Redux, redux-persist
- **Routing**: React Router DOM v7 (`createBrowserRouter`, `RouterProvider`)
- **HTTP Client**: Axios
- **Animations**: Framer Motion, GSAP (available for animated components)
- **Linting**: ESLint (with React hooks & React Refresh plugins)

---

## Project Structure

High-level structure:

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig*.json
├── public/
│   └── static assets (favicons, logos)
└── src/
    ├── main.tsx           # App entry, React root, providers
    ├── App.tsx            # Top-level RouterProvider
    ├── assets/
    │   ├── images/        # Icons, logos, avatars, exported via index.ts
    │   └── styles/
    │       ├── antStyle.ts
    │       └── themeConfig.ts  # Ant Design theme tokens
    ├── components/
    │   ├── AnimateWrapper/
    │   ├── JobList/       # JobCard, list, and shared types
    │   ├── JobSearchForm/
    │   ├── ProfileCard/
    │   ├── Typo/
    │   └── UI/Container.tsx
    ├── hooks/             # Custom hooks (dispatch, selector, screen size, etc.)
    ├── routes/            # Router config (public routes)
    ├── services/          # Axios instances and auth helpers
    ├── store/             # Redux store, slices, root reducer
    ├── types/             # Shared TypeScript types
    └── views/
        ├── layout/public/ # PublicLayout, Header, Footer
        └── pages/Home/    # Home page
```

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended, e.g. 18+)
- **npm** (bundled with Node) or another package manager

### Installation

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

By default the app runs on `http://localhost:3000` (see the `dev` script in `package.json`).

### Build for production

```bash
npm run build
```

This runs TypeScript build (`tsc -b`) and then `vite build`, outputting static assets to `dist/`.

### Preview production build

```bash
npm run preview
```

Serves the built files locally so you can verify the production bundle.

---

## Available Scripts

From `package.json`:

- **`npm run dev`**: Start Vite dev server on port 3000.
- **`npm run build`**: Type-check with `tsc -b` and build for production with Vite.
- **`npm run lint`**: Run ESLint on the project.
- **`npm run preview`**: Preview the production build locally.

---

## Environment Variables

The API client uses a base URL from Vite environment variables:

- **`VITE_API_BASE_URL`**: Base URL for backend API requests.

Create a `.env` file in the project root (not committed to version control) and define:

```bash
VITE_API_BASE_URL=https://your-api.example.com
```

Vite exposes variables prefixed with `VITE_` to the client via `import.meta.env`.

---

## Architecture Overview

### Routing & Layout

- **Router** is configured in `src/routes/index.ts` using `createBrowserRouter`.
- **Public routes** are defined in `src/routes/public`, wrapped by `PublicLayout` from `src/views/layout/public`.
- `PublicLayout` composes:
  - `Header` (top navigation, search bar, profile avatar, mobile drawer menu)
  - `Content` (renders child routes via `<Outlet />`)
  - `Footer` (links and copyright text, responsive via `useScreenSize`).

### State Management (Redux Toolkit + redux-persist)

- Store is created in `src/store/index.ts` with `configureStore` and a `persistedReducer`.
- **Slices**:
  - `userSlice` (`src/store/features/userSlice.ts`): stores auth token and basic user info; exposes `setToken`, `removeToken`, `setUser`, and `getUser` selector.
  - `jobsSlice` (`src/store/features/jobsSlice.ts`): manages an array of jobs with `setJobs`, `addJob`, `clearJobs`, and `selectJobs`.
- **Persistence**:
  - Configured via `redux-persist` with `storage` (localStorage) and key `"root"`.
  - `PersistGate` in `main.tsx` delays rendering until persisted state is rehydrated.

### API Client (Axios)

- Main Axios instance in `src/services/api.ts`:
  - **`baseURL`**: `import.meta.env.VITE_API_BASE_URL`.
  - Adds `Accept: application/json` and `Content-Type: application/json`.
  - Enables `withCredentials` and sets a `timeout` of 10s.
- **Request interceptor**:
  - Reads auth `token` from Redux store (`state.user.token`) and attaches it as `Authorization: Bearer <token>` if present.
- **Response interceptor**:
  - On `401` with message `"Unauthenticated."`, dispatches `removeToken()` to clear auth state.
  - Returns the raw `response` object for downstream consumers.

### UI & Theming

- Ant Design theming configured in `src/assets/styles/themeConfig.ts`:
  - Sets `colorPrimary` and customizes `Button` tokens (border radius, height, padding).
- `main.tsx` wraps the app with `ConfigProvider` using `themeConfig`.
- Global and component-level styles:
  - `src/index.css`, `src/App.css` for global layout and utility classes.
  - CSS modules (e.g. `Header.module.css`, `JobCard.module.css`, `JobList.module.css`) for scoped component styles.
- Custom layout helpers:
  - `UI/Container.tsx` provides a constrained, responsive container with padding utilities.

---

## Key Components

- **Home Page** (`src/views/pages/Home/index.tsx`)
  - Assembles the main dashboard layout:
    - `ProfileSidebar` in a left column.
    - `JobSearchForm` and multiple `JobList` instances in the right column.
  - Uses Ant Design `Row` and `Col` for responsive grid layout.

- **Job List & Card** (`src/components/JobList`)
  - **Type**: `FeaturedJob` in `types.ts` defines the shape of job data:
    - `title`, `company`, `location`, `timeAgo`, `applicants`, optional `salary`, `isFeatured`, `logoUrl`.
  - **`JobCard`**:
    - Displays job logo, title, company, location, and time-ago + applicants.
    - Shows an optional `"Promoted"` badge and action buttons (`Apply Now`, save icon).
  - **`JobList`**:
    - Renders a title and “See {title}” link button.
    - Maps over `jobs: FeaturedJob[]` and renders `JobCard` for each entry.

- **Layout Components**
  - **`Header`**:
    - Logo, navigation menu, search input with icon, “Resume Builder” CTA, user avatar.
    - Mobile-friendly drawer navigation via `Drawer` and `MenuOutlined` icon.
  - **`Footer`**:
    - Simple two-column layout with links and copyright.
    - Uses `useScreenSize` to adapt alignment on mobile.

---

If you need more detailed documentation for any specific module (e.g. hooks, animation components, or a particular slice), you can request a focused section and it can be added here.
