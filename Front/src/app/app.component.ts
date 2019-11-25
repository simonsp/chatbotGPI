import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cuerpoTarjeta', {static: true})
  private cuerpoTarjeta: ElementRef;

  constructor(private renderer: Renderer2){
  }


  mensajeCliente = '';


  enviarMensaje(){

    const pe = this.renderer.createElement('p');
    const texto = this.renderer.createText("Yo: " + this.mensajeCliente);
    this.renderer.appendChild(pe, texto);
    this.renderer.appendChild(this.cuerpoTarjeta.nativeElement, pe);
    pe.scrollIntoView();

    this.mensajeCliente = '';

  }
}
