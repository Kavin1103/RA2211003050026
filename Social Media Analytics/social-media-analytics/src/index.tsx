import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // '!' asserts that container is not null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);