import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../shared/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[] = [];
  pokemon: any;
  numberOfPokemonsToDisplay: number = 24;

  constructor(private api: PokemonApiService) { }

  ngOnInit(): void {}

  getFromApi(): void {
    this.api.getMultiplePokemons(this.numberOfPokemonsToDisplay).subscribe(response => {
      this.pokemonList = response.results
     });
  }
  
  getOnePokemonFromApi(pokemonName: string): void {
    this.api.getOnePokemonByName(pokemonName).subscribe(pokemonFromApi => {
      this.pokemon = pokemonFromApi;
    });
  }

  catchPokemon(event: any): void {
    this.pokemon = event;
  }


}
