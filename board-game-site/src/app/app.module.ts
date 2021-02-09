import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

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
import { SideBarComponent } from './side-bar/side-bar.component';
import { GameListingsComponent } from './game-details/game-listings/game-listings.component';
import { GameImagesComponent } from './game-details/game-images/game-images.component';
import { GameCreditsComponent } from './game-details/game-credits/game-credits.component';
import { GameOverviewComponent } from './game-details/game-overview/game-overview.component';
import { MediaSlideshowComponent } from './game-details/game-images/media-slideshow/media-slideshow.component';
import { SortableTableComponent } from './game-details/game-listings/sortable-table/sortable-table.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultRowComponent } from './search-results/result-row/result-row.component';
import { GameReviewsComponent } from './game-details/game-reviews/game-reviews.component';

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
    SideBarComponent,
    GameListingsComponent,
    GameImagesComponent,
    GameCreditsComponent,
    GameOverviewComponent,
    MediaSlideshowComponent,
    SortableTableComponent,
    SearchResultsComponent,
    ResultRowComponent,
    GameReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
