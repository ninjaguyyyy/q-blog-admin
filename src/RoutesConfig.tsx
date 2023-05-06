import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from 'constants/routes';
import RequireAuth from 'libs/hoc/RequireAuth';

export default function RoutesConfig() {
  return (
    <Routes>
      {routes.map(({ component: Component, path, auth }, i) => (
        <Route
          key={i}
          path={path}
          element={
            auth ? (
              <RequireAuth>
                <Component />
              </RequireAuth>
            ) : (
              <Component />
            )
          }
        />
      ))}
    </Routes>
  );
}
