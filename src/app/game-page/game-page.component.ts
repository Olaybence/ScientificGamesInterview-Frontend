import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GlobalConstants, Table } from 'src/utils/global-constants';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  numberOfTables: number = 4;
  numbers: number[] = Array(this.numberOfTables).fill(0).map((x,i)=>i); // [1,2,...,numberOfTables]
  tableSize: number = GlobalConstants.tableSize;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  play() : void {
    let numbers = GlobalConstants.getChosenAsNumbers();
    console.log("play",numbers);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PlayPopUpDialog, {
      width: '250px',
      data: { tables: GlobalConstants.getChosenAsNumbers() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed | result:', result);
    });
  }
}



export interface DialogData {
  tables: Table[];
}

@Component({
  selector: 'play-pop-up',
  templateUrl: 'play-pop-up.html',
})
export class PlayPopUpDialog {
  tables: Table[];
  table: Table;

  constructor(
    public dialogRef: MatDialogRef<PlayPopUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.tables = this.data.tables;
    this.table = this.tables[0];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}