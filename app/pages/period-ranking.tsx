// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_RANKINGS } from '../services/api/startgg/get-rankings';
// import {
//     Box,
//     Button,
//     Spinner,
//     Text,
// } from '@chakra-ui/react';
// import TrTable from '../components/custom/tr-table';
// import styles from '../styles/RankingPage.module.scss';

// const RankingPage = () => {
//     const [showPoints, setShowPoints] = useState(false);
//     const { data, loading, error } = useQuery(GET_RANKINGS, {
//         variables: { startDate: '2016-03-01', endDate: '2016-12-31' },
//     });

//     const toggleDisplay = () => setShowPoints((prev) => !prev);

//     if (loading) {
//         return (
//         <Box textAlign="center" mt="20">
//             <Spinner size="lg" />
//             <Text mt="4">Loading rankings...</Text>
//         </Box>
//         );
//     }

//     if (error) {
//         return (
//         <Box textAlign="center" mt="20">
//             <Text color="red.500">Error: {error.message}</Text>
//         </Box>
//         );
//     }

//     const { tournaments, players } = data.rankings;

//     // Transform tournaments into a format suitable for TrTable
//     const events = tournaments.map((tournament: any) => ({
//         id: tournament.id,
//         name: tournament.title,
//     }));

//     return (
//         <Box className={styles.container}>
//         <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign="center" mb="6">
//             Rankings
//         </Text>

//         {/* TrTable for Tournaments */}
//         <TrTable events={events} title="Tournaments" />

//         {/* Rankings Table */}
//         <Box mt="10">
//             <Text as="h3" fontSize="xl" mb="4">Player Rankings</Text>
//             <table className={styles.rankingTable}>
//             <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>Player</th>
//                 {tournaments.map((tournament: any) => (
//                     <th
//                     key={tournament.id}
//                     className={tournament.isPremier ? styles.major : styles.premier}
//                     >
//                     {tournament.title}
//                     </th>
//                 ))}
//                 <th>Ranking</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {players.map((player: any, index: number) => (
//                 <tr key={player.id}>
//                     <td>{index + 1}</td>
//                     <td>{player.tag}</td>
//                     {tournaments.map((_: any, i: number) => (
//                     <td key={i}>
//                         {showPoints
//                         ? player.points[i]
//                         : player.placings[i]?.value || '-'}
//                     </td>
//                     ))}
//                     <td>{player.totalPoints}</td>
//                 </tr>
//                 ))}
//             </tbody>
//             </table>
//         </Box>

//         <Button mt="6" colorScheme="blue" onClick={toggleDisplay}>
//             {showPoints ? 'Show Placings' : 'Show Points'}
//         </Button>
//         </Box>
//     );
// };

// export default RankingPage;
