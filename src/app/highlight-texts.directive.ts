import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appHighlightTexts]'
})
export class HighlightTextsDirective {

  constructor(private elment: ElementRef) { 
    elment.nativeElement.style.backgroundColor = "green";
  }

  

}