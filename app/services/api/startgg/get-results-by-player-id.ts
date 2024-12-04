import { gql } from '@apollo/client';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const GET_RESULTS_BY_PLAYER_ID = gql`
  query GetResultsByPlayerId($playerId: ID!, $perPage: Int = 10) {
    player(id: $playerId) {
      id
      gamerTag
      standings(query: { perPage: $perPage }) {
        nodes {
          placement
          event {
            id
            name
            tournament {
              id
              name
              slug
              startAt
            }
          }
        }
      }
    }
  }
`;

export async function getResultsByPlayerId(
  client: ApolloClient<NormalizedCacheObject>, // Apollo Client instance
  playerId: string, // Player ID
  perPage: number = 10 // Optional: Number of results per page
): Promise<
  {
    placement: number;
    eventName: string;
    tournamentName: string;
    tournamentSlug: string;
  }[]
> {
  try {
    const { data } = await client.query({
      query: GET_RESULTS_BY_PLAYER_ID,
      variables: { playerId, perPage },
    });

    const player = data?.player;

    if (!player) {
      console.warn('Player not found for the provided ID.');
      return [];
    }

    // Map results to a clean format
    return player.standings.nodes.map((node: any) => ({
      placement: node.placement,
      eventName: node.event.name,
      tournamentName: node.event.tournament.name,
      tournamentSlug: node.event.tournament.slug,
    }));
  } catch (error) {
    console.error('Error fetching results by player ID:', error);
    throw new Error('Failed to fetch results.');
  }
}
