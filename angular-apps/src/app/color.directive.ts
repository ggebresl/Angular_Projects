import { Directive ,ElementRef,Renderer} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  constructor(private el: ElementRef,private renderer: Renderer) { 

    //el.nativeElement.style.backgroundColor = "pink";

    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
  }

}
