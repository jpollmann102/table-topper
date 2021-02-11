import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MechanicService } from '../../mechanic.service';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss']
})
export class GameOverviewComponent implements OnInit, OnChanges {
  @Input() game:any;
  private catFilled:boolean = false;
  private mechFilled:boolean = false;

  constructor(private mechanicService:MechanicService,
              private catService:CategoryService) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes.game && changes.game.currentValue) this.init();
  }

  init():void {
    this.catFilled = false;
    this.mechFilled = false;

    this.catService.categoriesChange.subscribe(value => this.fillCategories(value));
    this.mechanicService.mechanicsChange.subscribe(value => this.fillMechanics(value));

    if(!this.catFilled) this.fillCategories(this.catService.categories);
    if(!this.mechFilled) this.fillMechanics(this.mechanicService.mechanics);
  }

  fillCategories(value:any) {
    this.catFilled = true;
    if(!this.game || !this.catService.categories) return;
    else if(this.game.categories[0] && typeof this.game.categories[0] === 'string' ) return;
    else
    {
      this.game.categories = this.game.categories.filter(x => x != null);
      this.game.categories = this.game.categories.map(x => x.name = value[x.id]);
    }
  }

  fillMechanics(value:any) {
    this.mechFilled = true;
    if(!this.game || !this.mechanicService.mechanics) return;
    else if(this.game.mechanics[0] && typeof this.game.mechanics[0] === 'string' ) return;
    else
    {
      this.game.mechanics = this.game.mechanics.filter(x => x != null);
      this.game.mechanics = this.game.mechanics.map(x => x.name = value[x.id]);
    }
  }

  bggLink():string {
    if(!this.game) return '';
    return `https://boardgamegeek.com/boardgame/${this.game.bgg_id}`;
  }

}
