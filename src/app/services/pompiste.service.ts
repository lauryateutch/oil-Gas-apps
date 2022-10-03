import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PompisteService {

  private list_url='../Data/pompiste.json'

  constructor(private http: HttpClient) {}

  getpompiste() : Observable <any>{
return this.http.get(this.list_url);
  }


}
