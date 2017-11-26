import { Component, OnInit} from '@angular/core';
import { PlayersService } from '../dataservices/players.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from "@angular/router";
import { Players } from '../models/player';

@Component({
  selector: 'app-player-details',
  template: `
    <h2>You selected:  {{play[0]}}</h2>
    <h3>Description</h3>
    <p>
       {{play[1]}}
    </p>
    `
})

export class PlayersDetailsComponent implements OnInit{
 play: Observable<Players>;
  constructor(private route: ActivatedRoute,
              private playersService: PlayersService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.play = this.playersService.get(id);
    });
  }
}
