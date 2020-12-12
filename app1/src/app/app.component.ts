import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  constructor(private router:Router){
    
  }
  onFirst(){
   this.router.navigate(['/first'])
  }
  onSecond(){
    this.router.navigate(['/second'])
  }
  onThird(){
    this.router.navigate(['/third'])
  }
  onForth(){
    this.router.navigate(['/forth'])
  }
}
