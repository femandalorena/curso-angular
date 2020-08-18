import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'lorena',
  templateUrl: './lorena.component.html',
  styleUrls: ['./lorena.component.scss']
})
export class LorenaComponent implements OnChanges, OnInit {
  nameCOMP: string
  @Input () name: string;
  @Input () description: string;
  @Input () age: number;
  
user: string = "maria";
  @Output() clickSave= new EventEmitter();
  
  constructor() { }
  ngOnChanges(){
    console.log('on Changes')
  }
  ngOnInit(): void {
  }
  onClickSave(){
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    }); //emite un json hacia afuera
  }
}
