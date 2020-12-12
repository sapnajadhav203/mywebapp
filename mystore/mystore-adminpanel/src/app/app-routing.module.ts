import { UserListComponent } from './user/user-list/user-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { BrandAddComponent } from './brand/brand-add/brand-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SigninComponent } from './admins/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product/product-add/product-add.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-add',component:ProductAddComponent},
  {path:'brand-add',component:BrandAddComponent},
  {path:'brand-list',component:BrandListComponent},
  {path:'category-add',component:CategoryAddComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'user-list',component:UserListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
