import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public q:string;
  public results:any;
  public loading:boolean = true;

  constructor(private bgService:BoardgameService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      let orderObj:any = { ...params.keys, ...params };
      this.q = orderObj.params.q;
      this.searchGame();
    });
  }

  async searchGame() {
    this.loading = true;

    this.results = await this.bgService.fuzzySearchBoardGame(this.q).toPromise();
    this.results = this.results.games;

    this.loading = false;
  }

}
