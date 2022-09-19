import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[CustomIf]'
})
export class CustomIfDirective {

  @Input() set CustomIf(condicion:boolean){

    if (condicion) {
        this.viewContainer.createEmbeddedView(this.template);
    }else{
        this.viewContainer.clear();
    }

  }

  constructor( private template: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef ) {
      
   }

}
