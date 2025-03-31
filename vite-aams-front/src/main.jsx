import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css'
import App from './App.jsx'

// axios 기본 URL 설정
axios.defaults.baseURL = "http://localhost:8088";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);