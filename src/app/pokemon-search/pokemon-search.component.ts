import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonApiService } from '../shared/pokemon-api.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  @Output() pokemonFromSearch: EventEmitter<any> = new EventEmitter();

  numberOfFavoritedPokemon: number = 0;

  constructor(private api: PokemonApiService) { }

  ngOnInit(): void {
  }

  getPokemonFromApi(): void {
    this.api.getOnePokemonByNumber(this.numberOfFavoritedPokemon).subscribe(pokemonFromApi => {
      this.pokemonFromSearch.emit(pokemonFromApi);
    });
  }
}
