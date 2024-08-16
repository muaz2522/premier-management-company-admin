import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css';
import './assets/css/mediaQueries.css';
import {AuthProvider} from './contextApi';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
