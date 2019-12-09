import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   collapse: false;
  constructor() { }

  variable;
  coll = 0;

  ngOnInit() {
  }

  collapseE(){
    
  
  }

}
