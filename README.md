# ✨ Sketchboard

> Sketchboard is a collaborative drawing application featuring a real-time canvas, multiplayer synchronization.

Sketchboard is a modern monorepo application built for real-time collaborative drawing experiences.
It combines a blazing-fast Next.js frontend, WebSocket-powered collaboration, BullMQ-based persistence, and shared packages for scalable full-stack development.

---

# 🚀 Features

* 🎨 Real-time collaborative canvas
* ⚡ WebSocket-powered live synchronization
* 🔐 Authentication system with JWT
* 🧠 Persistent room history using BullMQ workers (comming soon)
* 📦 Turborepo monorepo architecture
* 🗄️ Prisma ORM + PostgreSQL
* 🎯 Shared UI & TypeScript packages
* 💨 TailwindCSS shared configuration
* 🧩 Fully modular backend architecture

---

# Project Structure overview ⚡

This project, Sketchboard, is a full-stack monorepo designed for a collaborative drawing application. It uses pnpm workspaces for package management and Turborepo for build orchestration.

### 🏗️ Architecture Overview
  The project is split into Applications (runnable services) and Packages (shared libraries).

  📱 Applications (apps/)
   * web: A Next.js frontend application using the App Router.
       * Styling: Tailwind CSS and Vanilla CSS.
       * Canvas Logic: Located in app/draw/ and app/canvas/, handling the core drawing functionality.
       * Features: Includes Sign-in/Sign-up flows, a dashboard, and collaborative drawing rooms ([roomId]).
   * http-backend: A Node.js service (likely Express) handling RESTful operations.
       * Modules: Auth, Room management, and Middleware.
   * ws-backend: A dedicated WebSocket server.
       * Handles real-time collaboration, allowing multiple users to draw on the same canvas simultaneously.
       * Includes a queue-worker for processing messages.

   **📦 Shared Packages (packages/)**
   * db: Centralized database logic using Prisma ORM. It defines the schema.prisma used by both backends.
   * common: Shared TypeScript types and constants used by both the frontend and backends to ensure type safety across the stack.
   * be-common: Shared logic specifically for the backend services.
   * ui: A shared React component library (includes a Button.tsx and uses Tailwind).
   * eslint-config & typescript-config: Standardized linting and TypeScript configurations used across all sub-projects.

  **🛠️ Key Technologies**
   * Frontend: Next.js, React, Tailwind CSS, Lucide React (implied by icons).
   * Backend: Node.js, TypeScript, WebSockets.
   * Database: Prisma (PostgreSQL/MySQL based on typical Prisma usage).
   * Monorepo Tools: pnpm, Turborepo.

  This structure allows for high code reuse (especially types and database schemas) and keeps the real-time drawing logic (ws-backend) separate from
  the standard API logic (http-backend).

---

# 🏗️ Monorepo Structure

```bash
Sketchboard/
│
├── apps/
│   ├── web/                # Next.js frontend
│   ├── http-backend/       # Express REST API
│   └── ws-backend/         # WebSocket server + BullMQ workers
│
├── packages/
│   ├── db/                 # Prisma client wrapper
│   ├── common/             # Shared types & zod schemas
│   └── ui/                 # Shared Tailwind/UI config
│
├── prisma/                 # Prisma schema & migrations
└── turbo.json
```

---

# 🖥️ Tech Stack

## Frontend

* Next.js (App Router)
* React
* TypeScript
* TailwindCSS
* WebGL / Shader-based visuals

## Backend

* Express.js
* WebSocket Server
* BullMQ
* Redis
* Prisma ORM

## Database & Infra

* PostgreSQL
* Redis

## Tooling

* Turborepo
* pnpm

---

# 📂 Important Files

## Frontend

| File                                          | Description                       |
| --------------------------------------------- | --------------------------------- |
| `apps/web/components/Canvas.tsx`              | Main collaborative canvas wrapper |
| `apps/web/app/draw/*`                         | Drawing engine & shape handling   |
| `apps/web/components/AuthPage.tsx`            | Authentication UI                 |
| `apps/web/components/LaserFlowBoxExample.tsx` | Demo shader wrapper               |

