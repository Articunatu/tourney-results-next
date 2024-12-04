import { gql } from "@apollo/client";

export const GET_RESULTS_BY_TOURNAMENT_ID = gql`
  query GetResultsByTournamentId($tournamentSlug: String!, $videogameId: Int!) {
    tournament(slug: $tournamentSlug) {
      events(filter: { videogameId: $videogameId }) {
        id
        name
        startAt
        standings(query: { perPage: 24 }) {
          nodes {
            placement
            entrant {
              id
              name
            }
          }
        }
      }
    }
  }
`;