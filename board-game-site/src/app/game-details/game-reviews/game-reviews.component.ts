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

    console.log(this.reviews);
  }

}
