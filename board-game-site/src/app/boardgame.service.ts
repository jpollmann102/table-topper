import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {
  private client_id:string = environment.clientID;

  constructor(private http:HttpClient) { }

  getBoardgamesById(ids:string[]) {
    return this.http.get(`https://api.boardgameatlas.com/api/search?ids=${ids.join()}&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getBoardGameReviews(id:string, n=8) {
    return this.http.get(`https://api.boardgameatlas.com/api/reviews?game_id=${id}&include_game=false&include_summary=true&description_required=true&limit=${n}&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getBoardGameImages(id:string, n=30) {
    return this.http.get(`https://api.boardgameatlas.com/api/game/images?game_id=${id}&include_game=false&limit=${n}&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getBoardGamePrices(id:string) {
    return this.http.get(`https://api.boardgameatlas.com/api/game/prices?game_id=${id}&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getBoardGameVideos(id:string, n=5) {
    return this.http.get(`https://api.boardgameatlas.com/api/game/videos?game_id=${id}&include_game=false&limit=${n}&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getHotBoardgames(n=9) {
    return this.http.get(`https://api.boardgameatlas.com/api/search?limit=${n}&order_by=reddit_week_count&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getRandomBoardgame() {
    return this.http.get(`https://api.boardgameatlas.com/api/search?&random=true&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getTopBoardgames(n=9) {
    return this.http.get(`https://api.boardgameatlas.com/api/search?limit=${n}&order_by=popularity&client_id=${this.client_id}`, { responseType: 'json' });
  }

  fuzzySearchBoardGame(name:string) {
    return this.http.get(`https://api.boardgameatlas.com/api/search?name=${name}&fuzzy_match=true&client_id=${this.client_id}`, { responseType: 'json' });
  }

  getBoardgameImage(id:string) {
    return this.http.get(`https://api.boardgameatlas.com/api/game/images?limit=5&include_game=false&game_id=${id}&client_id=${this.client_id}`, { responseType: 'json' });
  }
}
