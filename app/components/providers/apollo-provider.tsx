"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../../services/lib/client";

interface ApolloWrapperProps {
  children: React.ReactNode;
}

const client = createApolloClient();

const ApolloWrapper: React.FC<ApolloWrapperProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
