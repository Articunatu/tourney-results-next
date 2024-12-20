"use client";

import { Provider as ChakraProvider } from "../chakra_ui/provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TeamProvider } from "./hooks/team-context";
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
          <ChakraProvider>
            <TeamProvider>{children}</TeamProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
