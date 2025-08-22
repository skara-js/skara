# 🏛️ Skara.js Framework

> **Ancient wisdom meets modern power**

A React-like JavaScript framework inspired by the 5000-year-old stone circles of Skara Brae. Built to last through the ages.

[![Deploy Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)

## 🚀 Quick Start

```bash
# Create a new Skara.js app
npx create-skara-app my-ancient-app
cd my-ancient-app

# Start development server
npm run dev

# Build for production
npm run build
```

## ✨ Features

### 🏛️ **Ancient Architecture**
- **React-like hooks** - `useState`, `useEffect`
- **Custom file extensions** - `.ssx`, `.ss`, `.sjs`
- **JSX-like syntax** - Familiar component structure
- **Virtual DOM** - Efficient rendering

### ⚡ **Modern Performance**
- **ESBuild** - Lightning-fast compilation (~50ms)
- **Hot reload** - Instant development feedback
- **Tree shaking** - Optimized production bundles
- **Code splitting** - Automatic optimization

### 🎨 **Beautiful Styling**
- **Glass morphism** - Built-in design system
- **Tailwind CSS** - Utility-first styling
- **Custom properties** - CSS variables support
- **Responsive design** - Mobile-first approach

### 🛠️ **Developer Experience**
- **TypeScript** - Full type support
- **Source maps** - Debug-friendly builds
- **Error boundaries** - Graceful error handling
- **Dev tools** - Browser extension support

## 📦 Monorepo Structure

```
skara-js/
├── packages/
│   ├── skara-js/           # Core framework
│   ├── skara-dev-server/   # Development server
│   ├── skara-build/        # Build system
│   └── create-skara-app/   # Project generator
├── website/                # Official website
├── examples/               # Example applications
└── docs/                   # Documentation
```

## 🏗️ Core Packages

### 🏛️ **skara-js** - Core Framework
```javascript
import { h, useState, useEffect } from 'skara-js';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```

### ⚡ **skara-dev-server** - Development Server
- Hot reload with file watching
- Custom file extension support
- Built-in error overlay
- Live CSS injection

### 🏗️ **skara-build** - Production Build System
- ESBuild integration
- CSS optimization
- Asset bundling
- Service worker generation

### 🚀 **create-skara-app** - Project Generator
```bash
npx create-skara-app my-app
# Creates a new Skara.js project with:
# - Component structure
# - Development server
# - Build configuration
# - Example components
```

## 🎨 File Extensions

### `.ssx` - Components
```javascript
// Button.ssx
import { h } from 'skara-js';

export function Button({ children, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### `.ss` - Styles
```css
/* styles.ss */
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-all;
  
  &.btn-primary {
    background: linear-gradient(135deg, #38bdf8, #3b82f6);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
    }
  }
}
```

### `.sjs` - JavaScript
```javascript
// utils.sjs
export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
```

## 🏛️ Philosophy

Inspired by **Skara Brae**, the remarkably preserved 5000-year-old Neolithic village:

### 🗿 **Built to Last**
Like the ancient stone structures, Skara.js is designed for longevity with:
- Stable API design
- Backward compatibility
- Minimal dependencies
- Timeless patterns

### 🌊 **Weathering the Storm**
Just as Skara Brae survived millennia of harsh weather:
- Robust error handling
- Graceful degradation
- Performance optimization
- Memory management

### 🏘️ **Community Living**
The village layout inspires our architecture:
- Modular components
- Shared utilities
- Connected systems
- Collaborative development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Global installation
npm install -g create-skara-app

# Create new project
create-skara-app my-ancient-app
cd my-ancient-app

# Start development
npm run dev
```

### Your First Component
```javascript
// src/App.ssx
import { h, useState } from 'skara-js';

export function App() {
  const [message, setMessage] = useState('Hello Skara!');
  
  return (
    <div className="app">
      <h1 className="ancient-title">{message}</h1>
      <button 
        className="neon-button"
        onClick={() => setMessage('Ancient Power Activated!')}
      >
        🏛️ Transform
      </button>
    </div>
  );
}
```

## 📚 Documentation

- **[Getting Started](./docs/getting-started.md)** - Installation and setup
- **[Components](./docs/components.md)** - Creating .ssx components
- **[Hooks](./docs/hooks.md)** - useState, useEffect, custom hooks
- **[Styling](./docs/styling.md)** - .ss files and Tailwind integration
- **[Build System](./docs/build.md)** - Production optimization
- **[Deployment](./DEPLOYMENT.md)** - Netlify, Vercel, and more

## 🌟 Examples

### Counter App
```javascript
import { h, useState } from 'skara-js';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter-demo glass-card">
      <h2 className="ancient-text">Count: {count}</h2>
      <div className="button-group">
        <button 
          className="neon-button"
          onClick={() => setCount(count - 1)}
        >
          ➖
        </button>
        <button 
          className="neon-button"
          onClick={() => setCount(count + 1)}
        >
          ➕
        </button>
        <button 
          className="neon-button red"
          onClick={() => setCount(0)}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}
```

### Todo List
```javascript
import { h, useState } from 'skara-js';

export function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        done: false 
      }]);
      setInput('');
    }
  };
  
  return (
    <div className="todo-app glass-card">
      <h2 className="ancient-text">Ancient Tasks</h2>
      <div className="todo-input-group">
        <input 
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
        />
        <button className="neon-button" onClick={addTodo}>
          ➕ Add
        </button>
      </div>
      
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <span className={todo.done ? 'done' : ''}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 🏛️ Live Demo

Visit our official website to see Skara.js in action:

**[🌐 skara-js.netlify.app](https://skara-js.netlify.app)**

Features:
- 🏛️ **Epic landing page** with floating animations
- 📚 **Interactive documentation** with live examples
- 🎮 **Code playground** with real-time preview
- ⚡ **Performance demos** showing framework capabilities

## 🤝 Contributing

We welcome contributions from the community! Like the ancient builders of Skara Brae, we believe in collaborative construction.

### Development Setup
```bash
# Clone the repository
git clone https://github.com/skara-js/skara.git
cd skara

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build all packages
npm run build
```

### Contributing Guidelines
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Add** tests if needed
5. **Submit** a pull request

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🏛️ Acknowledgments

- **Skara Brae** - The ancient Neolithic village that inspired this framework
- **React** - For pioneering modern component architecture
- **Vue.js** - For elegant reactivity patterns
- **Svelte** - For compile-time optimization inspiration

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=skara-js/skara&type=Date)](https://star-history.com/#skara-js/skara&Date)

---

<div align="center">

**🏛️ Like Skara Brae - Built to Last Through the Ages 🏛️**

*Ancient wisdom meets modern power*

[Website](https://skara-js.netlify.app) • [Documentation](./docs) • [Examples](./examples) • [Community](https://github.com/skara-js/skara/discussions)

</div>