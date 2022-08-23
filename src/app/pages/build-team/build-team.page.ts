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
console.log('pompiste:'+this.pompiste);
this.addPompiste=!this.addPompiste;
this.showForm();
}



  showForm(){
    this.addPompiste=!this.addPompiste;
    
  }






}
