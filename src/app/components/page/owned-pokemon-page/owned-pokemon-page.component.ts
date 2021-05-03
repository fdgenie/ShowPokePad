import { Component, OnInit } from '@angular/core';
import {
  PokemonPaginationResultsModel,
} from '@app/models/PokemonModels';
import { ownedPokemon } from '@app/db.json';

@Component({
  selector: 'app-owned-pokemon-page',
  templateUrl: './owned-pokemon-page.component.html',
  styleUrls: ['./owned-pokemon-page.component.scss'],
})
export class OwnedPokemonPageComponent implements OnInit {
  pokemons: PokemonPaginationResultsModel[] = [];
  pokemonsOwnedListPage: any;

  constructor() {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonsOwnedListPage = ownedPokemon;
  }
}
