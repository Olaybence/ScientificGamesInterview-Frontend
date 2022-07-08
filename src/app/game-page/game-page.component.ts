import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  numberOfTables: number = 4;
  numbers: number[] = Array(this.numberOfTables).fill(0).map((x,i)=>i);
  tableSize: number = 7;

  constructor() { }

  ngOnInit(): void { }
}
