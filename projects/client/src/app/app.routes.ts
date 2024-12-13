// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './components/client-home/client-home.component'; // Example component
import { ClientProfileComponent } from './components/client-profile/client-profile.component'; // Example component

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ClientHomeComponent },
  { path: 'profile', component: ClientProfileComponent }
];