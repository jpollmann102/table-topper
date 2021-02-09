import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-hot-games',
  templateUrl: './hot-games.component.html',
  styleUrls: ['./hot-games.component.scss']
})
export class HotGamesComponent implements OnInit {
  public hotGames:any = {};

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
    this.getHotGames();
  }

  async getHotGames() {
    this.hotGames = await this.bgService.getHotBoardgames().toPromise();
  }

}
