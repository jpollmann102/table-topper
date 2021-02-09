import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {
  public topGames:any = {};

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
    this.getTopGames();
  }

  async getTopGames() {
    this.topGames = await this.bgService.getTopBoardgames().toPromise();
  }

}
