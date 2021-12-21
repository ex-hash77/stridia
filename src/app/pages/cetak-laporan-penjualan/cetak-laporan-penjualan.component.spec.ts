import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetakLaporanPenjualanComponent } from './cetak-laporan-penjualan.component';

describe('CetakLaporanPenjualanComponent', () => {
  let component: CetakLaporanPenjualanComponent;
  let fixture: ComponentFixture<CetakLaporanPenjualanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetakLaporanPenjualanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetakLaporanPenjualanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
