import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private myElement:ElementRef) {
    myElement.nativeElement.style.color='red'
    console.log(myElement.nativeElement)
   }

   @HostListener('click') click(){
    alert("I am here")
   }

}
