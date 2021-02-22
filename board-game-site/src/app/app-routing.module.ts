import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AboutComponent } from './about/about.component';
import { DiscoverQueueComponent } from './discover-queue/discover-queue.component';
import { HotListComponent } from './hot-list/hot-list.component';
import { TopListComponent } from './top-list/top-list.component';

const routes: Routes = [
  { path: 'game/:id', component: GameDetailsComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'discover', component: DiscoverQueueComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'hot-list', component: HotListComponent },
  { path: '', component: MainViewComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
