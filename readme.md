# Proyecto Legales.

# Descripción
Este proyecto debe crear un texto asociado a los legales basado en los parámetros que se encuentran en el formulario.

# Requisitos 'funcionales'
1. Que las marcas diferentes puedan tener acceso
2. Preguntar el nombre de la marca
3. Agregar el nombre de la marca al legal generado
4. Debe validar lógicamente los campos
5. Que guarde los legales generados
6. Que el administrador pueda ver los legales generados
7. Que muestre el legal generado
8. Que permita copiar el legal generado

# Requisitos no funcionales
1. Que el acceso sea permitido desde computadores o celulares conectados a internet
2. Que la información sea guardada de forma segura y restringida
3. Que esté disponible en horario de oficina
4. Que genere la información solicitada de manera inmediata
5. Que tenga la capcidad de generar tantos legales como sean necesarios
6. Que el diseño del formulario se adapte a la pantalla en donde sea consultado

# Arquitectura
Esta es una aplicación cliente-servidor. Por el lado del cliente se encuentra el archivo index.html que es el que contiene el código del formulario y la lógica que permite enviar al servidor remoto los datos ingresados.

De lado del servidor es una aplicación de nodejs - express. Esta aplicación tiene 1 endpoint para recibir la información del formulario. A su vez esta guarda la información en archivos planos de texto (Tarea futura: Usar una base de datos). 

# Instrucciones de uso
## Para el usuario
Entrar a la ruta provista (en desarrollo o producción) seguir los pasos indicados en el formulario que se despliega. Una vez diligenciado correctamente el formulario el usuario visualizará el legal generado y lo podrá copiar y pegar.

## Para el administrador
Entrar a la ruta /admin-legal e ingresar el usuario y contraseña. 

Si el usuario y contraseña se llegaran a perder, entonces solicitar al desarrollador que cambie el usuario y contraseña directamente en el código (Una futura mejora sería agregar un repositorio de usuarios administrable).

Una vez ingresado el usuario y contraseña correcto, se listaran los legales generados. Se pueden visualizar el contenido, la fecha y la marca.

# Desarrollo
El frontend tiene una referencia al CDN de bootstrap, no tiene otras dependencias. Solo es abrir el archivo index.html en el navegador predeterminado.

El backend necesita nodejs 18+. Correr el comando `npm install` para instalar las dependencias y el comando `npm start` para iniciar el servidor en modo desarrollo.

Hay que asegurarse que el puerto en el que inicia el backend es el mismo que está puesto en el frontend.

# Integración
- Usar la cuenta en Github (o cualquier otro proveedor) para poder integrar el código entre los desarrolladores

# Despliegue
- Solicitar una ruta y puerto disponible al servidor en donde se hace la instalación
- Solicitar permisos de lectura y escritura sobre el sistema de archivos, sea por FTP o SSH. Documentar como es ese proceso aqui.
- Utilizar cualquier servidor web disponible para esto, sea apache, nginx o pm2.
- Colocar en el archivo de ambiente la información necesaria del backend y asegurarse que el frontend tenga en despliegue la ruta necesaria para que funcione en modo producción.

# Pruebas
- Tarea futura: Crear guión con posibles entradas que serviran para probar que el sistema funcione correctamente.