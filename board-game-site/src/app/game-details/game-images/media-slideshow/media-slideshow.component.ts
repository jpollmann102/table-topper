import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-media-slideshow',
  templateUrl: './media-slideshow.component.html',
  styleUrls: ['./media-slideshow.component.scss']
})
export class MediaSlideshowComponent implements OnInit, OnChanges {
  @Input() items:any;
  public toShow:number[] = [0,1,2,3,4];
  public selected:number = 0;
  public active:number = 0;
  public numPages;
  public lastPageItems;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes.items && changes.items.currentValue)
    {
      this.numPages = [...Array(Math.ceil(changes.items.currentValue.length / 5)).keys()];
      this.lastPageItems = changes.items.currentValue.length % 5;
      if(this.numPages.length == 1) this.toShow = [...Array(this.lastPageItems).keys()];
    }
  }

  goUp():void {
    if(this.active == this.numPages.length-1) return;

    this.active++;

    if(this.active == this.numPages.length-1 && this.lastPageItems != 5)
    {
      this.toShow = [];
      for(let i = 1; i < this.lastPageItems+1; i++) this.toShow.push(this.items.length-i);
    }else this.toShow = this.toShow.map(x => x += 5);
  }

  goDown():void {
    if(this.active == 0) return;
    if(this.active == this.numPages.length-1 && this.lastPageItems != 5)
    {
      this.toShow = [...Array(5).keys()].map(i => i + (this.toShow[0]-5));
    }else this.toShow = this.toShow.map(x => x -= 5);
    this.active--;
  }

  zoomImage(index:number) {
    this.selected = index;
    this.showModal();
  }

  showModal():void {
    $('#imageModal').modal('show');
  }

}
