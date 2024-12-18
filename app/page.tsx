"use client";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../app/services/api";
import { Box, Text, Spinner, Grid, GridItem } from "@chakra-ui/react";

const Page = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(10),
  });

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <Text color="red.500">Error fetching data.</Text>;

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Pokémon List
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={5}>
        {data.results.map((pokemon: { name: string }, index: number) => (
          <GridItem key={index} p={3} borderWidth={1} borderRadius="md" boxShadow="sm">
            <Text>{pokemon.name}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Page;
