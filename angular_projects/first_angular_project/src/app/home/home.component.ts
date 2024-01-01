import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  public constructors(){
   
    console.log('this is contructors');
  }


ngOnInit(): void {
  console.log('ngOnInit() invoked...');
}
}
