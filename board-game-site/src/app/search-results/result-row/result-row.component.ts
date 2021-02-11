import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MechanicService } from '../../mechanic.service';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.scss']
})
export class ResultRowComponent implements OnInit {
  @Input() game:any;
  private catFilled:boolean = false;
  private mechFilled:boolean = false;

  constructor(private mechanicService:MechanicService,
              private catService:CategoryService,
              private router:Router) { }

  ngOnInit(): void {
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

  goToGame() {
    this.router.navigate(['/game', this.game.id], {state: { data: this.game }});
  }

}
