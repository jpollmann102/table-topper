import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../boardgame.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public curated:any = [];

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
    this.getCuratedList();
  }

  async getCuratedList() {
    this.curated = await this.bgService.getCuratedList().toPromise();
    this.curated = this.curated.games;
  }

}
