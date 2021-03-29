import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import Data from '../data.json';

@Component({
  selector: 'list-freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.scss']
})


export class FreelanceComponent implements OnInit {
  @Input() item:any;
  @Output() newItemEvent:EventEmitter<any>;
  text:any;
  users:any; 
  p:any;
  constructor() { 
    this.text=" ";
    this.users=Data.users;
    this.item=' ';
    this.p=[];
    this.newItemEvent = new EventEmitter<string>();
  }
  ngOnInit(): void {    
    this.p=this.users.sort((a:any,b:any) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  changeColor(a:any) {
    this.item = a.target.options[a.target.options.selectedIndex].text;
  }
}
interface User {
  name:string,
  sexe:string,
  prog:string,
  price:string
}   
