// import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// const LIQUIPEDIA_API = "https://liquipedia.net/smash/api.php";
// const CATEGORY_NAME = "Major_Tournaments_(SSBM)";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const response = await axios.get(LIQUIPEDIA_API, {
//       params: {
//         action: "query",
//         list: "categorymembers",
//         cmtitle: `Category:${CATEGORY_NAME}`,
//         cmlimit: 500,
//         format: "json",
//       },
//     });

//     const tournaments = response.data.query.categorymembers.map(
//       (member: { title: string }) => member.title
//     );

//     res.status(200).json({ success: true, tournaments });
//   } catch (error) {
//     console.error("Error fetching Liquipedia data:", error);
//     res.status(500).json({ success: false, error: "Failed to fetch tournaments." });
//   }
// }
