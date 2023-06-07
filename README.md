#  Hackathon Taxis Libres

Esta Landing page es realizada con el propisito de brindar información y rcibir inscriptciones de personas a nivel mundial, para que puedan acceder al evento virtual Hackathon que es ofrecido anualmente por Taxis Libres.

# Funcionalidades
- Formulario de registro en donde las personas podrán inscribirse al evento, los datos del 	formulario son enviados por email al destinatario (taxisLibresExample@hotmail.com).
- Carrusel de imagenes con los distintos colaboradores y patrocinadores del evento.

#Tecnología e Instalación

1. El proyecto fué realizado con el Frameword Angular en su versión 15.2.5, si deseas instalar esta versión en tu proyecto local puedes ingresar el siguiente comando en tu linea de comando preferido.

```
npm i @angular/cli@15.2.5
```

2. Version de Nodejs y npm usadas: **Nodejs**:  [nodejs version 18.15.0](https://nodejs.org/en/blog/release/v18.15.0 "node version 18.15.0") y [npm 9.5.0](https://www.npmjs.com/package/npm/v/9.5.0 "npm 9.5.0")

3. Este proyecto utiliza la libreria [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o "ngx-owl-carousel-o") versión 15.0.0 para generar un slider o carrusel de imagenes.

```
npm install ngx-owl-carousel-o
```

4. Para importar la funcionalidad del carrusel importa la funcionalidad de la librería en tu módulo principal.

```
import { CarouselModule } from 'ngx-owl-carousel-o';
```

5. Para clonar y usar este proyecto puedes usar el siguiente comando.

```
git clone https://github.com/Eddy-glitcher/PokemonApp.git
```

6. Utiliza el siguiente comando para generar las dependencias necesarias que el proyecto utiliza.

```
npm install
```

------------

# Estructura del Proyecto
El sistema de organización usado en est proyecto es describido por la siguiente estructura.

1. El directorio **landing-page** es usado para almacenar el módulo principal de la aplicación, es el encargado de contener la aplicación.

2. El directorio **components** es usado para implementar un sistema de componentes, para dividir funcionalidades y a su vez pueden ser reutilizados a lo largo de la aplicación.

## Lista de componentes creados en el directorio Components.

1. **register-form** : Este componente, es utilizado para renderizar o mostrar un formulario básico de registro, este formulario está validado con el módulo **ReactiveFormsModule**. Para el envío de los datos del formulario se utiliza una función básica que envía los datos del formulario mediante cualquier sistema de mensajería del que el usuario disponga, en caso de que estos se llenen correctamente.

2. **sponsor-slider**: Este componente, es utilizado para renderizar o mostrar un slider o carrusel de imágenes, mediante la libreria **ngx-owl-carousel-o** en su version 15.0.0. El slider dispone de ciertas configuraciones customizables que permiten manipular su funcionamiento. Para más informacion sobre los controles vista la documentación oficial de la librería, en la sección **[Empezar: customOption](https://www.npmjs.com/package/ngx-owl-carousel-o/v/15.0.0#get-started "Empezar: customOption")**. Las imágenes del carrusel son cargadas a través de una lista de objetos, que referencian la ubicación exacta de cada imágen en la raíz del proyecto.

------------

## Directorio Shared
The shared file is used to contain components that will be shared across different contexts of the application:
Este directorio fué creado para contener componentes que se puedan compartir a lo largo de la aplicación y cuya función sea meramente la de renderizar información estática.

1. **header.component**: Este componente contiene la información del header o cabecera la landing page.

2. **footer.component**: Este componente contiene la información del footer o pie de página de la landing page.

------------

## Pages
Este proyecto solo tiene una sola vista que se puede renderizar, pero el proyecto está diseñado para que se puedan integrar más vistas o módulos son ningún problema, como se verá un poco más adelante en la sección de rutas de la aplicación.

1. **hackathon-page**: Este componente contiene toda la información de la landing page para la Hackathon, además de los diferentes componentes creados con anterioridad, como **header.component**, **footer.component**, **register-form** y **sponsors-slider**. Además esta componente es la vista principal de la aplicación, por lo que es la primera en renderizarse una vez se accede a la aplicación.

------------

## Lazy-loading y Optimizaciones

Para la optimización de las imágenes, se realizó una conversión de algunas de las imagenes con mayor peso, esta optimización se basa en la compresión de las imágenes por utilizando [TinyPng](https://tinypng.com/ "TinyPng"). Además se les cambió el formato para que su peso se redujera aún mas, utilizando [Convertio](https://convertio.co/es/ "Convertio"), un convertidor de imágenes para obtenerlas en el formato que se necesite, en este caso lsa imagenes se convirtieron a formato .AVIF.

Por otro lado se utilizó la directiva NgOptimizedImage para mejorar el rendimiento de la carga de las imágenes, con lazzy-loading aplicando las mejores prácticas. puedes ver la documentación oficial aquí: [NgOptimizedImage Docs](https://angular.io/api/common/NgOptimizedImage "NgOptimizedImage Docs").

------------
## Estilos de Scss y  Normalize.scss
Este proyecto utiliza un fichero Normalize.scss para reiniciar los estilos por defecto de los navegadores y estandarizarlos.

Los estilos generales de la aplicación utilizan el preprocesador Saas de css en este caso ficheros con la exrención .scss 

De este preprocesador se utilizaron las variables para contener los colores, tamaños de fuentes, importancia o peso de las funtes y Mixins para compartir algunas propiedades de css en conjunto, a lo largo de la aplicación.

------------

# Sistema de Rutas
La aplicación utiliza lazy-load o carga perezosa para optimizar la carga de la aplicación. Además esto permite que direfentes módulos puedan ser integrados con facilidd y a su vez que se puedan integrar nuevas vistas en la aplicación.

El proyecto unicamente cuenta con un solo módulo que se carga de manera peresoza, el cual es la **landing-page**, previamente descrita. Si quieres saber más sobre la carga peresoza o lazy-loading aplicado en angular y en este proyecto vista: [Lazy-loadin Docs](https://angular.io/guide/lazy-loading-ngmodules "Lazy-loadin Docs").

El fichero _redirect se creó con la necesidad de solucionar el problema de redireccionamiento que se presentó al momento de desplegar la aplicación en Netlify.
Acompañdo de la configuración que se implementó en el fichero anglar.json.

 ` {
      "glob": "_redirects",
       "input": "src",
        "output": "/"
    }`

# Lecciones y conocimiento
Con este proyecto aprendí y fortalecí muchas habilidades, tambien interioricé algunos otros conceptos.

- Es importante tener un sistemas modular para separa las funcionalidades importantes de la aplicación y poder reutilizarlas en cualquier lugar de la misma.

- La optimización de imégenes es fundamental para ofrecerle al usuario una experiencia e interfaz de calidad. De la mano de la carga diferida y la optimización.

- El preprocesador Saas es una herramienta indispensable para que nuestros estilos sean completamente homogéneos y evitemos duplicidades de estilos en nuestra aplicación. Además de que disponemos de herramientas ue facilitan la herencia de propiedades de css como lo son los mixins.

- Podemos separar las funcionalidades que tengan un aconfiguración un tanto compleja, en partes más pequeñas o en este caso componentes, que garanticen o permitan que podamos entender, realizar cambios, optimizar sin que nos perdamos o fallemos en el momento de entender su naturaleza o funcionalidad. Todo esto sin afectar su funcionamiento previo.

- Es indispensable que  para el desarrollo de cualquier proyecto contemos con una herramienta de diseño o maquetación que nos permita planear, diseñar, visualizar e implementar ideas o conceptos y de esta manera determinar lo que queremos y hasta donde debemos llegar para cumplir el proposito. Para este proyecto utilicé Figma.

# Agradecimientos y Mensaje Final

Si llegaste hasta este punto, te quiero dar las gracias por dedicar tu  valioso tiempo a la visualización o entendimiento de este pequeño proyecto. Aunque el proyecto es bastante pequeño es interesante todo lo que se puede aprender y lo que estamos dispuestos a realizar como perosnas o profesionales para ejecutarlo. Se pueden aprender muchisimas lecciones de todo tipo de proyectos, aún me falta mucho por aprender pero trabajo duro día tras día para mejorar. Si tienes tiempo y deseas enviarme alguna sugerencia o consejo estaré encantado y my agradecido de recibirlo. Contactame por medio de mi coreo electrónico: luis-gonzales6@hotmail.com. Compartamos ideas y enseñame un poco de lo que sabes. Sin más que decir, Muchas gracias.