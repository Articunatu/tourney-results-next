"use client";

import React from "react";
import { Table } from "@chakra-ui/react";

interface Event {
  id: number;
  name: string;
}

interface TrTableProps {
  events: Event[];
  title: string;
}

const TrTable: React.FC<TrTableProps> = ({ events, title }) => {
  return (
    <div className="tournament-container">
      <h1 className="tournament-title">{title}</h1>
      <Table.Root className="tournament-table">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {events.map((event) => (
            <Table.Row key={event.id}>
              <Table.Cell>{event.id}</Table.Cell>
              <Table.Cell>{event.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TrTable;
