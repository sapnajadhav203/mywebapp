import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []
  constructor(private service:ProductService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    this.service.getProducts().subscribe(response=>{
      if (response['status'] == 'success') {
        this.products = response['data']
      } else {
        this.toastr.error(response['error'])
      }
    
    })
  }

}
