# Backend

_Chatbot funcionando con Django_


### Pre-requisitos 📋

_Necesitas utilizar un entorno virtual de Python para que funcione correctamente_

```
virtualenv env --python=python3.6
```

### Instalación 🔧

_Primero instalamos los paquetes necesarios incluidos en 'requirements.txt'_

```
pip install -r requirements.txt
```

_Luego necesitas ejecutar los siguientes comandos_

```
python manage.py migrate
python manage.py migrate django_chatterbot
```



## Ejecutando las pruebas ⚙️

_Para iniciar el servidor necesitas ejecutar el siguiente comando_
```
python manage.py runserver
```
_Para usar la API se debe utilizar la siguiente url:_
```
http://127.0.0.1:8000/API/chatbot
```
_Se debe enviar una petición POST en forma de JSON con el atributo 'text'_
_EJEMPLO:_
```
{

"text":"Hola"
    
}
```