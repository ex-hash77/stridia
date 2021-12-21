import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {


  hapus(){
    confirm('Apakah Anda Yakin Ingin Menghapus')
  }
  constructor() { }

  ngOnInit(): void {
  }
  users=[
    {
      "id":1,
      "produk":"Nasi Goreng",
      "harga":12000,
      "qty":1,
      "disc":0,
      "total":12000
    },
    {
      "id":2,
      "produk":"Ayam Geprek",
      "harga":12000,
      "qty":4,
      "disc":0,
      "total":48000
    },
    {
      "id":3,
      "produk":"Ice Tea",
      "harga":7000,
      "qty":4,
      "disc":0,
      "total":28000
    },
  ]
}
