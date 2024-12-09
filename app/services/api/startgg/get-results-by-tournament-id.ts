import { gql } from "@apollo/client";

export const GET_RESULTS_BY_TOURNAMENT_ID = gql`
  query GetResultsByTournamentId($slug: String!, $perPage: Int = 24, $meleeGameId: [ID!] = [1]) {
  tournament(slug: $slug) {
    id
    name
    events(filter: { videogameId: $meleeGameId }) {
      id
      name
      standings(query: { perPage: $perPage }) {
        nodes {
          placement
          entrant {
            participants {
              player {
                id
                gamerTag
              }
            }
          }
        }
      }
    }
  }
}
`;