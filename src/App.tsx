import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import 'styles/global.scss';

import RoutesConfig from 'RoutesConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // cacheTime: 24 * 3600 * 1000 // 24 hours
      cacheTime: 0,
      staleTime: 0
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
