import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private client_id:string = environment.clientID;
  public responseCache = new Map();
  public categories:any;
  categoriesChange:Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) {
    this.categoriesChange.subscribe((value) => {
      this.categories = value;
    });
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const categories = JSON.parse(localStorage.getItem('ttr-categories'));
    if(categories) this.createCategories(categories);
    else this.getCategories();
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

  createCategories(categories:any) {
    const asObj:any = this.convertToObject(categories.categories);
    this.categoriesChange.next(asObj);
  }

  async getCategories() {
    const url = `https://api.boardgameatlas.com/api/game/categories?client_id=${this.client_id}`;
    const categories:any = await this.getResponse(url).toPromise();
    localStorage.setItem('ttr-categories', JSON.stringify(categories));
    this.createCategories(categories);
  }
}
