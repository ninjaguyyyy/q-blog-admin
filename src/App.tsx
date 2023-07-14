import 'styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from 'components/pages/Layout';
import RoutesConfig from 'RoutesConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 24 * 3600 * 1000 // 24 hours
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <RoutesConfig />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
