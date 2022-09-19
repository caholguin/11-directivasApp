import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es obligatorio';
  
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string) {     
    this._color = valor;
    this.setColor();
  }
 
  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }

  constructor(private el: ElementRef<HTMLElement>) { 

    //console.log('hola');
   // console.log(el);

    this.htmlElement = el;
    
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje():void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  } 

}
