import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  possibleColors = ['red', 'blue', 'yellow', 'black', 'orange', 'pink', 'green', 'brown', 'gray', 'purple', 'pink', 'aqua', 'indigo', 'white', 'tomato'];
  colors = [
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
    this.possibleColors[Math.floor(Math.random()*this.possibleColors.length)],
  ];
}
