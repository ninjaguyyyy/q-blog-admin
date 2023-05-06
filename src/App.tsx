import 'styles/global.scss';
import { BrowserRouter } from 'react-router-dom';

import Layout from 'components/pages/Layout';
import RoutesConfig from 'RoutesConfig';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesConfig />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
