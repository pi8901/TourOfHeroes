import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void 
  {
    this.getHeroes();
  }

  getHeroes(): void 
  {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void
  {
    if(hero == this.selectedHero)
    {
      this.selectedHero = undefined;
    }
    else
    {
      this.selectedHero = hero;
    }
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


}
