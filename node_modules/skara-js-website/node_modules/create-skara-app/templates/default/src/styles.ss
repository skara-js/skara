/* Skara.js App Styles */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.app-header {
  margin-bottom: 3rem;
  color: white;
}

.app-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.app-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 12px 48px rgba(0,0,0,0.15);
  min-width: 300px;
}

.counter h2 {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.counter-display {
  margin-bottom: 2rem;
}

.count-value {
  font-size: 4rem;
  font-weight: bold;
  color: #667eea;
  display: inline-block;
  min-width: 100px;
}

.counter-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.counter-btn {
  background: #667eea;
  color: white;
  border: none;
  border-radius: 12px;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter-btn:hover {
  background: #5a67d8;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.counter-btn:active {
  transform: translateY(-1px);
}

.counter-btn.decrement {
  background: #e53e3e;
}

.counter-btn.decrement:hover {
  background: #c53030;
  box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4);
}

.app-footer {
  margin-top: 3rem;
  color: white;
  opacity: 0.8;
}

.app-footer p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .app {
    padding: 1rem;
  }
  
  .app-header h1 {
    font-size: 2rem;
  }
  
  .counter {
    padding: 2rem;
    min-width: 250px;
  }
  
  .count-value {
    font-size: 3rem;
  }
  
  .counter-btn {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}