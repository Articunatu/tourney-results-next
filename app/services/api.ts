import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemons = async (limit = 10) => {
  const response = await apiClient.get(`/pokemon?limit=${limit}`);
  return response.data;
};
