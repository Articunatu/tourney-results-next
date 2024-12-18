"use client";

import { Provider } from "../chakra_ui/provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
      <QueryClientProvider client={queryClient}>
        <Provider>
          {children}
        </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
