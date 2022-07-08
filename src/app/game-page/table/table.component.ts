import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RandomService } from 'src/services/random.service';
import { GlobalConstants, Table } from 'src/utils/global-constants';

@Component({
  selector: 'game-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() chosenOnes: Table = new Table(GlobalConstants.tableSize,GlobalConstants.tableSize);

  // Question: Can it be rectangle or only cube shaped table
  // Could it have not full row?
  @Input() id: number = -1;
  tableSize: number = GlobalConstants.tableSize;
  columnId: number[] = [];
  rowId: number[] = [];
  selected: number = 0;
  maxSelect: number = 6;

  constructor(
    private rndService: RandomService
  ) { }

  ngOnInit(): void {
    this.columnId = Array(this.tableSize).fill(0).map((x,i)=>i);
    this.rowId = Array(this.tableSize).fill(0).map((x,i)=>i);

    this.chosenOnes = new Table(this.tableSize,this.tableSize);
    console.log("chosenOnes");
    console.log(this.chosenOnes);
  }

  cellClicked(x: number, y: number) {
    console.log("Cell clicked",x,y);
    if(this.chosenOnes.get(x,y)) {
      this.chosenOnes.set(x,y,false);
      this.selected--;
      console.log(x,y," was unselected:",this.selected);

    } else if(this.selected < this.maxSelect) {
      this.chosenOnes.set(x,y,true);
      this.selected++;
      console.log(x,y," was selected:",this.selected);

    } else {
      console.log("Reached the maximum number:",this.selected)
    }
    
    GlobalConstants.allChosenNumber[this.id] = this.chosenOnes;
  }

  delete() {
    console.log("Delete");
    this.chosenOnes = new Table(GlobalConstants.tableSize,GlobalConstants.tableSize);
    GlobalConstants.allChosenNumber[this.id] = this.chosenOnes;
    this.selected = 0;
  }

  shuffle() {
    console.log("Shuffle");

    this.rndService.getRandoms(this.maxSelect).subscribe(
      response => {
        // console.log("getRandoms response:",response);
        let tableSize = this.tableSize;
        let chosenOnes = new Table(GlobalConstants.tableSize,GlobalConstants.tableSize);
        let selected = this.selected;
        response.map( function(number : Number) {
          // console.log(number);
          let row = Math.floor(Number(number) / tableSize);
          let column = Number(number) % tableSize;
          // console.log(row, column);
          chosenOnes.set(row,column,true);
          selected++;
        })
        this.selected = 6;
        this.chosenOnes = chosenOnes;
        GlobalConstants.allChosenNumber[this.id] = this.chosenOnes;
        
        // console.log(GlobalConstants.allChosenNumber[this.id].toString());
      },
      error => console.log("Something happened with the server. response: ", error)
    );
  }
}
