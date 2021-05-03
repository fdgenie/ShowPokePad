import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  PaginationParams,
  PokemonPaginationModel,
  PokemonPaginationResultsModel,
} from '@app/models/PokemonModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit, OnChanges {
  @Input() pokemonsListPage: PokemonPaginationModel;
  @Output() paginatePokemonsEmit: EventEmitter<any> = new EventEmitter();

  paginationParams: PaginationParams = {
    limit: 10,
    offset: 0,
  };
  pokemons: PokemonPaginationResultsModel[] = [];
  searchedPokemons: PokemonPaginationResultsModel[];
  searchValue: string = '';
  url: string = '';

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.url = this.router.url;
  }

  //Fetch new data when table change
  ngOnChanges() {
    this.searchedPokemons = this.pokemonsListPage.results;
    this.pokemons = this.pokemonsListPage.results;
  }

  //Pagination event
  pageEvent(ev: any) {
    this.paginationParams.limit = ev.pageSize;
    this.paginationParams.offset = ev.pageIndex * ev.pageSize;
    this.clearSearch();
    this.paginatePokemonsEmit.emit({
      limit: this.paginationParams.limit,
      offset: this.paginationParams.offset,
    });
  }

  //Search Pokemon
  search() {
    if (this.searchValue !== '') {
      this.searchedPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.searchValue)
      );
    } else {
      this.searchedPokemons = this.pokemons;
    }
  }

  //Clear search input
  clearSearch() {
    this.searchValue = '';
    this.searchedPokemons = this.pokemons;
  }

  //Notify for action when saving pokemon
  showSavePokemonNotify(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
    });
  }
}
