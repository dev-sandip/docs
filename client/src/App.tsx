import { Routes, Route } from "react-router-dom";
import ROUTES from "./configs/routes";
import { Suspense } from "react";
import LoadingPage from "./app/components/loaders/loading-page";
import RootLayout from "./app/layouts/root-layout";

const App = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, Layout, Component, noRootLayout }, index) => {
        const ComponentWithSuspense = () => (
          <Suspense fallback={<LoadingPage />}>
            <Component />
          </Suspense>
        );
        const Element = Layout ? (
          <Suspense fallback={<LoadingPage />}>
            <Layout>
              <ComponentWithSuspense />
            </Layout>
          </Suspense>
        ) : (
          <ComponentWithSuspense />
        );
        return (
          <Route
            key={index}
            path={path}
            element={
              noRootLayout ? (
                <ComponentWithSuspense />
              ) : (
                <RootLayout>{Element}</RootLayout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
