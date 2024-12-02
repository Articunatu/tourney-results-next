"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

// Function to create the Apollo Client
function makeClient(): ApolloClient<any> {
  const httpLink = new HttpLink({
    uri: "https://example.com/api/graphql", // Absolute URL for SSR
    fetchOptions: { cache: "no-store" }, // Disable caching
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

// Component to wrap your app in Apollo
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
