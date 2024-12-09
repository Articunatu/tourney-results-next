"use client";

import { HStack } from "@chakra-ui/react";
import TournamentResults from "./pages/tournament-results";
import ApolloWrapper from "./components/providers/apollo-provider";

const Home: React.FC = () => {
  return (
    <ApolloWrapper>
      <HStack align="center" justify="center" height="100vh">
        <TournamentResults slug="evo-2018" />
      </HStack>
    </ApolloWrapper>
  );
};

export default Home;
