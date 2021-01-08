import {Directive, ElementRef, OnInit} from '@angular/core';
import {LOCATION_INITIALIZED} from "@angular/common";

@Directive({
  selector: '[appBasichighlight]'
})
export class BasichighlightDirective implements OnInit {

  constructor(private elRef: ElementRef) {   }

  ngOnInit() {
   this.elRef.nativeElement.style.color = "red";
   this.elRef.nativeElement.style.backgroundColor="yellow";
   this.elRef.nativeElement.style.fontSize="40px";

  }

}

