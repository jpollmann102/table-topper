import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-slideshow',
  templateUrl: './game-slideshow.component.html',
  styleUrls: ['./game-slideshow.component.scss']
})
export class GameSlideshowComponent implements OnInit {
  @Input() games;
  public toShow:number[] = [0,1,2];

  constructor() { }

  ngOnInit(): void {

  }

  goUp():void {
    if(this.toShow[2] == 8) return;
    this.toShow = this.toShow.map(x => x += 3);
  }

  goDown():void {
    if(this.toShow[0] == 0) return;
    this.toShow = this.toShow.map(x => x -= 3);
  }

}
