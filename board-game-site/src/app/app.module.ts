import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotGamesComponent } from './main-view/hot-games/hot-games.component';
import { TopGamesComponent } from './main-view/top-games/top-games.component';
import { DiscoverGamesComponent } from './main-view/discover-games/discover-games.component';
import { GameSlideshowComponent } from './main-view/game-slideshow/game-slideshow.component';
import { GameTileComponent } from './main-view/game-tile/game-tile.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameListingsComponent } from './game-details/game-listings/game-listings.component';
import { GameImagesComponent } from './game-details/game-images/game-images.component';
import { GameCreditsComponent } from './game-details/game-credits/game-credits.component';
import { GameOverviewComponent } from './game-details/game-overview/game-overview.component';
import { MediaSlideshowComponent } from './game-details/game-images/media-slideshow/media-slideshow.component';
import { SortableTableComponent } from './game-details/game-listings/sortable-table/sortable-table.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultRowComponent } from './search-results/result-row/result-row.component';
import { GameReviewsComponent } from './game-details/game-reviews/game-reviews.component';
import { GameReviewComponent } from './game-details/game-reviews/game-review/game-review.component';
import { AboutComponent } from './about/about.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GameRelatedComponent } from './game-details/game-related/game-related.component';
import { DiscoverQueueComponent } from './discover-queue/discover-queue.component';
import { ResponseInterceptor } from './response-interceptor.service';
import { TopListComponent } from './top-list/top-list.component';
import { HotListComponent } from './hot-list/hot-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainViewComponent,
    NotFoundComponent,
    HotGamesComponent,
    TopGamesComponent,
    DiscoverGamesComponent,
    GameSlideshowComponent,
    GameTileComponent,
    GameDetailsComponent,
    GameListingsComponent,
    GameImagesComponent,
    GameCreditsComponent,
    GameOverviewComponent,
    MediaSlideshowComponent,
    SortableTableComponent,
    SearchResultsComponent,
    ResultRowComponent,
    GameReviewsComponent,
    GameReviewComponent,
    AboutComponent,
    TopBarComponent,
    GameRelatedComponent,
    DiscoverQueueComponent,
    TopListComponent,
    HotListComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
