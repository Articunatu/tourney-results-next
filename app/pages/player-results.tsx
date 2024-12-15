import React, { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { GET_RESULTS_BY_PLAYER_ID } from '../services/api/startgg/get-results-by-player-id';

interface PlayerResultsProps {
  playerId: string;
  perPage?: number;
}

interface StandingNode {
  placement: number;
  event: {
    name: string;
    tournament: {
      name: string;
      slug: string;
    };
  };
}

interface PlayerData {
  player: {
    standings: {
      nodes: StandingNode[];
    };
  };
}

interface Result {
  placement: number;
  eventName: string;
  tournamentName: string;
  tournamentSlug: string;
}

const PlayerResults: React.FC<PlayerResultsProps> = ({ playerId, perPage = 10 }: PlayerResultsProps) => {
  const client = useApolloClient();
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data } = await client.query<PlayerData>({
          query: GET_RESULTS_BY_PLAYER_ID,
          variables: { playerId, perPage },
        });

        const player = data?.player;

        if (!player) {
          setResults([]);
          return;
        }

        const formattedResults = player.standings.nodes.map((node) => ({
          placement: node.placement,
          eventName: node.event.name,
          tournamentName: node.event.tournament.name,
          tournamentSlug: node.event.tournament.slug,
        }));

        setResults(formattedResults);
      } catch (err) {
        setError('Failed to fetch results.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [client, playerId, perPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Player Results</h2>
      {results.length === 0 ? (
        <p>No results found for the player.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <strong>{result.eventName}</strong> - {result.tournamentName} ({result.tournamentSlug}) - Placement: {result.placement}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerResults;
