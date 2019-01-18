import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../Services/open-weather-map.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {

  weathers: Object;

  constructor(private weatherMapService: OpenWeatherMapService, private router: Router) { }

  ngOnInit() {
    this.getWeather();

  }

  getWeather(): void {
    this.weatherMapService.getWeather()
      .subscribe(response => {
        this.weathers = response;
        console.log('s', this.weathers);
      });
  }

  search(city: string) {
    this.weatherMapService.searchWeather(city)
    .subscribe(response => {
      if (response['list'].length === 0) {
        alert('City not found');
      } else {
        this.weathers = response;

      }
      console.log('search', this.weathers);
    });
  }

  redirect() {
    this.router.navigate(['./five-days']);
  }
}

// const id = +this.route.snapshot.paramMap.get('id');