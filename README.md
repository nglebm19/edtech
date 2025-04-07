# EdTech

EdTech is a fullstack web application for learning resources management, summarization, and transformation of educational content into meaningful insights.

## 📌 Project Structure
```
/your-project-root
│
├── frontend/              # Frontend app (React, Vite, TypeScript, shadcn-ui, Tailwind CSS)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── tailwind.config.js
│   │   ├── vite.config.ts
│   └── package.json
│
├── backend/               # Backend app (FastAPI, Python, PostgreSQL)
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── config.py
│   │   └── database.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── .env                   # Environment variables for the project
├── docker-compose.yml     # Docker configuration for deployment
├── README.md
└── .gitignore
```

## 🚀 Features
- User Authentication (Sign Up, Log In)
- Resource Saving and Summarization
- Tagging and Filtering of Resources
- Cloud Deployment (Planned)

## 🛠️ Tech Stack
### Frontend
- Vite
- React
- TypeScript
- shadcn-ui
- Tailwind CSS

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- Docker (Deployment)

## 📦 Installation & Setup
### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
- MacOS:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
- Linux:
```bash

```

### PostgreSQL Setup
```bash
brew install postgresql
brew services start postgresql
createdb your_database_name
```

### Docker Setup
```bash
docker-compose up --build
```

## 📌 Usage
1. Run the frontend and backend applications using their respective commands.
2. Access the frontend at `http://localhost:5173` (Vite default).
3. Access the backend API at `http://localhost:8000` (FastAPI default).

## 📌 Environment Variables
Create a `.env` file in the root directory and add:
```
DATABASE_URL=postgresql://postgres:password@localhost/<your_database_name>
```

## 🌐 Deployment
Deployment setup with Docker and cloud platforms (like AWS or DigitalOcean) is planned.

Happy coding! 🚀

