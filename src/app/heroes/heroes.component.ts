this.heroesService.addHero(newHero)
  .subscribe(hero => this.heroes.push(hero));
  this.heroesService.deleteHero(hero.id).subscribe();
