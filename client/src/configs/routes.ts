import React from "react";

interface RouteType {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  Layout?: React.LazyExoticComponent<
    ({ children }: { children: React.ReactNode }) => JSX.Element
  >;
  noRootLayout?: boolean;
}

const ROUTES: RouteType[] = [
  {
    path: "/",
    Component: React.lazy(() => import("@/app/pages/home/home-page")),
  },
  {
    path: "*",
    Component: React.lazy(() => import("@/app/pages/errors/404")),
  },
];

export default ROUTES;
