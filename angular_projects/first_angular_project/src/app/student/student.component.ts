import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  sid:number=0;
  sname:string="";
  dob:Date=new Date();

  items:string[]=["apple","banana","mango","oranges"]

  studentList=[
    {"id":101,"sname":"vidhya","fee":400},
    {"id":102,"sname":"adam","fee":300},
    {"id":103,"sname":"arav","fee":500},
    {"id":104,"sname":"aksh","fee":550},
  ]
  imageURL="../../assets/cat.jpg"

  

ngOnInit(): void {
  this.sid=101;
  this.sname="vidhya";

}
getData(){
  alert(this.sid+" "+this.sname);
}
course:string="";

mycolor="yellow";
}
