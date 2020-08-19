import { Component, OnInit, Input} from '@angular/core';
import {from, fromEvent} from 'rxjs';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'curso-angular';
  name= "alguien";
  lastname= "pues";
  numbers = [1,2,3,4,5,6,7,8,9,10]
  persons = [{
      name: 'martina',
      lastName: 'fernandez',
      age: 11,
      enable: false},{
      name: 'marco',
      lastName: 'martinez',
      age: 12,
      enable: false},{
      name: 'maria',
      lastName: 'marcos',
      age: 13,
      enable: true},{
      name: 'marta',
      lastName: 'martins',
      age: 14,
      enable: true
    }]
  animals = [{nombre: "choco", color: "cafe", edad: 2, vacunado: true},
{nombre: "perla", color: "amarillo", edad: 4 , vacunado: false},
{nombre: "jorge", color: "cafe", edad: 5, vacunado: false},
{nombre: "beto", color: "negro", edad: 5 , vacunado: true},
{nombre: "berni", color: "negro", edad: 4, vacunado: true},
{nombre: "cuki", color: "negro", edad: 7 , vacunado: false},
{nombre: "lobo", color: "amarillo", edad: 1 , vacunado: false},
{nombre: "bozer", color: "negro", edad: 4 , vacunado: true},
{nombre: "dormilon", color: "cafe", edad: 4 , vacunado: false},
{nombre: "vandido", color: "café", edad: 5 , vacunado: false}
]
vacunados= this.animals.filter(s => s.vacunado===true)
novacunados=this.animals.filter(s => s.vacunado ===false)



  sw = true;

  personas = ['mar', 'maria', 'marco', 'marina']
  aux = 6
  auxColor = 'blue';
  auxClass = true;
  
  ngOnInit () {
    const array = from ([1,2,3,4,5,6]);
    array.subscribe (a => console.log('item: ', a) )
    const aux = fromEvent (document, 'mousemove');
 //   aux.subscribe((a:any) => console.log('event: ' + a.clientX + ', ' + a.clientY));


  }
  pure (a:number, b:number){
    return a+b;
  }
  impure (a:number, b:number){
    return a+b+Math.random();
  }
  onClickSave(event){
    
  }

  changeName(){
    this.name='nadie';
  }
  sumar(animals){
    let aux =0
    for (let i =0; animals.length++; i++){
      aux = aux +animals[i];
    }
  }
}
