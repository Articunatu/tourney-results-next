import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import PlayerResults from '../components/PlayerResults'; // Adjust the path to your component
import { GET_RESULTS_BY_PLAYER_ID } from '../services/api/startgg/get-results-by-player-id';

describe('PlayerResults Component', () => {
  const playerId = '12345';
  const perPage = 10;

  const mocks = [
    {
      request: {
        query: GET_RESULTS_BY_PLAYER_ID,
        variables: { playerId, perPage },
      },
      result: {
        data: {
          player: {
            standings: {
              nodes: [
                {
                  placement: 1,
                  event: {
                    name: 'Melee Singles',
                    tournament: {
                      name: 'EVO 2020',
                      slug: 'evo-2020',
                    },
                  },
                },
                {
                  placement: 2,
                  event: {
                    name: 'Ultimate Singles',
                    tournament: {
                      name: 'SmashCon 2020',
                      slug: 'smashcon-2020',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  ];

  const errorMocks = [
    {
      request: {
        query: GET_RESULTS_BY_PLAYER_ID,
        variables: { playerId, perPage },
      },
      error: new Error('Network error'),
    },
  ];

  it('renders loading state initially', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PlayerResults playerId={playerId} perPage={perPage} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders player results after successful query', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PlayerResults playerId={playerId} perPage={perPage} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Player Results/i)).toBeInTheDocument();
      expect(screen.getByText(/Melee Singles/i)).toBeInTheDocument();
      expect(screen.getByText(/EVO 2020/i)).toBeInTheDocument();
      expect(screen.getByText(/Placement: 1/i)).toBeInTheDocument();
    });
  });

  it('renders error message when query fails', async () => {
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <PlayerResults playerId={playerId} perPage={perPage} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('renders no results message when no data is returned', async () => {
    const emptyMocks = [
      {
        request: {
          query: GET_RESULTS_BY_PLAYER_ID,
          variables: { playerId, perPage },
        },
        result: {
          data: {
            player: {
              standings: {
                nodes: [],
              },
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={emptyMocks} addTypename={false}>
        <PlayerResults playerId={playerId} perPage={perPage} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    });
  });
});
