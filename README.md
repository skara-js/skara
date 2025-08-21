# Skara.js

> A tiny front-end JavaScript framework named after **Skara Brae**, the "Neolithic Pompeii" of the Orkney Islands - an ancient settlement built in a rubbish heap and reburied in time.

Skara.js combines the best ideas from React, Vue, and Svelte into a lightweight, modern framework with custom file extensions and reactive state management.

## 🏛️ Philosophy

Just like Skara Brae - built in a rubbish heap and reburied in sand, only to emerge as the most perfectly preserved Neolithic settlement - Skara.js takes the discarded complexity of other frameworks, buries it under a clean API, and emerges as something timeless and beautiful.

## 🚀 Features

- **Tiny Runtime**: Minimal core with maximum functionality
- **Reactive State**: Simple `createState()` API with automatic subscriptions
- **Virtual DOM**: Efficient diffing and rendering
- **Custom Extensions**: `.ssx`, `.sjs`, and `.ss` files for organized development
- **Modern Tooling**: Works seamlessly with Vite and modern build tools

## 📁 File Extensions

### `.sjs` - Skara JavaScript Runtime Files
Framework runtime files written in standard JavaScript. These contain the core framework logic and are processed as regular JS files.

```javascript
// skara.js
export function h(tag, props, ...children) { /* ... */ }
export function createState(initial) { /* ... */ }
export function mount(componentFn, container) { /* ... */ }
```

### `.ssx` - Skara Script JSX Component Files
Component files that use JSX-like syntax with the `h()` function. These are compiled like `.tsx` files but use Skara's runtime instead of React.

```javascript
// Counter.ssx
import { h, createState } from './skara.js';

export function Counter(props) {
  const count = createState(0);
  
  return h('div', null,
    h('span', null, count.get()),
    h('button', { onClick: () => count.set(count.get() + 1) }, '+')
  );
}
```

### `.ss` - Skara Stylesheets
Stylesheet files that are processed exactly like CSS files. Use these for component and application styling.

```css
/* styles.ss */
.counter {
  background: white;
  padding: 1rem;
  border-radius: 8px;
}
```

## 🛠️ Core API

### `h(tag, props, ...children)`
Creates virtual DOM nodes (similar to `React.createElement`).

```javascript
// Create elements
h('div', { className: 'container' }, 'Hello World')

// Create components
h(MyComponent, { prop: 'value' })

// Nested elements
h('div', null,
  h('h1', null, 'Title'),
  h('p', null, 'Content')
)
```

### `createState(initialValue)`
Creates reactive state with get/set/subscribe methods.

```javascript
const count = createState(0);

// Get current value
console.log(count.get()); // 0

// Set new value (triggers re-render)
count.set(5);

// Subscribe to changes
const unsubscribe = count.subscribe(newValue => {
  console.log('Count changed to:', newValue);
});
```

### `mount(componentFn, container)`
Mounts a component tree into a DOM container with automatic diffing.

```javascript
import { mount } from './skara.js';
import { App } from './App.ssx';

const container = document.getElementById('root');
mount(() => App(), container);
```

## 🏗️ Project Structure

```
skara-js/
├── src/
│   ├── skara.js          # Core framework runtime (.js)
│   ├── App.ssx           # Main app component (.ssx)
│   ├── Counter.ssx       # Counter component (.ssx)
│   ├── index.sjs         # Entry point (.sjs)
│   └── styles.ss         # Application styles (.ss)
├── vite.config.js        # Vite configuration for custom extensions
├── package.json
└── index.html
```

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## 🔧 Vite Configuration

The framework includes a Vite configuration that handles the custom file extensions:

- `.ssx` files are processed as TypeScript JSX
- `.sjs` files are processed as JavaScript
- `.ss` files are processed as CSS

```javascript
// vite.config.js
export default defineConfig({
  plugins: [
    react({ include: /\.(jsx|tsx|ssx)$/ }),
    // Custom plugin for Skara extensions
  ],
  resolve: {
    extensions: ['.vue', '.html', '.js', '.jsx', '.ts', '.tsx', '.ssx', '.sjs', '.ss']
  }
});
```

## 📖 Example Application

The included example demonstrates:

- **Counter.ssx**: A reusable counter component with increment/decrement buttons
- **App.ssx**: Main application component that renders multiple counters
- **index.sjs**: Entry point that mounts the app
- **styles.ss**: Beautiful styling inspired by ancient stone architecture

## 🏛️ Why "Skara"?

Skara Brae is a 5,000-year-old Neolithic settlement in Scotland's Orkney Islands, known as the "Neolithic Pompeii." This remarkable village was built in a midden (rubbish heap) around 3200 BCE and later reburied in sand during a great storm, which preserved it perfectly for millennia.

Like this ancient settlement that emerged from humble, discarded materials to become one of the world's most important archaeological sites, Skara.js takes the complexity and "waste" from modern frameworks, buries it under a clean, simple API, and emerges as something both powerful and enduring.

The parallel is perfect: just as Skara Brae was hidden and preserved until the right moment to be rediscovered, Skara.js strips away unnecessary complexity and reveals the essential, timeless patterns of reactive web development.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

MIT License - Build something ancient, make it modern.