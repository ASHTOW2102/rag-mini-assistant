cd "$(dirname "$0")"       # Change to script's directory (backend)
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000