import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlighDirective]'
})
export class AdvancedHighlighDirectiveDirective implements OnInit {

  constructor(private  elRef: ElementRef, private render: Renderer2) {
  }

  @Input() defaultColor: string = "white";
  @Input('appAdvancedHighlighDirective') HighlightColor: string = "yellow";

  ngOnInit(): void {
    this.c=this.defaultColor;
    // this.render.setStyle(this.elRef.nativeElement, 'color', 'green',);
  }

 @HostListener('mouseenter') mousEnter(eventdata: Event) {
   this.render.setStyle(this.elRef.nativeElement, 'font-size', '28px',);
   this.c =this.HighlightColor;
 }

  @HostListener('mouseleave') mousLeave(eventdata: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'font-size', '14px',);
    this.c =this.defaultColor;

  }


 @HostBinding('style.color') c: string = "blue";
}
