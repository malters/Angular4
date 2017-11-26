import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PlayersListComponent } from './players/players-list.component';
import { PlayersDetailsComponent } from './players/players-details.component';

import { routing } from './app.routes';
import { Players } from './models/player';
import {PlayersService} from './dataservices/players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
