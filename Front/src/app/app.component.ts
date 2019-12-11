import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
//import { responsiveVoice } from 'node_modules/responsivevoice/responsivevoice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cuerpoTarjeta', {static: true})
  private cuerpoTarjeta: ElementRef;

  constructor(private http: HttpClient, private renderer: Renderer2){

  }

  postData = {
      text: '',
  };

  mensajeCliente = '';


  enviarMensaje() {

    const pe = this.renderer.createElement('p');
    const texto = this.renderer.createText('Yo: ' + this.mensajeCliente);
    this.renderer.appendChild(pe, texto);
    this.renderer.appendChild(this.cuerpoTarjeta.nativeElement, pe);
    pe.scrollIntoView();

    this.postData.text = this.mensajeCliente;
    this.onEnviarPost(this.postData);

    //console.log("esto se envia --> " + JSON.stringify(this.postData));

    this.mensajeCliente = '';

  }


  // 'http://34.67.11.100:8000/API/chatbot'
  //postData: { text: string}
  onEnviarPost(postData) {
    this.http.post('/API/chatbot', postData) // cambiar a la url del chatbot, esa url es de prueba
      .subscribe(responseData => {
        const pe = this.renderer.createElement('p');
        const texto = this.renderer.createText('Bot: ' + responseData.text);
        this.renderer.appendChild(pe, texto);
        this.renderer.addClass(pe,'voz');
        this.renderer.appendChild(this.cuerpoTarjeta.nativeElement, pe);

        pe.scrollIntoView();
    });

  }


}
