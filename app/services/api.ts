// File: app/services/api/api.ts
import axios from "axios";

const API_BASE = "https://pokeapi.co/api/v2";

// Fetch list of Pokémon
export const getPokemons = async (limit: number, offset: number) => {
  const { data } = await axios.get(`${API_BASE}/pokemon?limit=${limit}&${offset}`);
  return data;
};

// Fetch details for a single Pokémon
export const getPokemonDetails = async (name: string) => {
  const { data } = await axios.get(`${API_BASE}/pokemon/${name}`);
  return data;
};
