import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
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
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Number of votes'
    },
    xAxis: {
      title: {
        text: 'Rating'
      },
      categories: ['1','2','3','4','5']
    },
    yAxis: {
      title: {
        text: 'Rating'
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    series: [
      {
        name: 'Number of votes',
        type: 'bar',
        color: '#1a237e',
        dataLabels: {
          enabled: true,
          color: '#000000'
        },
        data: []
      }
    ]
  });

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
    this.chart.addPoint(this.reviews.summary.one_star_count);
    this.chart.addPoint(this.reviews.summary.two_star_count);
    this.chart.addPoint(this.reviews.summary.three_star_count);
    this.chart.addPoint(this.reviews.summary.four_star_count);
    this.chart.addPoint(this.reviews.summary.five_star_count);
  }

}
