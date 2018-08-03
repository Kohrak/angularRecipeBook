import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '../../../node_modules/@angular/compiler/testing';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') click(eventData: Event){
      this.renderer.addClass(this.elRef.nativeElement, 'open')
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
      this.renderer.removeClass(this.elRef.nativeElement, 'open')
    }

}
