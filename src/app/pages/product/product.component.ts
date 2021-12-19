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
  
  //alert hapus button
  hapus(){
    confirm("apakah anda yakin ingin menghapus");
  }

  editPop() {
    this.displayStyle = "block";
  }
  editClose() {
    this.displayStyle = "none";
  }
}
