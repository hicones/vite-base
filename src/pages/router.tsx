import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./error";
import { HomePage } from "./home";

import { AppLayout } from "@/layouts";

const router = createBrowserRouter(
  [
    {
      children: [
        {
          element: <HomePage />,
          index: true,
          path: "/",
        },
      ],
      element: <AppLayout />,
      errorElement:
        process.env.NODE_ENV === "development" ? undefined : <ErrorPage />,
      path: "/",
    },
    {
      element: <ErrorPage />,
      path: "*",
    },
  ],
  {
    basename: process.env.NODE_ENV === "development" ? undefined : "/",
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
