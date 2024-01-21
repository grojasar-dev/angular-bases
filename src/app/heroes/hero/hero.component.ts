import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  public getHeroDescription(): string {
    return `${ this. name } - ${ this.age }`; // interpolacion de string
  }
  changeHero(): string {
    this.name = 'spiderman';
    return this.name;
  }
  changeAge(): void {
    this.age = 35;
  }
  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
