import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {
  private client_id:string = environment.clientID;
  public responseCache = new Map();
  public mechanics:any;
  mechanicsChange:Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) {
    this.getMechanics();
    this.mechanicsChange.subscribe((value) => {
      this.mechanics = value;
    });
  }

  getResponse(url:string):Observable<any> {
    const fromCache = this.responseCache.get(url);
    if(fromCache) return of(fromCache);

    const response = this.http.get<any>(url, { responseType: 'json' });
    response.subscribe(res => this.responseCache.set(url, res));
    return response;
  }


  convertToObject(arr:any[]):any {
    return arr.reduce((obj, item) => (obj[item.id] = item.name, obj), {});
  }

  async getMechanics() {
    const url = `https://api.boardgameatlas.com/api/game/mechanics?client_id=${this.client_id}`;
    const mechanics:any = await this.getResponse(url).toPromise();
    const asObj:any = this.convertToObject(mechanics.mechanics);
    this.mechanicsChange.next(asObj);
  }

}
