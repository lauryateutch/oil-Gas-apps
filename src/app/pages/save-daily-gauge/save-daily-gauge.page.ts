import { Component, OnInit } from '@angular/core';
import { JaugeService } from 'src/app/services/jauge.service';

@Component({
  selector: 'app-save-daily-gauge',
  templateUrl: './save-daily-gauge.page.html',
  styleUrls: ['./save-daily-gauge.page.scss'],
})
export class SaveDailyGaugePage implements OnInit {

  list_ressources:[];
  list_equipe:[];

  constructor(private httpService: JaugeService) { }

  ngOnInit() {

    this.httpService.getressource().subscribe((response:any)=>{
      console.log(response);
      this.list_ressources=response;
    });

    this.httpService.getequipe().subscribe((response:any)=>{
      console.log(response);
      this.list_equipe=response;
    });




  }

}
