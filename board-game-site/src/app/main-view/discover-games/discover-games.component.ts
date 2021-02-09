import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-discover-games',
  templateUrl: './discover-games.component.html',
  styleUrls: ['./discover-games.component.scss']
})
export class DiscoverGamesComponent implements OnInit {
  public discoverGames:any = {};

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
    this.getDiscoverGames();
  }

  async getDiscoverGames() {
    let randomGames = [];
    for(let i = 0; i < 9; i++)
    {
      const thisRandomGame = await this.bgService.getRandomBoardgame().toPromise();
      randomGames.push(thisRandomGame);
    }
    this.discoverGames.games = [];
    randomGames.forEach(x => {
      this.discoverGames.games.push(x.games[0]);
    });
  }

}
