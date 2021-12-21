import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KasirComponent } from './kasir/kasir.component';
import { TransaksiComponent } from './transaksi/transaksi.component';
import { LaporanPenjualanComponent } from './laporan-penjualan/laporan-penjualan.component';
import { CetakLaporanPenjualanComponent } from './cetak-laporan-penjualan/cetak-laporan-penjualan.component';


@NgModule({
  declarations: [DashboardComponent, ProductComponent, KasirComponent, TransaksiComponent, LaporanPenjualanComponent, CetakLaporanPenjualanComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
