import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
private url="http://localhost:4000/brand"
  constructor(private http:HttpClient) { }

getBrands(){
  const httpOption={
    headers:new HttpHeaders({
      token:sessionStorage['token']
    })
  }
  return this.http.get(this.url,httpOption)
}
}
