import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colors = [];

  makeColorsArray() {
    var possibleColors = ['red', 'blue', 'yellow', 'black', 'orange', 'pink', 'green', 'brown', 'gray', 'purple', 'pink', 'aqua', 'indigo', 'white', 'tomato'];
    for (let i = 0; i < 10; i++) {
      this.colors.push(possibleColors[Math.floor(Math.random()*possibleColors.length)]);
    }
  }

  ngOnInit() {
    this.makeColorsArray();
  }
}
