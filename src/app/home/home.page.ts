import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
  }

  show(){
    console.log(localStorage.getItem('keyLogin'));
  }
  
  
}