## Backend

| File                             | Description               |
| -------------------------------- | ------------------------- |
| `apps/http-backend/src/index.ts` | Express server bootstrap  |
| `auth.service.ts`                | Authentication logic      |
| `room.ts`                        | Room history endpoints    |
| `apps/ws-backend/src/index.ts`   | WebSocket server          |
| `messages.worker.ts`             | BullMQ persistence worker |

---

# 📋 Requirements

Before starting the project, make sure you have:

* Node.js `18+`
* `pnpm`
* PostgreSQL database
* Redis server

---

# 🔐 Environment Variables

Create a `.env` file in the apps/http-backend and apps/web and apps/ws-backend and packages/db directories.

The following environment variables are required:
**http-backend**
```env
FRONTEND_URL=localhost:3000
PORT=3002
JWT_SECRET=your_jwt_secret_key
```
**web**
```env
BACKEND_URL=localhost:3002
```

**ws-backend**
```env
PORT=8080
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key
```
**db**
```env
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/postgres"
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/samarkun23/Excellidraw.git
cd Excellidraw
```

## 2. Install dependencies

```bash
pnpm install
```

## 3. Setup environment variables

Create a `.env` file and add the required variables.

---

# 🚀 Running the Project

## Run everything (recommended)

```bash
pnpm turbo dev
```

## Run only the frontend

```bash
pnpm turbo dev --filter=web
```

## Run individual services

### Frontend

```bash
cd apps/web
pnpm dev
```

### HTTP Backend

```bash
cd apps/http-backend
pnpm dev
```

### WebSocket Backend

```bash
cd apps/ws-backend
pnpm dev
```

---

# 🏗️ Build the Project

```bash
pnpm turbo build
```

---

# 🔄 How Realtime Collaboration Works

```text
Client → WebSocket Server → BullMQ Queue → Worker → Database
```

### Workflow

1. The client connects to the WebSocket server.
2. Drawing events are emitted in real time.
3. Messages are queued using BullMQ.
4. Workers persist data into PostgreSQL.
5. Room history is fetched through the HTTP backend.

---

# 🧠 Development Notes

## Tailwind Configuration

Shared Tailwind presets are located in:

```bash
packages/ui
```

Make sure your frontend imports the shared preset correctly.

---

## Prisma

Run migrations before starting the backend:

```bash
cd packages/db
npx prisma migrate dev
npx prisma generate
```

---

# 🛠️ Troubleshooting

## Hydration / SSR Issues

If you encounter hydration mismatches in Next.js:

* Use `"use client"` for browser-only components
* Avoid `Date.now()` or `Math.random()` during SSR
* Keep server/client-rendered values deterministic

---

## Canvas Not Filling Screen

Ensure:

```css
position: fixed;
inset: 0;
height: 100vh;
```

Also resize the canvas using `devicePixelRatio` for crisp rendering.

---

## WebSocket Connection Failing

* Verify `WS_URL`
* Ensure the WebSocket server is running
* Confirm ports match frontend config

---

## BullMQ Worker Issues

* Check if Redis is running
* Verify `REDIS_URL`
* Ensure workers are started

---

# 🤝 Contributing

Contributions are welcome!

### Steps

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

Please keep frontend and backend changes separated whenever possible.

---

# 📌 Future Improvements

* [ ] Multiplayer cursors
* [ ] Undo / Redo synchronization
* [ ] File export support
* [ ] Presence indicators
* [ ] End-to-end encryption
* [ ] AI-assisted drawing tools
* [ ] More drawing tools
* [ ] Chat support

<!-- --- -->

<!-- # 📄 License -->

<!-- This project is licensed under the **MIT License**. -->

---

# Project Preview
![Home Page](./assets/excellidraw_dashboard.png)
![Room Page](./assets/excellidraw_board.png)
![Canvas Page](./assets/execllidraw_sketch.png)


# ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share it with developers
* Contribute new features

---

# 👨‍💻 Author

Built with passion using modern web technologies.
