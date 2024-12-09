import { gql } from '@apollo/client';

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