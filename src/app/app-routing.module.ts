import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as MarqueHomeComponent } from './marque/home/home.component';
import { HomeComponent as TypeHomeComponent } from './type/home/home.component';
import { HomeComponent as PieceHomeComponent } from './piece/home/home.component';



const routes: Routes = [
    { path:'marque-home' , component: MarqueHomeComponent },
    { path:'type-home' , component: TypeHomeComponent },
    { path:'piece-home' , component: PieceHomeComponent },
  ];
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

