export interface PokemonPaginationModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonPaginationResultsModel[];
}

export interface PokemonPaginationResultsModel {
  name: string;
  url: string;
}

export interface PokemonModel {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  stats: PokemonStatsModel[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}

export interface PokemonStatsModel {
  base_stat: number;
  effor: number;
  stat: {
    name: string;
    url: string;
  };
}

