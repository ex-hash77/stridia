import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  //filtering kategori
  function ($scope) {
    $scope.product=[
      {
        id:1,
        ketegori:"makanan"
      },
      {
        id:2,
        kategori:"minuman"
      }
    ]
  }


  //validation form
  productBarang:FormGroup;
  constructor(private fb: FormBuilder) {
    this.buatProduk();
   }
   buatProduk(){
     this.productBarang = this.fb.group({
       namaBarang:['', Validators.required],
       harga:['', Validators.required],
       hpp:['', Validators.required]
     });
   }

  ngOnInit(): void {
  }
  //Modal Pop Up
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyle1 = "none";
  
  //alert hapus button
  hapus(){
    confirm("apakah anda yakin ingin menghapus");
  }
  // edit popo up
  editPop() {
    this.displayStyle1 = "block";
  }
  editClose() {
    this.displayStyle1 = "none";
  }

  // array produt

  products=[
    {
      "id":1,
      "product":"Nasi Goreng",
      "kategori":"Makanan",
      "harga":15000
    },
    {
      "id":2,
      "product":"Ayam Geprek",
      "kategori":"Makanan",
      "harga":12500
    },
    {
      "id":3,
      "product":"Ice Tea",
      "kategori":"Minuman",
      "harga":7000
    },
    {
      "id":4,
      "product":"Hapitos",
      "kategori":"Snack",
      "harga":5000
    }
  ];
  

  
}
