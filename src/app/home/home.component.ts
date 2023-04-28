import { Component, OnInit } from "@angular/core";

const EmptyNumberList: boolean[] = [false, false, false, false, false, false, false, false, false];

interface Marker {
  row: number;
  col: number;
  box: number;
  value?: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  row: boolean[][] = [];
  col: boolean[][] = [];
  box: boolean[][] = [];
  markers: Marker[] = [];
  
  setMarkerValue(marker: Marker, value: number) {
    marker.value = value;
    this.row[marker.row][value] = true;
    this.col[marker.col][value] = true;
    this.box[marker.box][value] = true;
  }

  ngOnInit(): void {

    for (let i = 0; i < 9; i++) {
      this.row.push(Array.from(EmptyNumberList));
      this.col.push(Array.from(EmptyNumberList));
      this.box.push(Array.from(EmptyNumberList));
      for (let j = 0; j < 9; j++) {
        const boxCol = Math.floor(i / 3);
        const boxRow = Math.floor(j / 3);
        console.log("boxRow", boxRow)
        console.log("boxCol", boxCol)
        const box = boxCol * 3 + boxRow;
        this.markers.push({
          row: i,
          col: j,
          box: box,
        });
      }
    }
    this.box[2][1] = true;
    this.box[2][2] = true;
    this.box[2][3] = true;
    this.box[1][2] = true;
    this.row[1][2] = true;
    this.col[2][2] = true;
    console.log(this.markers);
    console.log(this.box);
  }
}
