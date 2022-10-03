import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JaugeService {

  private list_ressource_url = '../Data/Ressources.json'
  private list_equipe_url = '../Data/equipe.json'

  constructor(private http: HttpClient) { }


  getressource(): Observable<any> {
    return this.http.get(this.list_ressource_url);
  }

  getequipe(): Observable<any> {
    return this.http.get(this.list_equipe_url);
  }

}
