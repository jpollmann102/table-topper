import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {
  private client_id:string = environment.clientID;
  public mechanics:any;
  mechanicsChange:Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) {
    this.getMechanics();
    this.mechanicsChange.subscribe((value) => {
      this.mechanics = value;
    });
  }

  convertToObject(arr:any[]):any {
    return arr.reduce((obj, item) => (obj[item.id] = item.name, obj), {});
  }

  async getMechanics() {
    const mechanics:any = await this.http.get(`https://api.boardgameatlas.com/api/game/mechanics?client_id=${this.client_id}`, { responseType: 'json' }).toPromise();
    const asObj:any = this.convertToObject(mechanics.mechanics);
    this.mechanicsChange.next(asObj);
  }

}
