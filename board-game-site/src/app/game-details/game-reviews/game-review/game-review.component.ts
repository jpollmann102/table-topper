import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.scss']
})
export class GameReviewComponent implements OnInit {
  @Input() review:any;

  constructor() { }

  ngOnInit(): void {
  }

}
