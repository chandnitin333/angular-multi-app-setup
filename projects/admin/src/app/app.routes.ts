import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; // Example component
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component'; // Example component

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'settings', component: AdminSettingsComponent }
];
