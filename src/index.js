import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
// BrowserRouter 是 react-router-dom 的更高级别的接口，用于浏览器环境。它封装了 Router 并为你创建了一个默认的 history 对象。
// 这意味着在大多数浏览器应用中，你可以更简单地使用 BrowserRouter，而无需担心 history 对象的创建和管理。
// BrowserRouter 使用 HTML5 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
);

