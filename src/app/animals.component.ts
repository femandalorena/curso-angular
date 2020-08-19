import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'animal',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  @Input() nombre:string;
  @Input() color:string;
  @Input() edad:number;
  @Input() vacunado:boolean;

  constructor() { }

  ngOnInit() {
  }

}