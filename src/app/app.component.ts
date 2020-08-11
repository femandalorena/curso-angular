import { Component, OnInit} from '@angular/core';
import {from, fromEvent} from 'rxjs';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'curso-angular';
    people = [
    {
      name: 'martina',
      lastName: 'fernandez',
      age: 22,
      enable: true
    },
    {
      name: 'marco',
      lastName: 'martinez',
      age: 22,
      enable: true
    },
    {
      name: 'maria',
      lastName: 'marcos',
      age: 22,
      enable: false
    },
    {
      name: 'marta',
      lastName: 'martins',
      age: 22,
      enable: false
    }
  ]
  sw = true;

  personas = ['mar', 'maria', 'marco', 'marina']
  aux = 6
  auxColor = 'blue';
  auxClass = true;
  ngOnInit () {
    const array = from ([1,2,3,4,5,6]);
    array.subscribe (a => console.log('item: ', a) )
    const aux = fromEvent (document, 'mousemove');
    aux.subscribe((a:any) => console.log('event: ' + a.clientX + ', ' + a.clientY));
  }
}
