import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public searchText:string = '';
  public tickerGames:any = [];

  constructor(private bgService:BoardgameService,
              private router:Router) { }

  ngOnInit(): void {
    this.getHotBoardGames();
  }

  async getHotBoardGames() {
    this.tickerGames = await this.bgService.getHotBoardgames(8).toPromise();
    this.tickerGames = this.tickerGames.games;
  }

  goToGame(game:any):void {
    this.router.navigate(['/game', game.id], {state: { data: game }});
  }

  searchGame():void {
    this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
  }

}
