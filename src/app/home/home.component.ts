import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

const EmptyNumberList: boolean[] = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

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
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  constructor() {}

  selectedMarker: Marker | undefined = undefined;
  selectMarker(marker: Marker | undefined) {
    this.selectedMarker = marker;
  }

  row: boolean[][] = [];
  col: boolean[][] = [];
  box: boolean[][] = [];
  markers: Marker[] = [];

  setMarkerValue(value: number) {
    if (!this.selectedMarker) {
      return;
    }
    this.row[this.selectedMarker.row][value] = true;
    this.col[this.selectedMarker.col][value] = true;
    this.box[this.selectedMarker.box][value] = true;
    this.markers = this.markers.map((marker) => {
      if ( marker === this.selectedMarker ) {
        return {...marker, value: value+1};
      }
      return marker;
    });
    this.selectedMarker = undefined;
  }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.row.push(Array.from(EmptyNumberList));
      this.col.push(Array.from(EmptyNumberList));
      this.box.push(Array.from(EmptyNumberList));
      for (let j = 0; j < 9; j++) {
        const boxCol = Math.floor(i / 3);
        const boxRow = Math.floor(j / 3);
        const box = boxCol * 3 + boxRow;
        this.markers.push({
          row: i,
          col: j,
          box: box,
        });
      }
    }
  }
}
