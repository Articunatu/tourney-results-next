import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getPokemonDetails } from "../../app/services/api";
import { Box, Text, Spinner, VStack } from "@chakra-ui/react";

const PokemonDetails = () => {
  const router = useRouter();
  const { pokemonName } = router.query;

  // Fetch Pokémon details using react-query
  const { data, isLoading, isError } = useQuery(
    ["pokemonDetails", pokemonName],
    () => getPokemonDetails(pokemonName as string),
    {
      enabled: !!pokemonName, // Make sure query runs only when pokemonName is available
    }
  );

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <Text color="red.500">Error fetching Pokémon details.</Text>;

  // Extract stats, abilities, and moves from the fetched data
  const { stats, abilities, moves } = data;

  return (
    <Box p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)} - Details
      </Text>

      <VStack spacing={4} align="start">
        <Text fontSize="lg" fontWeight="bold">Stats:</Text>
        {stats.map((stat: any) => (
          <Text key={stat.stat.name}>
            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
          </Text>
        ))}

        <Text fontSize="lg" fontWeight="bold" mt={5}>Abilities:</Text>
        {abilities.map((ability: any) => (
          <Text key={ability.ability.name}>
            {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
          </Text>
        ))}

        <Text fontSize="lg" fontWeight="bold" mt={5}>Learnable Moves:</Text>
        {moves.slice(0, 10).map((move: any) => ( // Displaying only first 10 moves for brevity
          <Text key={move.move.name}>
            {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default PokemonDetailsPage;
