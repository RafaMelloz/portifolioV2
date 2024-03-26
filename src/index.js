import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/styles/global.css";

import { Home } from './page/Home';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Analytics } from "@vercel/analytics/react"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Home/>
    <Footer />
    <Analytics />
  </React.StrictMode>
);


