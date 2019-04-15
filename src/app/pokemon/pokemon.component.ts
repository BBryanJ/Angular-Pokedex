import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemon = this.route.snapshot.params.name;
  }
}
