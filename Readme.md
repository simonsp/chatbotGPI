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

Luego vuelve a la raiz del proyecto y ejecuta los siguientes comandos para migrar y entrenar al bot

```
python manage.py migrate
python manage.py migrate django_chatterbot
```



## Inicializando el servidor ⚙️

##### Basico para correr el server

Para iniciar el servidor necesitas ejecutar el siguiente comando_

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

**La versión viene con tres preprocesadores, los cuales limpian espacios en blanco, caractéres indeseados y también deja todo en minúscula*

**La version viene con un corpus creado por nosotros, con las respuestas básicas para un servicio de atención al cliente de algún servicio de salud.*

##### **Para crear nuevos preprocesadores y modificar o agregar corpus**, estos se enuentran en la carpeta `/utils`

- Para agregar un nuevo preproccesador, dentro del archivo `outProccesors.py` y genera una nueva funcion recibiendo como argumento una instancia de la clase `sentence` la cual contiene un atributo `text` que puedes preprocesar con tu propio algoritmo.
- Para modificar el corpus para un nuevo entrenamiento, dentro de la carpeta corpus estan todos los corpus en formato en yml, con `- -` para las sentencias que recibe y `-` para las respuestas (debe mantenerse el formato, intenten guiarse con el formato de los corpus que ya están hechos, intentando no colocar caracteres extraños en las oraciones con - -, debido a que esas son almacenadas para ser comparadas con las entradas del usuario que sí son preprocesadas). Luego, en `gpi/settings.py` debes agregar a trainers el corpus deseado dentro del arreglo.
- ***Recomendación:*** Cuando generes un cambio, intenta borrar las carpetas caché de tu proyecto, así como las bases de datos o archivos SQLITE, con esto evitas que responda con entrenamientos pasados. Luego migra todo nuevamente como aparece en el punto anterior.

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

