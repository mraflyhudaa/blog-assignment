import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { inter, poppins } from '@/utils/fonts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default: true
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${poppins.variable} font-poppins  bg-white `}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
