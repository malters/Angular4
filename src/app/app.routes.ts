
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { playersRoutes }    from './players/players.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full'
  },
  ...playersRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

