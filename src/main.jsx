import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDzrHENvoItUwHOd4vKd1yG2x5gBgo-biw",
  authDomain: "pettinereactcoder.firebaseapp.com",
  projectId: "pettinereactcoder",
  storageBucket: "pettinereactcoder.appspot.com",
  messagingSenderId: "496722699483",
  appId: "1:496722699483:web:4444b945692c98f09858fe"
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
