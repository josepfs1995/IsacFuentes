import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '', redirectTo: 'me', pathMatch: 'full',
},
{
  path:'me', 
  loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule)
},{
  path:'**',
  redirectTo: 'me'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
