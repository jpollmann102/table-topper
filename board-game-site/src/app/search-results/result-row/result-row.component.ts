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

  constructor(private mechanicService:MechanicService,
              private catService:CategoryService,
              private router:Router) { }

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
    this.game.categories = this.game.categories.map(x => x.name = value[x.id]);
  }

  fillMechanics(value:any) {
    if(!this.game || !this.mechanicService.mechanics) return;
    this.game.mechanics = this.game.mechanics.map(x => x.name = value[x.id]);
  }

  goToGame() {
    this.router.navigate(['/game', this.game.id], {state: { data: this.game }});
  }

}
