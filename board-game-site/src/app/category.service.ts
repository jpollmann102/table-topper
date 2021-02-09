import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private client_id:string = environment.clientID;
  public categories:any;
  categoriesChange:Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) {
    this.getCategories();
    this.categoriesChange.subscribe((value) => {
      this.categories = value;
    });
  }

  convertToObject(arr:any[]):any {
    return arr.reduce((obj, item) => (obj[item.id] = item.name, obj), {});
  }

  async getCategories() {
    const categories:any = await this.http.get(`https://api.boardgameatlas.com/api/game/categories?client_id=${this.client_id}`, { responseType: 'json' }).toPromise();
    const asObj:any = this.convertToObject(categories.categories);
    this.categoriesChange.next(asObj);
  }
}
