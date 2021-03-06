import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { KasirComponent } from './pages/kasir/kasir.component';
import { ProductComponent } from './pages/product/product.component';
import { TransaksiComponent } from './pages/transaksi/transaksi.component';
import { ForgotComponent } from './users/forgot/forgot.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'transaksi',
    component:TransaksiComponent
  },
  {
    path:'kasir',
    component:KasirComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
