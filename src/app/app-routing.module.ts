import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './classe/guard.guard';
import { ClientComponent } from './client/client.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { ResaComponent } from './resa/resa.component';

const routes: Routes = [
  { path : 'hotel' , component : HotelsComponent , canActivate : [GuardGuard] },
  { path : 'client' , component : ClientComponent , canActivate : [GuardGuard] },
  { path : 'resa' , component : ResaComponent , canActivate : [GuardGuard] },
  { path : '' , component : LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
