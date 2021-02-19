import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardgameService } from '../boardgame.service';

declare var $:any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public searchText:string = '';
  public curated:any = [];
  public loading:boolean = true;

  constructor(private bgService:BoardgameService,
              private router:Router) { }

  ngOnInit(): void {
    this.getCuratedList();
  }

  async getCuratedList() {
    this.loading = true;
    this.curated = await this.bgService.getCuratedList().toPromise();
    this.curated = this.curated.games;
    this.loading = false;
  }

  goToGame(game:any):void {
    this.router.navigate(['/game', game.id], {state: { data: game }});
  }

  searchGame():void {
    if(this.searchText === "") return;
    this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
  }

  collapse():void {
    $('#navbar').toggleClass('toggled');
    $('#content').toggleClass('toggled');
  }

  formatGameName(name:string):string {
    if(name.length > 17) return name.substring(0, 18).trim() + '...';
    else return name;
  }

}
