import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import GestionBlog from './components/GestionBlog';

const element = <GestionBlog />;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {element}
  </>
);