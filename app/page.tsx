"use client";

import { HStack } from "@chakra-ui/react"; 
import TournamentResults from "./pages/tournament-results";

const Home: React.FC = () => {
  return (
    <HStack align="center" justify="center" height="100vh">
      <TournamentResults slug="evo-2018"/> 
    </HStack>
  );
};

export default Home;
