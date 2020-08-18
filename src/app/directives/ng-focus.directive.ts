import { Directive, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {
  @Output () appNgFovus = new EventEmitter();
  @HostListener ('document: click', ['Sevent', 'Sevent.target'])
  clickOutside(event, eventTarget){
    console.log('CLCL',
    this.el.nativeElement.contains(eventTarget))
    const aux = this.el.nativeElement.contains(eventTarget)
    if (!aux){
      this.appNgFovus.emit('click afuera')
    }
  }
constructor (private el: ElementRef){}
}