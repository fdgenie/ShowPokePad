export interface PokemonPaginationModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonPaginationResultsModel[];
  paginationParams: PaginationParams;
}

export interface PokemonPaginationResultsModel {
  name: string;
  url: string;
}

export interface PaginationParams {
  limit: number;
  offset: number;
}

export interface PokemonModel {
  id: number;
  name: string;
  base_experience: number;
  stats: PokemonStatsModel[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
}

export interface PokemonStatsModel {
  base_stat: number;
  effor: number;
  stat: {
    name: string;
    url: string;
  };
}
