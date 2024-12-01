import { gql } from "@apollo/client";

export const GET_TOURNAMENT = gql`
  query GetTournament($slug: String!) {
    tournament(slug: $slug) {
      name
      slug
      events {
        id
        name
      }
    }
  }
`;

export const GET_RESULTS_BY_TOURNAMENT_ID = gql`
  query Evo2018TopPlayers {
    tournament(slug: "evo-2018") {
      events(filter: { videogameId: 1 }) { # Melee's game ID
        id
        name
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
`