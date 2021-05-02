import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonModel } from '@app/models/PokemonModels';
import { upperCaseFirstLetter } from '@app/Utilities/Index';

@Component({
  selector: 'app-pokemon-details-dialog',
  templateUrl: './pokemon-details-dialog.component.html',
  styleUrls: ['./pokemon-details-dialog.component.scss'],
})
export class PokemonDetailsDialogComponent implements OnInit {
  image: string = '';
  name: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public pokemon: PokemonModel) {}

  ngOnInit(): void {
    this.image = this.pokemon.sprites.other['official-artwork'].front_default;
    this.name = upperCaseFirstLetter(this.pokemon.name);
  }

  upperCaseMoves(name: string) {
    return upperCaseFirstLetter(name);
  }
}
