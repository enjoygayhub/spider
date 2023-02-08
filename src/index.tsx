import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';


const root = document.getElementById('root');
if(root) {
  createRoot(root).render(<App />)
}

// import React, { lazy } from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// // import Contact from "./routes/contact";
// import ErrorPage from "./routes/errorPage";
// // import "./index.css";
// import Root from "./routes/root";
// const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./routes/contact"))

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );