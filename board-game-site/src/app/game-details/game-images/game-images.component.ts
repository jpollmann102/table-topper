import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-game-images',
  templateUrl: './game-images.component.html',
  styleUrls: ['./game-images.component.scss']
})
export class GameImagesComponent implements OnInit, OnChanges {
  @Input() game:any;
  public images:any = [];
  public videos:any = [];
  public safeUrls:SafeResourceUrl[] = [];

  constructor(private bgService:BoardgameService,
              public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes.game && changes.game.currentValue)
    {
      this.getImages(changes.game.currentValue.id);
      this.getVideos(changes.game.currentValue.id);
    }
  }

  async getImages(id:string) {
    this.images = await this.bgService.getBoardGameImages(id).toPromise();
    this.images = this.images.images;
  }

  async getVideos(id:string) {
    this.videos = await this.bgService.getBoardGameVideos(id).toPromise();
    this.videos = this.videos.videos;
    this.videos.forEach(x => {
      this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink(x.url)));
    });
  }

  embedLink(url:string) {
    return `https://www.youtube.com/embed/${url.split("=")[1]}`;
  }

}
