# Dashboard in a Box — Frontend

Frontend application for the **Operations Control Tower** portfolio project.

The application provides the management dashboard UI and communicates with the ASP.NET Core backend API.

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS

## Main UI Capabilities

* Dashboard layout
* KPI cards
* Project status
* Critical Attention
* Task status visualization
* Operational tasks table
* Search
* Status filtering
* Task details
* Reusable UI components
* Loading and error states
* Responsive layout
* Light Mode
* Dark Mode

## Backend Communication

The frontend communicates with the ASP.NET Core Web API.

During local development:

```text
http://localhost:5077
```

Current endpoints:

```text
GET /api/projects
GET /api/tasks
```

The frontend does **not** access Supabase directly.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application is available locally at:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
└── types/
```

## Main Portfolio Documentation

For the complete project overview, architecture, screenshots, technical decisions, and known limitations, see:

* [`../README.md`](../README.md)
* [`../README.he.md`](../README.he.md)
