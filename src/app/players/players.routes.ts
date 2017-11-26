import { Routes } from '@angular/router';

import { PlayersListComponent } from './players-list.component';
import { PlayersDetailsComponent } from "./players-details.component";

export const playersRoutes: Routes = [
  { path: 'players', component: PlayersListComponent },
  {
    path: 'player/:id',
    component: PlayersDetailsComponent
  }
];
