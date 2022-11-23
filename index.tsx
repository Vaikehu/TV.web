import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from 'react-router-dom';

import App from './App';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Netflix from './pages/Netflix';
import Slider from './components/Silder';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/netflix', element: <Netflix /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
