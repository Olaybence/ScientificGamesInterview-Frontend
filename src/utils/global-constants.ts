export class Table {
    public table: boolean[][] = [];
    public marked: number[] = [];
    public columnNumber: number;

    constructor(row: number, column:number) {
        this.columnNumber = column;
        this.table = Array(row).fill(false).map((x,i) => {
            return Array(column).fill(false).map((x,i)=> false)
        });
    }

    set(row: number, column: number, value: boolean) {
        this.table[row][column] = value;
    }

    get(row: number, column: number) {
        return this.table[row][column];
    }

    getNumbers() : number[] {
        let arr: number[] = [];
        this.table.map( (row, rN) => {
            row.map( (isMarked, cN) => {
                if(isMarked) {
                    arr.push(rN*this.columnNumber + cN + 1);
                }
            })
        })
        return arr;
    }

    toString() : string {
        console.log(this.getNumbers(), this.getNumbers().length);
        if(!this.getNumbers() || this.getNumbers().length == 0) {
            return "empty"; 
        }
        
        let str : string = "";
        for(let i of this.getNumbers()) {
            str += i + " ";
        }

        return str.slice(0, -1);
    }
}

export class GlobalConstants {
    public static numberOfTables = 4;
    public static tableSize: number = 7;
    public static allChosenNumber: Table[] = Array(this.numberOfTables).fill([]).map((x,i) => {
        return new Table(this.tableSize,this.tableSize);
    });
    public static siteTitle: string = "This is example of ItSolutionStuff.com";

    static getChosenAsNumbers() : number[][] {
        let arr: number[][] = [];
        GlobalConstants.allChosenNumber.map( table => {
            arr.push(table.getNumbers());
        });
        return arr;
    }
}
