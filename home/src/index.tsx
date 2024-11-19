import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import '@fontsource-variable/rubik';
import { BioPage } from './components/BioPage';
import { CodePage } from './components/codePage/CodePage';
import { TeacherPage } from './components/TeacherPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "bio",
        element: <BioPage />,
      },
      {
        path: "code",
        element: <CodePage />,
      },
      {
        path: "teacher",
        element: <TeacherPage />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
