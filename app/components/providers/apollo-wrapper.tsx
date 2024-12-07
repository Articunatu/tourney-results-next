"use client";

import { HttpLink, NormalizedCacheObject } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

// Function to create the Apollo Client
function makeClient(): ApolloClient<NormalizedCacheObject> {

  const httpLink = new HttpLink({
    uri: "https://api.smash.gg/graphql", // Absolute URL for SSR
    fetchOptions: { cache: "no-store" }, // Disable caching
    headers: {
      Authorization: `Bearer ${process.env.START_GG_API_KEY}`, 
    },
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
