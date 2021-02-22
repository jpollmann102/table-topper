import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  public game:any;
  public activeTab:string = 'nav-overview';
  public loading:boolean = true;
  public somethingWentWrong:boolean = false;
  public designers:string[] = [];
  private id:string;
  private first:boolean = true;

  constructor(private bgService:BoardgameService,
              private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.init();
      this.first = false;
    });
  }

  ngOnInit(): void {

  }

  init():void {
    if(!history.state || !history.state.data || !this.first)
    {
      // have to get game by id
      this.getBoardgame();
    }else
    {
      // fix this for changing games url when history is there
      if(this.id == history.state.data.id)
      {
        this.game = history.state.data;
        this.formatDescription();
        this.loading = false;
      }else this.getBoardgame();
    }
  }

  async getBoardgame() {
    this.loading = true;
    const game:any = await this.bgService.getBoardgamesById([this.id]).toPromise();

    if(!game.games || game.games.length == 0)
    {
      this.somethingWentWrong = true;
      return;
    }else this.game = game.games[0];

    this.loading = false;
    this.formatDescription();
  }

  formatDescription() {
    this.game.formattedDescription = this.game.description_preview.substring(0,280);
  }

}
