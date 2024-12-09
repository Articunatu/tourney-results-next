import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from "@apollo/client";

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Enables SSR mode for server
    link: new HttpLink({
      uri: "https://api.smash.gg/graphql",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_START_GG_API_KEY}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};
