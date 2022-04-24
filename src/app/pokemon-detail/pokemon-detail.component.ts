import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonChild: any = undefined; // false

  constructor() { }

  ngOnInit(): void {
  }

  getColor(typeName: string): string {
    let type: string = '';
    switch(typeName) {
      case 'water':
        type = 'blue'
        break;
      case 'fire':
        type = 'red'
        break;
      case 'grass':
        type = 'green'
        break;
      case 'poison':
        type = 'purple'
        break;
      case 'flying':
        type = '#A890F0'
        break;
      case 'normal':
        type = '#A8A878'
        break;
      case 'bug':
        type = '#A8B820'
        break;
      default:
        type = '';
    }
    return type;
  }

}
