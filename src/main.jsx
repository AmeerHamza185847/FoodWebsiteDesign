import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Home } from './Components/Home/Home.jsx';
import { About } from './Components/About/About.jsx';
import { Contact } from './Components/Contact/Contact.jsx';
import { FoodComponentContainer } from './Components/Food/FoodComponentContainer.jsx';
import { Error } from './Components/PageNotFound/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "food",
        element: <FoodComponentContainer />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
