import { AfterViewInit, Component, ElementRef, OnInit, ViewChild , Input} from '@angular/core';

import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView' 

@Component({
  selector: 'app-mapgis',
  templateUrl: './mapgis.component.html',
  styleUrls: ['./mapgis.component.css']
})
export class MapgisComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDiv!: ElementRef

      mapView!: MapView// mapView Variable form ArcGis

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const map = new Map({ //Create Map
      basemap: "streets-vector"
    });

    this.mapView = new MapView({ // Create MapView from mapView variable
      container: this.mapDiv.nativeElement,
      map: map,
      zoom: 15,
      center: [100, 13]
    });

  }

  goto(data: any){ // Function push center from Parent component
    console.log("type of goto data in mapgis component =", typeof(data)); //recieved data from Parent Component
    this.mapView.goTo({
      center: [Number(data.long), Number(data.lat)]
    }, {
      duration: 8000
    });
  }

}
