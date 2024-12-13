// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'admin', loadChildren: () => import('../../../admin/src/app/app.routes').then(m => m.routes) },
  { path: 'client', loadChildren: () => import('../../../client/src/app/app.routes').then(m => m.routes) },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
