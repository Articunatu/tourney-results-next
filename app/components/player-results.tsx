import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GET_RESULTS_BY_PLAYER_ID } from '../services/api/startgg/get-results-by-player-id';

export async function getResultsByPlayerId(
  client: ApolloClient<NormalizedCacheObject>, 
  playerId: string, 
  perPage: number = 10 
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
