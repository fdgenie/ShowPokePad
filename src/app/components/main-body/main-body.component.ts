import { Component, OnInit } from '@angular/core';
import {
  PokemonPaginationModel,
  PokemonPaginationResultsModel,
} from '@app/models/PokemonModels';
import { PokemonService } from '@app/services/pokemon.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit {
  loading: Boolean = false;
  limit: number = 10;
  offset: number = 0;
  length: number = 0;
  pokemons: PokemonPaginationResultsModel[] = [];
  searchedPokemons: PokemonPaginationResultsModel[] = [];
  searchValue: string = '';

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  pageEvent(ev: any) {
    this.limit = ev.pageSize;
    this.offset = ev.pageIndex * ev.pageSize;
    this.clearSearch();
    this.getPokemons();
  }

  search() {
    if (this.searchValue !== '') {
      this.searchedPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.searchValue)
      );
    } else {
      this.searchedPokemons = this.pokemons;
    }
  }

  clearSearch() {
    this.searchValue = '';
    this.searchedPokemons = this.pokemons;
  }

  getPokemons() {
    this.loading = true;
    this.PokemonService.getPokemons(this.limit, this.offset).subscribe(
      (response: PokemonPaginationModel) => {
        this.pokemons = response.results;
        this.searchedPokemons = response.results;
        this.length = response.count;
        this.loading = false;
      }
    );
  }
}
