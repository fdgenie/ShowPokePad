import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from '@app/models/PokemonModels';
import { PokemonService } from '@app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsDialogComponent } from '@app/components/pokemon-details-dialog/pokemon-details-dialog.component';
import { upperCaseFirstLetter } from '@app/Utilities/Index';

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

  constructor(
    private PokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
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

  openDialog() {
    this.dialog.open(PokemonDetailsDialogComponent, {
      data: this.pokemon,
      disableClose: true,
    });
  }

  savePokemon(msg: string) {
    this.savePokemonNotifyEmit.emit(msg);
  }
}
