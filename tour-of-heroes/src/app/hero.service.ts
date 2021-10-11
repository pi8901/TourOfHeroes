import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  heroes: Hero[] = [];

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    const hero = this.heroes.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched heroes')
    return of(hero);
  }
}
