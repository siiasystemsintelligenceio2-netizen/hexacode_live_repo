# hexacode_live_repo
Mobile Scan ↓ WebSocket Send ↓ Backend Simulation Engine ↓ Streaming state updates ↓ Mobile Live UI updates

# HEXACODE Live Simulation Repo

## Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

## Mobile
cd mobile
npx expo start

## Flow
Scan -> WebSocket -> Simulation -> Deployment events 