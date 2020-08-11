import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'person',
  template: 
  '<div style= "display:flex; flex-direction: column; border: 1px solid red;">'
  
  ,

  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  @Input() name:string;
  @Input() lastName:string;
  @Input() age:number;
  @Input() enable:boolean;

  constructor() { }

  ngOnInit() {
  }

}