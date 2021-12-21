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
      "produk":"nasi goreng",
      "harga":12000,
      "qty":1,
      "disc":0,
      "total":12000
    },
    {
      "id":2,
      "produk":"nasi goreng",
      "harga":12000,
      "qty":1,
      "disc":0,
      "total":12000
    },
    {
      "id":3,
      "produk":"nasi goreng",
      "harga":12000,
      "qty":1,
      "disc":0,
      "total":12000
    },
  ]
}
