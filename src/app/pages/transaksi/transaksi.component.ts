import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.component.html',
  styleUrls: ['./transaksi.component.scss']
})
export class TransaksiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  hapus(){
    alert("Apakah anda yakin ingin menghapus");
  }

  transaksi = [
    {
      'id':1,
      'idTrans':'2abdba2',
      'waktu':'12/04/2021',
      'kasir':'saya',
      'totalTrans':'50000',
    },
    {
      'id':2,
      'idTrans':'bda3da',
      'waktu':'05/10/2021',
      'kasir':'saya',
      'totalTrans':'75000',
    },
    {
      'id':3,
      'idTrans':'45bcad',
      'waktu':'02/05/2021',
      'kasir':'dia',
      'totalTrans':'12000',
    },
  ]
}
