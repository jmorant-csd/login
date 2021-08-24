import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authRoutes } from './pages/auth/auth-routes';

const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
