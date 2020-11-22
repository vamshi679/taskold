import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { AuthGuard } from './auth.guard';
import { TestcodesComponent } from './testcodes/testcodes.component';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }, { path: 'login', component: LoginComponent }, 
{ path: 'home', component: HomeComponent },
{ path: 'resource', component: ResourceComponent,canActivate:[AuthGuard] },
{ path: 'testcode', component:TestcodesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
