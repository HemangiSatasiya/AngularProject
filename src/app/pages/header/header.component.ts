import { Component, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  num = 0; 


  constructor() { 
  }

   limiter(event){

  
 this.num = event
  console.log(event)

    }


}
