# 🌐 Portfolio Website

A modern, responsive personal portfolio website built using Next.js and TypeScript. This project showcases professional information, skills, and projects in a clean and interactive web interface.

Live Site: https://rishadroshan.vercel.app

## 📌 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#️-usage)
- [Project Structure](#-project-structure)
- [Configuration](#️-configuration)
- [Build & Deployment](#-build--deployment)
- [Dependencies](#-dependencies)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

## 📖 Introduction

This repository contains the source code for a personal portfolio website. It is designed to present professional details, projects, and contact information in a visually appealing and responsive format.

The application is built with modern frontend technologies and deployed using Vercel.

## ✨ Features

- ⚡ Built with Next.js for performance and SEO optimization
- 🎨 Fully responsive design
- 🧩 Modular component-based architecture
- 📁 Project showcase section
- 📞 Contact information integration
- 🚀 Production-ready build configuration
- 🔍 ESLint configuration for clean and consistent code

## 🛠 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** CSS
- **Linting:** ESLint
- **Deployment:** Vercel
- **Package Manager:** npm

## 💻 Installation

Follow these steps to run the project locally:

**1️⃣ Clone the repository**
```bash
git clone https://github.com/rishadroshanpt/Portfolio.git
```

**2️⃣ Navigate to the project directory**
```bash
cd Portfolio
```

**3️⃣ Install dependencies**
```bash
npm install
```

## ▶️ Usage

Start the development server:
```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

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

If environment variables are required in the future, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_VARIABLE_NAME=value
```

Restart the development server after adding environment variables.

## 🏗 Build & Deployment

**Create a production build:**
```bash
npm run build
```

**Start production server locally:**
```bash
npm run start
```

### Deployment

This project is optimized for deployment on Vercel:

1. Push code to GitHub
2. Import the repository into Vercel
3. Deploy with default Next.js settings

## 📦 Dependencies

Core dependencies are managed via `package.json`. Install them using:

```bash
npm install
```

To update dependencies:

```bash
npm update
```

## 🛠 Troubleshooting

### ❓ Node version issues

Ensure you are using a compatible Node.js version (recommended: latest LTS).

Check version:
```bash
node -v
```

### ❓ Dependency issues

Try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### ❓ Port already in use

Change port:
```bash
npm run dev -- -p 3001
```

## 👥 Contributors

**Rishad Roshan** – Developer & Maintainer  
GitHub: [@rishadroshanpt](https://github.com/rishadroshanpt)

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

⭐ If you found this project helpful, consider giving it a star!
