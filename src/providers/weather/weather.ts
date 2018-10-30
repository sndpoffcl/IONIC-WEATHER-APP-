import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class WeatherProvider {
  apiKey = 'aea6f61b2cdcfc30bc0083d3cd34cb59';
  url;


  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={'+this.apiKey+'}';
  }

  getWeather(id, city, state){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+id+'&APPID={'+this.apiKey+'}');
  }
}
