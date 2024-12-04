"use client";

import { useQuery } from "@apollo/client";
import { GET_RESULTS_BY_TOURNAMENT_ID } from "../services/api/startgg/get-results-by-tournament-id";
import { Table, Box, Spinner, Text } from "@chakra-ui/react";
import "./tournament.module.scss";

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
    <div className="tournament-container">
      <h1 className="tournament-title">{data.tournament.name}</h1>
      <Table.Root className="tournament-table">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.tournament.events.map((event: { id: number; name: string }) => (
            <Table.Row key={event.id}>
              <Table.Cell>{event.id}</Table.Cell>
              <Table.Cell>{event.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
