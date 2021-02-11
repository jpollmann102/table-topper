import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-game-related',
  templateUrl: './game-related.component.html',
  styleUrls: ['./game-related.component.scss']
})
export class GameRelatedComponent implements OnInit, OnChanges {
  @Input() game;
  public alikeGames:any = [];

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {}

  ngOnChanges(changes:SimpleChanges) {
    if(changes.game && changes.game.currentValue)
    {
      this.getAlikeBoardGames();
    }
  }

  async getAlikeBoardGames() {
    this.alikeGames = await this.bgService.fuzzySearchBoardGame(this.game.name).toPromise();
    this.alikeGames = this.alikeGames.games;
  }

}
