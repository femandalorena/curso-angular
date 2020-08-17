import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lorena',
  templateUrl: './lorena.component.html',
  styleUrls: ['./lorena.component.scss']
})
export class LorenaComponent implements OnInit {
  nameCOMP: string
  @Input () name: string;
  @Input () description: string;
  @Input () age: number;

  @Output() clickSave= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  onClickSave(){
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    }) //emite un json hacia afuera
  }
}
