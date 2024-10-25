import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as price_data from './pricedata.json';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

interface ImgData
{
  url: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  prices: any = (price_data as any).default;
  image_base = '/assets/images/';
  layers: ImgData[] = [];
  current = this.prices[0].category;
  currentBalance = 20.0;
  ngOnInit(): void
  {
    console.log(this.prices)
  }

  addLayer(layerSrc: ImgData)
  {
    console.log(layerSrc)
    let selected = this.layers.find(x => x.category === layerSrc.category && x.url === layerSrc.url)
    //delete previous layer
    console.log(selected)
    if (selected)
    {
      console.log('item was found');
      this.currentBalance += selected.price; //add the price back
    }
    else
    {
      console.log('item was not found')
    }

    this.layers = this.layers.filter(x => x.category !== layerSrc.category);
    //add new layer
    this.layers.push(layerSrc);
    //charge the item
    this.currentBalance -= layerSrc.price;
  }

  getImageLocation(folder: string, code: string)
  {
    return `/assets/images/${folder}/${code}`;
  }
  getImageLocation1(folder: string, code: string)
  {
    return `/assets/images/${folder}/${code}`;
  }
  setCurrent(d: string)
  {
    this.current = d;
  }
  title = 'MonthEndConcert';
}
