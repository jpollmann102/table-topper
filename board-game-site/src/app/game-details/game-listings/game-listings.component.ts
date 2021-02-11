import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BoardgameService } from '../../boardgame.service';

@Component({
  selector: 'app-game-listings',
  templateUrl: './game-listings.component.html',
  styleUrls: ['./game-listings.component.scss']
})
export class GameListingsComponent implements OnInit {
  @Input() game:any;
  private prices:any;
  public pricesMap:any = {
    'Store': 'store_name',
    'Price': 'price_text'
  };
  public usPrices:any[] = [];
  public ukPrices:any[] = [];
  public caPrices:any[] = [];
  public usedPrices:any[] = [];
  public pricesTable:any[] = [];
  public historicalLow:any;

  constructor(private bgService:BoardgameService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges): void {
    if(changes.game && changes.game.currentValue)
    {
      this.getPrices(changes.game.currentValue.id);
    }
  }

  async getPrices(id:string) {
    this.prices = await this.bgService.getBoardGamePrices(id).toPromise();
    this.prices = this.prices.gameWithPrices;
    this.usPrices = this.prices.us;
    this.ukPrices = this.prices.uk;
    this.caPrices = this.prices.canada;
    this.usedPrices = this.prices.used;
    if(this.game.historical_low_prices)
    {
      this.historicalLow = this.game.historical_low_prices.filter(x => x.country == 'US');
      if(this.historicalLow.length == 0) this.historicalLow = null;
    }

    this.formatPrices();
  }

  formatPrices() {
    this.usPrices.forEach(x => {
      x.low_price = this.game.price_text;
      x.used = false;
    });
    this.ukPrices.forEach(x => {
      x.low_price = this.game.price_uk;
      x.used = false;
    });
    this.caPrices.forEach(x => {
      x.low_price = this.game.price_ca;
      x.used = false;
    });
    this.usedPrices.forEach(x => {
      x.low_price = this.game.price_text;
      x.used = true;
    });

    this.pricesTable = this.usPrices.concat(this.ukPrices, this.caPrices, this.usedPrices);

  }

  onRowClick(event) {
    window.open(event[0].url, "_blank");
  }

}
