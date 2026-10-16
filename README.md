# Ankit Kapoor — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

## Run locally

Start the FastAPI backend in one terminal:

```bash
cd ../portfolio_backend
source .venv/bin/activate
python -m pip install -r requirements-dev.txt
uvicorn main:app --reload
```

The API is available at `http://127.0.0.1:8000`; its interactive docs are at
`http://127.0.0.1:8000/docs`.

In a second terminal, configure and run the frontend:

```bash
cp .env.example .env.local
npm install
npm start
```

The contact form posts to the backend URL in `VITE_CONTACT_API_URL`. Set that variable
to the deployed API URL in Netlify before deploying the frontend.

For production, configure `ALLOWED_ORIGINS` on the backend to the exact frontend origin.
The default SQLite database is suitable for local development; free hosting filesystems
may be ephemeral, so use persistent storage or a hosted database for production messages.

The portfolio content is maintained in `src/assets/data/resumeData.js`.
