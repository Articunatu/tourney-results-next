import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // This must be an absolute URL for SSR
      uri: "http://example.com/api/graphql",
      // Uncomment to disable result caching (not compatible with `force-static` rendering)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
