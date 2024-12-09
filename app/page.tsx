"use client";

import TrButton from "../app/components/custom/tr-button"; 
import { HStack } from "@chakra-ui/react"; 
import React from "react";
import TournamentPage from "./pages/latest-tournament";

const Home: React.FC = () => {
  return (
    <HStack align="center" justify="center" height="100vh">
      <TrButton /> 
      <TournamentPage params={{
        slug: "evo-2018"
      }} />
    </HStack>
  );
};

export default Home;
