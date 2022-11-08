import { Component, OnInit, ViewChild } from '@angular/core';
import { MapgisComponent } from './mapgis/mapgis.component';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  showLat!: number;
  showLong!: number;

  @ViewChild('mapgisComponent') mapgisComponent!: MapgisComponent

  locationGoTo: any = {lat: 0, long: 0}
  constructor() { }

  ngOnInit(): void {
  }

  onClickLocate(data: any) {
    console.log("data from Parent Component", data);

    this.mapgisComponent.goto(data);
  }

}
