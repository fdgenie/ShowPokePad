import { Component, OnInit } from '@angular/core';
import {
  PaginationParams,
  PokemonPaginationModel,
  PokemonPaginationResultsModel,
} from '@app/models/PokemonModels';
import { PokemonService } from '@app/services/pokemon.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  loading: Boolean = false;
  pokemons: PokemonPaginationResultsModel[] = [];
  pokemonsListPage: PokemonPaginationModel;
  paginationParams: PaginationParams = {
    limit: 10,
    offset: 0,
  };

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(this.paginationParams.limit, this.paginationParams.offset);
  }

  getPokemons(limit: number, offset: number) {
    this.loading = true;
    this.PokemonService.getPokemons(limit, offset).subscribe(
      (response: PokemonPaginationModel) => {
        this.pokemonsListPage = response;
        this.pokemonsListPage.paginationParams = { limit, offset };
        this.loading = false;
      }
    );
  }

  paginatePokemons(ev: PaginationParams) {
    this.getPokemons(ev.limit, ev.offset);
  }

  //TODO On destroy subscribe
}
