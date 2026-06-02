# Nancy Portfolio - 3 Tier Architecture

## Architecture

```text
Tier 1: Frontend
React + TypeScript + Tailwind CSS
Deploy: AWS Amplify

Tier 2: Backend
Python FastAPI API service
Deploy: AWS App Runner / Render / EC2 / Lambda later

Tier 3: Service/Data Layer
Email service + optional MongoDB/MySQL + resume/static storage
```

## Run Frontend

```powershell
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Build Frontend

```powershell
cd frontend
npm run build
```

## Run Backend

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000/docs
```

## AWS Amplify Deployment

Deploy only the `frontend` folder to AWS Amplify.

Build command:

```text
npm run build
```

Output folder:

```text
dist
```
