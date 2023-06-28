import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyCurrentTasks } from './components/mainPage/MyCurrentTasks/MyCurrentTasks';
import { MyResources } from './components/myResources/MyResources';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops, something went wrong!</div>
  },
  {
    path: "/resources",
    element: <MyResources />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
