// File: app/components/team/TeamSection.tsx
"use client";

import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useTeam } from "../hooks/team-context";

const TeamSection = () => {
  const { team, removeFromTeam } = useTeam();

  return (
    <Box borderWidth={1} borderRadius="md" p={5} boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Your Team
      </Text>
      {team.length === 0 ? (
        <Text>No Pokémon in your team yet.</Text>
      ) : (
        <Flex flexDirection="column" gap={2}>
          {team.map((pokemon) => (
            <Flex key={pokemon.name} justify="space-between" align="center">
              <Text>{pokemon.name}</Text>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => removeFromTeam(pokemon.name)}
              >
                Remove
              </Button>
            </Flex>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default TeamSection;
