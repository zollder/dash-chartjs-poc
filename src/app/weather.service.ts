import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // uses proxy.conf.json to workaround "origin policy" restrictions
  url = '/api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';

  // create an instance of http client through dependency injection
  constructor(private client: HttpClient) { }

  dailyForecast() {
    return this.client.get(this.url);
  }
}
