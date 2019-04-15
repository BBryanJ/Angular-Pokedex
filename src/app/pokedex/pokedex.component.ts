import { Component, OnInit, Input } from '@angular/core';

import pokemon from '../../assets/data/pokemon.json';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor() {
    this.pokemonList = pokemon.pokemon;
  }

  ngOnInit() {}
}
