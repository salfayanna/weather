import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export let cityForSearch: string = 'Budapest';

@Injectable({
  providedIn: 'root'
})

export class OpenWeatherMapService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/find?q=Budapest&units=metric&APPID=1fd0e0917b8b4646670a947706725797`);
  }

  searchWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&APPID=1fd0e0917b8b4646670a947706725797`);
  }

  getCityById(cityID: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&APPID=1fd0e0917b8b4646670a947706725797`);
  }

  getCity(id: string){
return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=1fd0e0917b8b4646670a947706725797`);
  }

}

// &APPID=dc47cfc22dffea34d3ad59dc36f20512;
// http get.return
// api.openweathermap.org/data/2.5/forecast?id={city ID}