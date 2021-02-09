import { Component, OnInit, Input } from '@angular/core';
import { MechanicService } from '../../mechanic.service';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss']
})
export class GameOverviewComponent implements OnInit {
  @Input() game:any;

  constructor(private mechanicService:MechanicService,
              private catService:CategoryService) { }

  ngOnInit(): void {
    this.catService.categoriesChange.subscribe(value => this.fillCategories(value));
    this.mechanicService.mechanicsChange.subscribe(value => this.fillMechanics(value));

    if(this.game) {
      this.fillCategories(this.catService.categories);
      this.fillMechanics(this.mechanicService.mechanics);
    }
  }

  fillCategories(value:any) {
    if(!this.game || !this.catService.categories) return;
    if(this.game.categories[0] && typeof(this.game.categories[0]) == 'string') return;
    else this.game.categories = this.game.categories.map(x => x.name = value[x.id]);
  }

  fillMechanics(value:any) {
    if(!this.game || !this.mechanicService.mechanics) return;
    if(this.game.mechanics[0] && typeof(this.game.mechanics[0]) == 'string') return;
    else this.game.mechanics = this.game.mechanics.map(x => x.name = value[x.id]);
  }

  bggLink():string {
    if(!this.game) return '';
    return `https://boardgamegeek.com/boardgame/${this.game.bgg_id}`;
  }

}
