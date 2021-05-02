import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  //Get pokemons Pagination
  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  //get specific pokemon
  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  //search specific pokemon
  searchPokemon(pokemonName: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  }
}
