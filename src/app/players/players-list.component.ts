import { Component, OnInit} from '@angular/core';
import { PlayersService } from '../dataservices/players.service';
import { Observable } from 'rxjs/Observable';
import { Players } from '../models/player';

@Component({
  template: `
    <h2>Players</h2>
    <p>List of players [name, surname, equipment and their age]</p>
      <ul>
      <li *ngFor="let player of play | async">
      <a href="#" [routerLink]="['/player', player[0]]">
        {{player[1]}}
        </a>
                <span>
            {{player[3]}}
        </span>
                <span>
            {{player[4]}}
        </span>
      </li>
    </ul>
    `
})

export class PlayersListComponent implements OnInit{
 play: Observable<Players[]>;
  constructor(private playersService: PlayersService) {
  }

  ngOnInit() {
    this.play = this.playersService.getPlayers();
  }
}
