import { Directive,HostListener,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appHighlightYellow]'
})
export class HighlightYellowDirective {
  myelement;
  
  constructor(private elment: ElementRef) { 
    this.myelement = elment;
  }

  @HostListener('mouseover') onHover() {
    console.log("yellow is called");
    this.myelement.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') onHover() {
    console.log("yellow is cleared");
    this.myelement.nativeElement.style.backgroundColor = "red";
  }
}