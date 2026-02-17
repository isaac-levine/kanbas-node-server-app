# Kanbas API

The backend REST API for [Kanbas](https://github.com/isaac-levine/kanbas-react-web-app), a Canvas LMS clone. Manages courses, modules, assignments, users, and enrollments.

## Tech Stack

- **Runtime:** Node.js (ES Modules), Express
- **Security:** Helmet, CORS
- **Data:** JSON flat-file storage

## API Routes

| Route             | Description            |
|-------------------|------------------------|
| `/api/courses`    | Course CRUD            |
| `/api/modules`    | Module CRUD            |
| `/api/assignments`| Assignment CRUD        |

## Getting Started

```bash
npm install
cp .env.example .env  # Configure FRONTEND_URL for CORS
npm start
```

Runs on port 4000 by default.

## License

MIT
