import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-credits',
  templateUrl: './game-credits.component.html',
  styleUrls: ['./game-credits.component.scss']
})
export class GameCreditsComponent implements OnInit {
  @Input() game:any;

  constructor() { }

  ngOnInit(): void {
  }

}
