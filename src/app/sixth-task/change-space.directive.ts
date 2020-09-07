import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeSpace]'
})
export class ChangeSpaceDirective implements OnInit {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }

  ngOnInit() {
    const el = this.element.nativeElement;
    const text = el.innerText;
    el.innerText = text.replaceAll(' ', '_');
  }

}
