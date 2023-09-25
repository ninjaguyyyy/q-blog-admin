import { Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';
import RequireAuth from 'libs/hoc/RequireAuth';
import Layout from 'components/pages/Layout';

export default function RoutesConfig() {
  return (
    <Routes>
      {routes.map(({ component: Component, path, auth, withoutLayout }, i) => {
        const renderComponent = () =>
          withoutLayout ? (
            <Component />
          ) : (
            <Layout>
              <Component />
            </Layout>
          );

        return (
          <Route
            key={i}
            path={path}
            element={
              auth ? <RequireAuth>{renderComponent()}</RequireAuth> : <>{renderComponent()}</>
            }
          />
        );
      })}
    </Routes>
  );
}
