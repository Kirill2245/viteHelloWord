# TechStart Innovators 🚀  
*Next-Gen Technology Solutions for a Smarter Future*

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0-orange)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.3-blue)

Modern startup website featuring smooth animations, anchor navigation, and responsive design.


## 📌 Table of Contents
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Scripts](#-development-scripts)
- [Anchor Navigation](#-anchor-navigation)
- [Build Process](#-build-process)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Key Features
- **Micro-interactions** on all UI elements
- **Smooth anchor navigation** between sections
- **Responsive design** for all devices
- **Path aliases** for clean imports (`@/components`)
- **Animation
- **Dark/light mode** theming system

## 💻 Tech Stack
| Category       | Technologies                          |
|----------------|---------------------------------------|
| Core           | Vite 4, React 18, TypeScript 5        |
| Styling        | CSS                                   |
| Navigation     | React Scroll                          |
| Animations     | CSS(@keyframes)                       |
| Linting        | ESLint + Prettier                     |

## 📁 Project Structure
```bash
src/
├── assets/           
├── components/       
│   ├── common/           
│       
├── types/           
├── App.tsx           
├── index.tsx         
└── index.css  
```
## 🛠 Getting Started
Prerequisites
Node.js 18+

npm 9+

Installation
Clone the repository:

bash
git clone https://github.com/Kirill2245/viteHelloWord.git
Install dependencies:

bash
npm install
Start development server:

bash
npm run dev
## 🧑‍💻 Development Scripts
Command	Description
npm run dev	Start development server
npm run build	Create production build
npm run preview	Preview production build locally
npm run lint	Run ESLint
npm run format	Format code with Prettier
## 🔗 Anchor Navigation
Implemented with React Scroll:

tsx
import { Link } from 'react-scroll';
```
<Link 
  to="section-id" 
  smooth={true}
  duration={500}
>
  Navigate to Section
</Link>
```
## 📦 Build Process
Create production build:

bash
npm run build
Preview build locally:

bash
npm run preview
## 📜 License
Distributed under the MIT License. See LICENSE for more information.
## 📸 Screenshots

### Главная страница
![Главная страница](/screenshots/main.png)  
*Лендинг с основными преимуществами продукта*

### Темная тема
![Темная тема](/screenshots/dark.png)  
*Вариант интерфейса в темном режиме*

> **Примечание:** Все скриншоты актуальны для версии 1.0.0

## 📬 Contact
Email: publickirill2245@gmail.com
GitHub: Kirill2245

