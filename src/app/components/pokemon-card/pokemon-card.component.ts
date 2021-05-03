import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from '@app/models/PokemonModels';
import { PokemonService } from '@app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsDialogComponent } from '@app/components/pokemon-details-dialog/pokemon-details-dialog.component';
import { upperCaseFirstLetter } from '@app/Utilities/Index';
import { ownedPokemon, wishlistPokemon } from '@app/db.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonUrl: string = '';
  @Output() savePokemonNotifyEmit: EventEmitter<string> = new EventEmitter();

  pokemon: PokemonModel;
  image: string = '';
  name: string = '';
  url: string = '';

  constructor(
    private PokemonService: PokemonService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    this.PokemonService.getPokemon(this.pokemonUrl).subscribe(
      (response: PokemonModel) => {
        this.pokemon = response;
        this.image = this.pokemon.sprites.other[
          'official-artwork'
        ].front_default;
        this.name = upperCaseFirstLetter(this.pokemon.name);
      }
    );
  }

  //Open dialog with details about pokemon
  openDialog() {
    this.dialog.open(PokemonDetailsDialogComponent, {
      data: this.pokemon,
      disableClose: true,
    });
  }

  //Save pokemon and notify user
  savePokemon(msg: string, saveTo: string) {
    if (saveTo === 'wishlist') {
      this.saveToWishList();
    } else {
      this.saveToOwned();
    }

    this.savePokemonNotifyEmit.emit(msg);
  }

  //Save pokemon to Got em list
  saveToOwned() {
    if (ownedPokemon.results.some((p) => p.name === this.name)) return;
    ownedPokemon.results.push({
      name: this.name,
      url: this.pokemonUrl,
    });
    ownedPokemon.count = ownedPokemon.results.length;
  }

  //Save pokemon to wishlist
  saveToWishList() {
    if (wishlistPokemon.results.some((p) => p.name === this.name)) return;
    wishlistPokemon.results.push({
      name: this.name,
      url: this.pokemonUrl,
    });
    wishlistPokemon.count = wishlistPokemon.results.length;
  }

  //Remove pokemon from list
  removePokemon(msg: string, removeFrom: string) {
    if (removeFrom === 'wishlist') {
      this.removeFromWishList();
    } else {
      this.removeFromOwned();
    }

    this.savePokemonNotifyEmit.emit(msg);
  }

  removeFromWishList() {
    wishlistPokemon.results = wishlistPokemon.results.filter(
      (p) => p.name !== this.name
    );
    wishlistPokemon.count = wishlistPokemon.results.length;
  }

  removeFromOwned() {
    ownedPokemon.results = ownedPokemon.results.filter(
      (p) => p.name !== this.name
    );
    ownedPokemon.count = ownedPokemon.results.length;
  }
}
