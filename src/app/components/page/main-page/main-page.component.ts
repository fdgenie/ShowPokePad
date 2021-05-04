import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  PaginationParams,
  PokemonPaginationModel,
  PokemonPaginationResultsModel,
} from '@app/models/PokemonModels';
import { PokemonService } from '@app/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  pokemons: PokemonPaginationResultsModel[] = [];
  pokemonsListPage: PokemonPaginationModel;
  paginationParams: PaginationParams = {
    limit: 10,
    offset: 0,
  };
  subscription: Subscription;

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons(this.paginationParams.limit, this.paginationParams.offset);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPokemons(limit: number, offset: number) {
    this.subscription = this.PokemonService.getPokemons(
      limit,
      offset
    ).subscribe(
      (response: PokemonPaginationModel) => {
        this.pokemonsListPage = response;
        this.pokemonsListPage.paginationParams = { limit, offset };
      },
      (err) => {
        throw err;
      }
    );
  }

  paginatePokemons(ev: PaginationParams) {
    this.getPokemons(ev.limit, ev.offset);
  }
}
