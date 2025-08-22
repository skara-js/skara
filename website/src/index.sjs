import { mount } from 'skara-js';
import { App } from './App.ssx';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Mount the App component to the app element
  const container = document.getElementById('app');
  if (container) {
    mount(() => App(), container);
  } else {
    console.error('App element not found');
  }
});