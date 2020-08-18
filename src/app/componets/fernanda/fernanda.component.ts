import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
SimpleChange
} from "@angular/core";

@Component({
  selector: "person",
  template: `
    <div style="border: 1px solid red;">
    <p>FER</p>
    <input type="text" [(ngModel)]="name">
    <p>VALOR VAR NAME: {{name}}</p>
    </div>
  `,
  styles: [
    `
    
    `
  ]
})

export class fernandaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name2: string;
  intermediaria : string;
 @Input () lastname: string;
  @Input ()
    get name(){
      return this.intermediaria;
    }
    set name (name: string) {
      this.intermediaria= 'pref'+ name;
    }
  constructor() {}
  ngOnInit() {
    console.log("ON INIT");
  }

  ngOnChanges(changes : SimpleChange) {
    if(changes && changes.lastname &&changes.lastname.currentValue){
      console.log("on changes" , changes.lastname.currentValue);
      const aux= 'segpref' +changes.lastname.currentValue;
      this.lastname=aux;
    }
  }

  ngDoCheck() {
    console.log("DO CHECK");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");

  }

}