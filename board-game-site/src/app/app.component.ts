import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-game-site';
  public searchText:string = '';

  constructor(private router:Router) { }

  searchGame() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
  }
}
