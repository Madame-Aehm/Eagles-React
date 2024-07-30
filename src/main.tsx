import React from "react";
import ReactDOM from "react-dom/client";
import Characters from "./pages/Characters.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import ErrorElement from "./components/ErrorElement.tsx";
import About from "./pages/About.tsx";
import AboutDev from "./components/AboutDev.tsx";
import AboutApp from "./components/AboutApp.tsx";
import Layout from "./components/Layout.tsx";
import Details from "./pages/Details.tsx";
import Error from "./pages/Error.tsx";
import { CharactersContextProvider } from "./context/CharactersContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Auth from "./pages/Auth.tsx";
// import { CharacterFetchResponse } from './@types/index.ts'
// import { CharacterFetchResponse, NotOk } from './@types/index.ts'

const router = createBrowserRouter([
  {
    element: (
      <AuthContextProvider>
        <CharactersContextProvider>
          <Layout>
            <Outlet />
          </Layout>
        </CharactersContextProvider>
      </AuthContextProvider>
    ),
    children: [
      {
        // path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/characters",
        element: (
          <ProtectedRoute>
            <Characters />
          </ProtectedRoute>
        ),
        loader: async () => {
          return fetch("https://rickandmortyapi.com/api/character");
        },
        errorElement: <ErrorElement />,
      },
      {
        path: "/characters/:id",
        element: <Details />,
      },
      {
        path: "/login",
        element: <Auth />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "app",
            element: <AboutApp />,
          },
          {
            path: "developer",
            element: <AboutDev />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/about/developer",
  //   element: <AboutDev />
  // },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <div>hello</div> */}
    
        <RouterProvider router={router} />
     
  </React.StrictMode>
);
