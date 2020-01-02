# Backend

_Chatbot funcionando con Django_


### Pre-requisitos 📋

_Necesitas utilizar un entorno virtual de Python para que funcione correctamente_, primero accedemos a la carpeta del proyecto y creamos el entorno virtual, luego inicializamos el entorno:

```
cd downloadDirectory/
virtualenv env --python=python3.6
source env/bin/activate
```

### Instalación  de dependencias

_Primero instalamos los paquetes necesarios incluidos en 'requirements.txt'_

```
pip install -r requirements.txt
```

Luego, copia los archivos de corpus dentro de 

```
env/lib/site_packages/chatterbot_corpus/data/spanish
```

Luego vuelve a la raiz del proyecto y ejecuta los siguientes comandos para migrar y entrenar al bot

```
python manage.py migrate
python manage.py migrate django_chatterbot
```



## Inicializando el servidor ⚙️

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

# Frontend

Debes entrar en la carpeta Front del proyecto y debes tener instalado node package manager (npm) y ejecutar:

```
npm install
```

Esto instalará las dependencias necesarias del proyecto en Angular.

Luego, inicializa el servidor local ejecutando

```
npm start
```

Para cambiar la url y apuntar a tu local, puedes configurar el archivo proxy.json que contiene las variables hacia donde apunta el front, puedes apuntar al backend en el servidor o a tu backendlocal, colocando las url correspondientes.

Estas son las URL por defecto que puedes configurar en el JSON proxy:



```
prod: http://34.67.11.100:8000/

dev: http://localhost:8000/
```

