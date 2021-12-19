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

}
