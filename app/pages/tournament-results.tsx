"use client";

import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import TrTable from "../components/custom/tr-table";
import { GET_RESULTS_BY_TOURNAMENT_ID } from "../services/api/startgg/get-results-by-tournament-id";
import { useQuery } from "@apollo/client";

export default function TournamentResults({ slug }: { slug: string }) {
    const { data, loading, error } = useQuery(GET_RESULTS_BY_TOURNAMENT_ID, {
        variables: { slug },
        context: {
          uri: '/api/proxy-smash-graphql', // Use the internal API route
        },
    });

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient)
        return (
        <Box textAlign="center" py={10}>
            <Spinner size="xl" />
            <Text mt={4}>Loading...</Text>
        </Box>
        );

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

    return <TrTable title={data.tournament.name} events={data.tournament.events} />;
}
