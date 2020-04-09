import { Component,OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {from}from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private objhttpserv:Http)
  {

  }
  title = 'myprojectapp';
  apiValues:emp[]=[];
  ourapiurl:string="http://localhost:4200/api/Values";

  ngOnInit():void{
    this.objhttpserv.get(this.ourapiurl).subscribe(values=>{this.apiValues=values.json() as emp[];});
  }
}
interface emp{
  eid:number;
  ename:string;
  edesig:string;
}