import { mount } from 'skara-js';
import { App } from './App.ssx';
import './styles.ss';

const container = document.getElementById('root');
if (container) {
  mount(() => App(), container);
} else {
  console.error('Root element not found');
}