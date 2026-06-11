import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Performance monitoring
if (import.meta.env.DEV) {
  // Enable React DevTools Profiler in development
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__?.onCommitFiberRoot;
}

// Service Worker Registration
if ('serviceWorker' in navigator && !import.meta.env.DEV) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Remove React.StrictMode for better performance in production
const isStrictMode = import.meta.env.DEV;

ReactDOM.createRoot(document.getElementById('root')).render(
  isStrictMode ? (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
