"use client";
import { createContext, useContext, useState } from "react";

interface Pokemon {
  name: string;
  details: any;
}

interface TeamContextProps {
  team: Pokemon[];
  addToTeam: (pokemon: Pokemon) => void;
  removeFromTeam: (name: string) => void;
  reorderTeam: (startIndex: number, endIndex: number) => void;
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

export const TeamProvider = ({ children }: { children: React.ReactNode }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addToTeam = (pokemon: Pokemon) => {
    if (team.length < 6 && !team.some((p) => p.name === pokemon.name)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (name: string) => {
    setTeam(team.filter((p) => p.name !== name));
  };

  const reorderTeam = (startIndex: number, endIndex: number) => {
    const updatedTeam = Array.from(team);
    const [removed] = updatedTeam.splice(startIndex, 1);
    updatedTeam.splice(endIndex, 0, removed);
    setTeam(updatedTeam);
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam, reorderTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return context;
};