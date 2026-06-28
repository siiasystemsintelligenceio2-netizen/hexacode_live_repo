from fastapi import FastAPI, WebSocket
import asyncio

app = FastAPI()

@app.get("/")
def root():
    return {"status": "hexacode online"}

@app.websocket("/ws")
async def ws_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = await websocket.receive_json()

        await websocket.send_json({"state": "DECODED", "msg": f"Decoded {data.get('code')}"})
        await asyncio.sleep(0.5)

        await websocket.send_json({"state": "SIMULATING", "msg": "Simulating execution"})
        await asyncio.sleep(0.5)

        await websocket.send_json({"state": "DEPLOYING", "msg": "Deploying feature"})
        await asyncio.sleep(0.5)

        await websocket.send_json({"state": "COMPLETED", "msg": "Done"})