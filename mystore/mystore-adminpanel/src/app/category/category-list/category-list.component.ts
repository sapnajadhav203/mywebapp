import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categories=[]

  constructor(private service:CategoryService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.loadCategory()
  }
  loadCategory(){
    this.service.getCategory().subscribe(response=>{
      if(response['status']='success')
      {
      this.categories=response['data']
      }else{
        this.toastr.error(response['error'])
      }
    })
  }

}
