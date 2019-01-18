import { Component, OnInit } from '@angular/core';
import { forecasts } from '../../weather-list';
import { City } from '../../cities';
import { OpenWeatherMapService } from '../../Services/open-weather-map.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  // weathers: City[];
  weathers: Object;

  constructor(private weatherMapService: OpenWeatherMapService) { }

  ngOnInit() {
    this.getWeather();

  }

  getWeather(): void {
    this.weatherMapService.getWeather()
      .subscribe(response => {
        this.weathers = response;
        console.log(this.weathers);
      });
  }

  search(city: string) {
    const safetyCity: Object = this.weathers;
    this.weatherMapService.searchWeather(city)
    .subscribe(response => {
      this.weathers = response;
      if (this.weathers['list'].length === 0) {
        alert('City not found');
        this.weathers = safetyCity;
      }
      console.log(this.weathers);
    });

  }
}
