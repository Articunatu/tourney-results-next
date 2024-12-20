"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemons, getPokemonDetails} from "../app/services/api";
import { Box, Text, Spinner, Grid, GridItem, Button, Input } from "@chakra-ui/react";
import { useTeam } from "./hooks/team-context";
import TeamSection from "../app/components/team-section";
import { useState } from "react";


const Page = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(135, 251),
  });

  const { addToTeam } = useTeam();
  const [filter, setFilter] = useState("");

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <Text color="red.500">Error fetching data.</Text>;

  const filteredPokemons = data.results.filter((pokemon: { name: string }) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Pokémon List
      </Text>
      <Input
        placeholder="Filter Pokémon by name"
        mb={5}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={5}>
        {filteredPokemons.map((pokemon: { name: string }) => (
          <GridItem key={pokemon.name} p={3} borderWidth={1} borderRadius="md" boxShadow="sm">
            <Text>{pokemon.name}</Text>
            <Button
              mt={2}
              size="sm"
              colorScheme="blue"
              onClick={async () => {
                const details = await getPokemonDetails(pokemon.name);
                addToTeam({ name: pokemon.name, details });
              }}
            >
              Add to Team
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Box mt={10}>
        <TeamSection />
      </Box>
    </Box>
  );
};

export default Page;

