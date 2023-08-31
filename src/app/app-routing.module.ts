import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin/components/admin-dashboard/admin-dashboard.component';
import { loginGuard } from './guards/login.guard';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'admin',
    canActivate: [loginGuard],
    canDeactivate: [logoutGuard],
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
