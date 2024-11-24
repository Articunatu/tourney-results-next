"use client";

import { HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloNextAppProvider, ApolloClient } from '@apollo/experimental-nextjs-app-support';

function makeClient() {
    const httpLink = new HttpLink({
        uri: "https://example.com/graphql"
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink
    })
}

export function ApolloClientProvider({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
        {children}
        </ApolloNextAppProvider>
    );
}