import { Component, Input, OnInit } from '@angular/core';
import { RandomService } from 'src/services/random.service';

@Component({
  selector: 'game-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() id: number = -1;
  
  // Question: Can it be rectangle or only cube shaped table
  // Could it have not full row?
  @Input() tableSize: number = 7;
  columnId: number[] = [];
  rowId: number[] = [];
  marked: boolean[][] = [];
  selected: number = 0;
  maxSelect: number = 6;

  constructor(
    private rndService: RandomService
  ) { }

  ngOnInit(): void {
    this.columnId = Array(this.tableSize).fill(0).map((x,i)=>i);
    this.rowId = Array(this.tableSize).fill(0).map((x,i)=>i);

    this.marked = Array(this.tableSize).fill(false).map((x,i) => {
      return Array(this.tableSize).fill(false).map((x,i)=> false)
    });
    console.log("marked");
    console.log(this.marked);
  }
  
  cellClicked(x: number, y: number) {
    console.log("Cell clicked",x,y);
    if(this.marked[x][y]) {
      this.marked[x][y] = false;
      this.selected--;
      console.log(x,y," was unselected");
      
    } else if(this.selected < this.maxSelect) {
      this.marked[x][y] = true;
      this.selected++;
      console.log(x,y," was selected");

    } else {
      console.log("Reached the maximum number")
    }
  }

  delete() {
    console.log("Delete");
    this.marked = Array(this.tableSize).fill(false).map((x,i) => {
      return Array(this.tableSize).fill(false).map((x,i)=> false)
    });
  }

  shuffle() {
    console.log("Shuffle");
    this.rndService.getRandoms(this.maxSelect).subscribe(
      response => {
        console.log("getRandoms response:",response);
        response.map( number => {
          // let row = number / this.tableSize;
          // let column = number % this.tableSize;
        })
        // this.marked[x][y] = true;
        // this.selected++;
      },
      error => console.log("Something happened with the server. response: ", error)
    );
  }
}
