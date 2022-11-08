import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Output() locate = new EventEmitter<any>();

  longtitude!: number
  latitude!: number
  constructor() { }

  ngOnInit(): void {
    
  }

  onBtnLocateClick(){
    this.locate.emit({ lat: this.latitude, long: this.longtitude })
  }

}