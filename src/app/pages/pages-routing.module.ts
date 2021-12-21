import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CetakLaporanPenjualanComponent } from './cetak-laporan-penjualan/cetak-laporan-penjualan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KasirComponent } from './kasir/kasir.component';
import { LaporanPenjualanComponent } from './laporan-penjualan/laporan-penjualan.component';
import { ProductComponent } from './product/product.component';
import { TransaksiComponent } from './transaksi/transaksi.component';


const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'kasir',
    component:KasirComponent
  },
  {
    path:'transaksi',
    component:TransaksiComponent
  },
  {
    path:'cetaklaporan',
    component:CetakLaporanPenjualanComponent
  },
  {
    path:'laporan',
    component:LaporanPenjualanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
