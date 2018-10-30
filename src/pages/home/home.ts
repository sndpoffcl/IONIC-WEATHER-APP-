import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider} from "../../providers/weather/weather";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location:{
    city : string,
    state: string,
    id: number
  };
  constructor(public navCtrl: NavController , private weatherProvider : WeatherProvider , private storage: Storage) {

  }

  ionViewWillEnter(){
    this.location = {
      city: 'Miami',
      state: 'FL',
      id : 524901
    };

    this.weatherProvider.getWeather(this.location.id, this.location.city , this.location.state).subscribe(weather =>{
              console.log(weather);
              this.weather  = weather.current_observations;
    });
  }



}
