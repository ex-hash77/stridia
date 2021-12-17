import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  hapus(){
    confirm("apakah anda yakin ingin menghapus");
  }
  
}
