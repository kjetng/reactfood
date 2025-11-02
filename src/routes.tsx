import { createBrowserRouter, type RouteObject } from "react-router-dom";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <div>Home</div>,
  },
];

export const router = createBrowserRouter(routeConfig);