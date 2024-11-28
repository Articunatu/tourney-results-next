"use client";

import { useQuery } from "@apollo/client";
import { GET_TOURNAMENT } from "../services/graphql/queries";

export default function Tournament({ slug }: { slug: string }) {
  const { data, loading, error } = useQuery(GET_TOURNAMENT, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.tournament.name}</h1>
      <ul>
        {data.tournament.events.map((event: { id: number; name: string }) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}
