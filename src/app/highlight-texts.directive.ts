import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlightTexts]'
})
export class HighlightTextsDirective {

  constructor(private elment: ElementRef) { 
    elment.nativeElement.style.backgroundColor = "green";
  }

  @HostListener('mouseover') onHover() {
    console.log("green is called");
  }

}