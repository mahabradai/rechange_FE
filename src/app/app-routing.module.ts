import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marque/home',
    pathMatch: 'full',
  },
  {
    path: 'type',
    redirectTo: 'type/home',
    pathMatch: 'full',
  },
  {
    path: 'piece',
    redirectTo: 'piece/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

