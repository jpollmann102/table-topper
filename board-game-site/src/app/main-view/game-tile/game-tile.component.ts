import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss']
})
export class GameTileComponent implements OnInit {
  @Input() game;

  constructor(private bgService:BoardgameService,
              private router:Router) { }

  ngOnInit(): void {
  }

  goToGame():void {
    this.router.navigate(['/game', this.game.id], {state: { data: this.game }});
  }

}
