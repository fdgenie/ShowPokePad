import { Component, OnInit } from '@angular/core';
import { PokemonPaginationResultsModel } from '@app/models/PokemonModels';
import { wishlistPokemon } from '@app/db.json';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss'],
})
export class WishlistPageComponent implements OnInit {
  pokemons: PokemonPaginationResultsModel[] = [];
  pokemonsWishListListPage: any;

  constructor() {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonsWishListListPage = wishlistPokemon;
  }
}
