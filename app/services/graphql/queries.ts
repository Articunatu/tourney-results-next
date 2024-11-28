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