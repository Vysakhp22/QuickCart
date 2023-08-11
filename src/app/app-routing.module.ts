import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterationComponent } from './Register/user-registeration/user-registeration.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'registeration',component: UserRegisterationComponent },
  { path: 'productRegister',component: ProductComponent },
  { path: '',   redirectTo: '/LoginComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
