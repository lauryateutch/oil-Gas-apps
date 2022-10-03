import { Component, OnInit } from '@angular/core';
import { PompisteService } from 'src/app/services/pompiste.service';

@Component({
  selector: 'app-build-team',
  templateUrl: './build-team.page.html',
  styleUrls: ['./build-team.page.scss'],
})
export class BuildTeamPage implements OnInit {

  addPompiste:boolean;
  pompiste: string[];
  list_pompiste=[];
  list_pompiste1=[];


  constructor(private httpService:PompisteService) { }

  ngOnInit() {

    this.httpService.getpompiste().subscribe((response:any)=>{
      console.log(response);
      this.list_pompiste=response;
    })
    
  }

add(){
  this.addPompiste=!this.addPompiste;
  this.list_pompiste1.push(this.pompiste);
  

}



  showForm(){
    this.addPompiste=!this.addPompiste;
    
  }






}
