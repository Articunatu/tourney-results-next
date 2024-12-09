// import { gql } from '@apollo/client';
// import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
// import fs from 'fs/promises';

// const GET_TOURNAMENT_SLUG_BY_NAME = gql`
//   query GetTournamentSlugByName($tournamentName: String!) {
//     tournaments(query: { filter: { name: $tournamentName } }) {
//       nodes {
//         slug
//       }
//     }
//   }
// `;

// export async function getTournamentSlugsByNames(
//   client: ApolloClient<NormalizedCacheObject>, 
//   jsonFilePath: string 
// ): Promise<{ [name: string]: string[] }> {
//   try {
//     const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
//     const tournamentNames: string[] = JSON.parse(fileContent);

//     const result: { [name: string]: string[] } = {};

//     for (const name of tournamentNames) {
//       const { data } = await client.query({
//         query: GET_TOURNAMENT_SLUG_BY_NAME,
//         variables: { tournamentName: name },
//       });

//       const slugs = data?.tournaments?.nodes?.map((node: { slug: string }) => node.slug) || [];
//       result[name] = slugs;
//     }

//     return result;
//   } catch (error) {
//     console.error('Error fetching tournament slugs:', error);
//     throw new Error('Failed to fetch tournament slugs.');
//   }
// }
