import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

interface myData{
  obj: Object
}


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


  mensajeCliente = '';

  textoObj = Object.create({});



  enviarMensaje(){

    const pe = this.renderer.createElement('p');
    const texto = this.renderer.createText('Yo: ' + this.mensajeCliente);
    this.renderer.appendChild(pe, texto);
    this.renderer.appendChild(this.cuerpoTarjeta.nativeElement, pe);
    pe.scrollIntoView();

    this.textoObj.text = this.mensajeCliente;
    this.onEnviarPost(this.textoObj);



    this.mensajeCliente = '';

  }

  //'http://127.0.0.1:8000/API/chatbot'
  onEnviarPost(postData: { text: string} ){
    this.http.post('https://backchatbottest.firebaseio.com/chatbot.json', postData) //cambiar a la url del chatbot, esa url es de prueba
      .subscribe(responseData => {
        const pe = this.renderer.createElement('p');
        const texto = this.renderer.createText('Bot: ' + responseData.name);//en el chart bot deberia ser .text , el .name es para probar
        this.renderer.appendChild(pe, texto);
        this.renderer.appendChild(this.cuerpoTarjeta.nativeElement, pe);
        pe.scrollIntoView();
    });

  }


}
