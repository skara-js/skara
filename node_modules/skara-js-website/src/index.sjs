import { mount } from 'skara-js';
import { App } from './App.ssx';

// Mount the App component to the root element
const container = document.getElementById('root');
if (container) {
  mount(() => App(), container);
} else {
  console.error('Root element not found');
}