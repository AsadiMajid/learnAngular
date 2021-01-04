import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    debugger
    if (!condition) {
      this.viewContentRef.createEmbeddedView(this.tempRef);
    } else {
      this.viewContentRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>, private  viewContentRef: ViewContainerRef) {
    debugger
  }

}
