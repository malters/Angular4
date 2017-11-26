import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Players} from "../models/player";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  constructor(private jsonp: Jsonp) { }
  private playersUrl = 'https://stats.nba.com/stats/';

  getPlayers() {
    const endPoint = 'leaguedashplayerbiostats'
    let params = new URLSearchParams();
     params.set('PerMode', 'PerGame');
     params.set('LeagueID', '00');
     params.set('Season', '2016-17');
     params.set('SeasonType', 'Playoffs');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(this.playersUrl + endPoint, { search: params })
      .map(response => <Players[]> response.json().resultSets[0].rowSet);
  }

  get(id: string){
    const endPoint = 'commonplayerinfo';
    let params = new URLSearchParams();
    params.set('PlayerID', id);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
      .get(this.playersUrl + endPoint, { search: params })
      //.map(data => <Players> data.json().resultSets[0].rowSet);
      .subscribe(data => <Players> data.json().resultSets[0].rowSet);
  }
}
