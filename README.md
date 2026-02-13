# 🌐 Portfolio Website

A modern, responsive personal portfolio website built using Next.js and TypeScript. This project showcases professional information, skills, and projects in a clean and interactive web interface.

Live Site: https://rishadroshan.vercel.app

## 📌 Table of Contents

Introduction

Features

Tech Stack

Installation

Usage

Project Structure

Configuration

Build & Deployment

Dependencies

Troubleshooting

Contributors

License

## 📖 Introduction

This repository contains the source code for a personal portfolio website. It is designed to present professional details, projects, and contact information in a visually appealing and responsive format.

The application is built with modern frontend technologies and deployed using Vercel.

✨ Features

⚡ Built with Next.js for performance and SEO optimization

🎨 Fully responsive design

🧩 Modular component-based architecture

📁 Project showcase section

📞 Contact information integration

🚀 Production-ready build configuration

🔍 ESLint configuration for clean and consistent code

## 🛠 Tech Stack

Framework: Next.js

Language: TypeScript

Styling: CSS

Linting: ESLint

Deployment: Vercel

Package Manager: npm

## 💻 Installation

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/rishadroshanpt/Portfolio.git

2️⃣ Navigate to the project directory
cd Portfolio

3️⃣ Install dependencies
npm install

▶️ Usage
Start the development server:
npm run dev


The application will be available at:

http://localhost:3000

## 🗂 Project Structure
```text
Portfolio/
│
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # Reusable components
│   ├── pages/ or app/   # Next.js routing structure
│   └── styles/          # Styling files
│
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
└── .eslintrc.*          # ESLint configuration
```
## ⚙️ Configuration

If environment variables are required in the future, create a .env.local file in the root directory:

NEXT_PUBLIC_VARIABLE_NAME=value


Restart the development server after adding environment variables.

## 🏗 Build & Deployment
Create a production build:
npm run build

Start production server locally:
npm run start

Deployment

This project is optimized for deployment on Vercel:

Push code to GitHub.

Import the repository into Vercel.

Deploy with default Next.js settings.

## 📦 Dependencies

Core dependencies are managed via package.json. Install them using:

npm install


To update dependencies:

npm update

## 🛠 Troubleshooting
❓ Node version issues

Ensure you are using a compatible Node.js version (recommended: latest LTS).

Check version:

node -v

❓ Dependency issues

Try removing node_modules and reinstalling:

rm -rf node_modules package-lock.json
npm install

❓ Port already in use

Change port:

npm run dev -- -p 3001

## 👥 Contributors

Rishad Roshan – Developer & Maintainer

## 📄 License

This project is licensed under the MIT License — see the LICENSE file for details.



⭐ If you found this project helpful, consider giving it a star!
