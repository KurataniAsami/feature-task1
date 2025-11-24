import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Posts from './data/Posts';
import { posts } from './data/Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home posts={posts}/>
  </React.StrictMode>
);




