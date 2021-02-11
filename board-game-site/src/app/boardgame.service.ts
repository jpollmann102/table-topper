import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService  {
  private client_id:string = environment.clientID;
  public responseCache = new Map();

  constructor(private http:HttpClient) {
    this.checkLocalStorage();
    window.onbeforeunload = () => this.cacheToStorage();
  }

  checkLocalStorage():void {
    const responses = localStorage.getItem('ttr-responses');
    if(responses) this.responseCache = new Map(JSON.parse(responses));
  }

  cacheToStorage():void {
    const serialized = JSON.stringify(Array.from(this.responseCache.entries()));
    localStorage.setItem('ttr-responses', serialized);
  }

  getResponse(url:string):Observable<any> {
    const fromCache = this.responseCache.get(url);
    if(fromCache) return of(fromCache);

    const response = this.http.get<any>(url, { responseType: 'json' });
    response.subscribe(res => this.responseCache.set(url, res));
    return response;
  }

  getCuratedList():Observable<any> {
    const ids = ['i5Oqu5VZgP','on5IaANEQh','oGVgRSAKwX','VCoAcOrQX6','AuBvbISHR6','eh0GTvESIX','9iBOPn3lES','j8LdPFmePE','XAI0dayGSY','guHWuXdRxQ','dgZDurgbuY'];
    const url = `https://api.boardgameatlas.com/api/search?ids=${ids.join()}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardgamesById(ids:string[]):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/search?ids=${ids.join()}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardGameReviews(id:string, n=8):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/reviews?game_id=${id}&include_game=false&include_summary=true&description_required=true&limit=${n}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardGameImages(id:string, n=30):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/game/images?game_id=${id}&include_game=false&limit=${n}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardGamePrices(id:string):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/game/prices?game_id=${id}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardGameVideos(id:string, n=5):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/game/videos?game_id=${id}&include_game=false&limit=${n}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getHotBoardgames(n=9):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/search?limit=${n}&order_by=reddit_week_count&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getRandomBoardgame():Observable<any> {
    const url = `https://api.boardgameatlas.com/api/search?&random=true&client_id=${this.client_id}`;

    return this.http.get<any>(url, { responseType: 'json' });;
  }

  getTopBoardgames(n=9):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/search?limit=${n}&order_by=popularity&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  fuzzySearchBoardGame(name:string):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/search?name=${name}&fuzzy_match=true&client_id=${this.client_id}`;

    return this.getResponse(url);
  }

  getBoardgameImage(id:string):Observable<any> {
    const url = `https://api.boardgameatlas.com/api/game/images?limit=5&include_game=false&game_id=${id}&client_id=${this.client_id}`;

    return this.getResponse(url);
  }
}
