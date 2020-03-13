import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: ['imagen { max-height: 150px; max-width: 150px; }']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  colorCasa = 'danger';
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { 
                this.activatedRoute.params.subscribe(params => {
                this.heroe = this._heroesService.getHeroe(params.id);
                if(this.heroe.casa === 'DC') {
                  this.colorCasa = 'primary';
                }
              });
  }
  ngOnInit(): void {
  }

}
