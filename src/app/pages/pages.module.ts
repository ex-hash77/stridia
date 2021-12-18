import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KasirComponent } from './kasir/kasir.component';
import { TransaksiComponent } from './transaksi/transaksi.component';


@NgModule({
  declarations: [DashboardComponent, ProductComponent, KasirComponent, TransaksiComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
