# Flask Application

A small Flask web application — this README explains how to run the app locally and how to configure credentials safely.

## Prerequisites
- Python 3.8+ (3.10+ recommended)
- pip

## Quick start
1. Open a terminal and change directory to the project root (where the app files are).

2. Create and activate a virtual environment.

Windows (PowerShell):
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```
Unix / Git Bash / WSL:
```bash
python -m venv venv
source venv/bin/activate
```

3. Install dependencies.
```bash
# If you have a requirements.txt
pip install -r requirements.txt
# Or install the essentials directly
pip install Flask Flask-Mail
```

4. Configure environment variables for sensitive credentials (examples):

PowerShell:
```powershell
$env:MAIL_USERNAME = "you@example.com"
$env:MAIL_PASSWORD = "your_app_password"
```
Bash / WSL:
```bash
export MAIL_USERNAME="you@example.com"
export MAIL_PASSWORD="your_app_password"
```

5. Run the app.
```bash
python <entry_point>.py
# or, if the project uses flask CLI:
# set FLASK_APP=<entry_point>.py
# flask run
```
Open http://127.0.0.1:5000 (or the printed address) in your browser.

## Security & best practices ⚠️
- Never commit real passwords or API keys to version control. Use environment variables or a `.env` file and add it to `.gitignore`.
- Prefer reading credentials in code via `os.environ.get('VAR_NAME')`.
- Use app-specific passwords (e.g., Gmail App Passwords) if using personal email SMTP.
- Turn off `debug=True` in production.

## Optional improvements 💡
- Add `requirements.txt`: `pip freeze > requirements.txt`.
- Use `python-dotenv` to load a local `.env` during development.
- Add `venv/` and `.env` to `.gitignore`.

---
