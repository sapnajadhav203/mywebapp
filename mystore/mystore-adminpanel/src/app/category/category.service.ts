import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private url="http://localhost:4000/category"
  constructor(private http:HttpClient) { }

  getCategory(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }
    return this.http.get(this.url,httpOptions)
  }
}
