import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {
termino: string;
heroes: Heroe[];
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private  _router: Router) {

     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe', idx]);
  }

}
