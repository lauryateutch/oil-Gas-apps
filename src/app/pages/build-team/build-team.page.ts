import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-team',
  templateUrl: './build-team.page.html',
  styleUrls: ['./build-team.page.scss'],
})
export class BuildTeamPage implements OnInit {

  addPompiste:boolean;
  pompiste: string;

  constructor() { }

  ngOnInit() {
  }

add(){
this.addPompiste=!this.addPompiste;
// this.addPompiste=!this.addPompiste;
}



  showForm(){
    this.addPompiste=!this.addPompiste;
    
  }






}
