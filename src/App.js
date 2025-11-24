import React from 'react';
import './App.css';

export default function App({ posts }) {
  return (
    <div className="App">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className='flex-row'>
              <div>{post.createdAt}</div>
              <div className='category-tag'>{post.categories}</div>
            </div>

            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


