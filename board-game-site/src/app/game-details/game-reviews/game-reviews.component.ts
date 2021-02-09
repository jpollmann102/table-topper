import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-game-reviews',
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.scss']
})
export class GameReviewsComponent implements OnInit {
  @Input() game:any;
  public reviews:any;
  public ratings:any[] = [];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Rating';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = {
    domain: ['#214c23']
  };

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes.game && changes.game.currentValue)
    {
      this.getReviews(changes.game.currentValue.id);
    }
  }

  async getReviews(id:string) {
    this.reviews = await this.bgService.getBoardGameReviews(id).toPromise();
    // [
    // {
    //   "name": "Germany",
    //   "value": 40632,
    //   "extra": {
    //     "code": "de"
    //   }
    // },
    console.log(this.reviews);
  }

}
