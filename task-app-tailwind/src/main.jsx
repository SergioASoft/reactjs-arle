import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import './index.css';

// Simulamos una función que carga datos
const tasksLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulamos una demora
  return [
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Hacer un proyecto', completed: true },
    { id: 3, text: 'Descansar', completed: false },
  ];
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
        loader: tasksLoader,
      },
      {
        path: '/add-task',
        element: <AddTask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);