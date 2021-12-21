import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laporan-penjualan',
  templateUrl: './laporan-penjualan.component.html',
  styleUrls: ['./laporan-penjualan.component.scss']
})
export class LaporanPenjualanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customers=[
    {
      "id":1,
      "idTransaksi":"65adcbad",
      "kasir":"Saya",
      "waktu":"12/12/2021",
      "totalTrans":"120000",
      "jnsPembayaran":"Tunai",
      "customer":"Non-Member"
    },
    {
      "id":2,
      "idTransaksi":"7676fcd",
      "kasir":"Dia",
      "waktu":"10/05/2021",
      "totalTrans":"50000",
      "jnsPembayaran":"Debit",
      "customer":"Non-Member"
    },
    {
      "id":3,
      "idTransaksi":"81dbca",
      "kasir":"Kamu",
      "waktu":"05/12/2021",
      "totalTrans":"22900",
      "jnsPembayaran":"Tunai",
      "customer":"Member"
    },
  ];

  cetakLaporan(){
    window.location.href='/cetaklaporan'
  }
  
}
