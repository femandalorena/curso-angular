import { Directive, ElementRef, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {
  @Input ('appNgColor') color: string;
  @Input () secondColor: string;
  
   @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER')
    this.changeColor(this.color); 
  }

  @HostListener('mouseleave') onMousdeLeave(){
    console.log('MOUSE LEAVE')
    this.changeColor(this.secondColor);
  }

  constructor(private el: ElementRef) { 
    // console.log('ELEMENT REF: ', el);
   // this.changeColor('yellow');
  }


  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color; 
  }  

}