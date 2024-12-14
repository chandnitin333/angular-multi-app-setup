import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'; // Example component
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component'; // Example component
import { adminRoutes } from './modules/admin/admin-routing.module';

export const routes: Routes = [
  ...adminRoutes,

  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'settings', component: AdminSettingsComponent }
];
