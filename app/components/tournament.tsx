import { Box, Spinner, Text } from "@chakra-ui/react";
import TrTable from "./custom/tr-table";
import { GET_RESULTS_BY_TOURNAMENT_ID } from "../services/api/startgg/get-results-by-tournament-id";
import { useQuery } from "@apollo/client";

export default function Tournament({ slug }: { slug: string }) {
  const { data, loading, error } = useQuery(GET_RESULTS_BY_TOURNAMENT_ID, {
    variables: { slug },
  });

  if (loading)
    return (
      <Box textAlign="center" py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
    );

  if (error)
    return (
      <Box textAlign="center" py={10} color="red.500">
        <Text>Error: {error.message}</Text>
      </Box>
    );

  return (
    <TrTable
      title={data.tournament.name}
      events={data.tournament.events}
    />
  );
}
