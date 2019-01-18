import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../Services/open-weather-map.service';

@Component({
  selector: 'app-five-days',
  templateUrl: './five-days.component.html',
  styleUrls: ['./five-days.component.css']
})
export class FiveDaysComponent implements OnInit {

  cityList: Object;

  constructor(private weatherMapService: OpenWeatherMapService) { }

  ngOnInit() {
    // this.getCityById(cityId);
  }

getCityById(cityId){
  this.weatherMapService.getCityById(cityId)
  .subscribe(response => {
    this.cityList = response;
    console.log(this.cityList);
  });
}

}
