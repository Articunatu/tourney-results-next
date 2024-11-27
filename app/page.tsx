"use client";

import TrButton from "@/components/custom/tr-button"; 
import { HStack } from "@chakra-ui/react"; 
import React from "react";

const Home: React.FC = () => {
  return (
    <HStack align="center" justify="center" height="100vh">
      <TrButton /> 
    </HStack>
  );
};

export default Home;
