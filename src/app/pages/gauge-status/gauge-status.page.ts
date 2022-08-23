import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-status',
  templateUrl: './gauge-status.page.html',
  styleUrls: ['./gauge-status.page.scss'],
})
export class GaugeStatusPage implements OnInit {

  addButton: boolean;
  myIcon: string='checkmark-circle-outline';
  myIcon1:string='close-circle-outline';
  status: string='true';

  constructor() { 



  }

  ngOnInit() {


  }



showButton(){
  this.addButton=!this.addButton;

}

}
