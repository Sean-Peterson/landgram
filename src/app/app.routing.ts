import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
