import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterationComponent } from './Register/user-registeration/user-registeration.component';
import { ProductComponent } from './products/product/product.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'registeration', canActivate: [AuthGuard], component: UserRegisterationComponent },
  { path: 'productRegister', canActivate: [AuthGuard], component: ProductComponent },
  { path: '', redirectTo: '/LoginComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
