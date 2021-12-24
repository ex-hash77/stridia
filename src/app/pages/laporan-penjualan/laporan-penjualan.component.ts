import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
    {
      "id":4,
      "idTransaksi":"db12cd",
      "kasir":"dia",
      "waktu":"05/04/2021",
      "totalTrans":"22900",
      "jnsPembayaran":"debit",
      "customer":"Member"
    },
  ];

  cetakLaporan(){
    window.location.href='/cetaklaporan'
  }
  
  download(){
      var element = document.getElementById('table')
      html2canvas(element).then((canvas)=>{
        console.log(canvas );
        var imgWidth = 208;
        var pageHeigh = 295;
        var imgHeigh = canvas.height * imgWidth / canvas.width;
        var heighLeft = imgHeigh;
        var date = new Date();
        var dtr = "" + date;

        var imgData = canvas.toDataURL('image/png');

        var doc = new jspdf.jsPDF('p', 'mm', 'a4')
        var position = 20;
        doc.setFontSize(8)
        doc.text(dtr,10,10);
        doc.addImage(imgData,'PNG', 0, position, imgWidth, imgHeigh);

        doc.save("laporan.pdf ");
      })
  }
}
