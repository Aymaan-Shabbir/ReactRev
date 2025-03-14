import { Suspense, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";

import Error from "./components/Error";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import Skeleton from "./components/Skeleton";
import Cart from "./components/Cart";
import Login from "./components/Login";

const Grocery = lazy(() => import("./components/Grocery"));
const Kids = lazy(() => import("./components/Kids"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/kids",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Kids />
          </Suspense>
        ),
      },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Skeleton />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/product/:productId", element: <ProductDetails /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
