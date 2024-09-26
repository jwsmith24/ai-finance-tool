from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# create FastAPI instance
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Can also specify specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# define request model
class Message(BaseModel):
    name: str


# define root endpoint
@app.get('/')
def root():
    return {"message": "You hit the FastAPI API how fun"}


@app.post('/api')
async def handle_request(msg: Message):
    print(msg.name)
    return {"msg": "You hit the FastAPI API how fun"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
