---
title: cómo se hizo este sitio personal
date: 2020-05-17
description: y cómo hacer otro
tags: 
    - web
    - jekyll
thumbnail: /img/projects/portada_guia.jpg
type: projects
layout: article
---

No quiero tener mi sección de proyectos vacía (mientras finalizo algo de lo que estoy haciendo), entonces se me ocurrió escribir una pequeña demostración de cómo hice esta página, puede que le sirva a alguien más. No será precisamente un tutorial, ni un diario, más bien una *guía de alto nivel* para el proceso de crear un sitio web estático (blog, landing page, portafolio o similar).<sup>no me importa que ya existan cuatrocientas treinta y dos millones de guías similares</sup>

Comenzaré hablando de por qué la hice, y luego pasaré a contar qué se necesita para crearla y cómo conseguirlo (así como algunas alternativas).

Cualquier duda, inquetud, sugerencia, cumplido, saludo, abrazo, me pueden escribir al correo (desde el formulario de contacto o directamente) o a los comentarios del post (que estarán activados).

<img src="/img/projects/frontpage.jpg" alt="pagina">
<!-- <sup>sé que la portada es la pantalla de una pantalla de una pantalla</sup> -->

## ¿por qué?
Hace un par de años mi mamá ha estado trabajando en algunos proyectos independientes a su trabajo *de oficina*, para conseguir ingresos adicionales. Dentro de ese tiempo, habló con alguien de su empresa, quien le recomendó montar una página web para darle más visibilidad a sus servicios. Ella inmediatamente compró su propio dominio, [kolibrika.co](kolibrika.co), con la promesa de que las personas de tecnología y de digital de esta empresa le ayudarían. Un año después el sitio aún no existe. 

Yo, con el interés de demostrarle que no es tan difícil y podría ayudarle, creé un sitio web sencillo (y feo) y lo subí a [Github Pages](https://pages.github.com/), el cual es un excelente servicio. Pocó después compré el dominio (que no me gusta del todo) y decidí convertirlo en mi propio sitio personal. No espero mucho de la página, puede que me sirva de inspiración para hacer nuevos proyectos y crear algo de contenido, además de darlo algo de visibilidad a mi perfil. Además, el dominio me sirve para subir una que otra aplicación web que se me ocurra.

## cómo 

### generadores de sitios estáticos
Un sitio estático es básicamente cualquier página web que está construida únicamente con HTML, CSS y/o Javascript. La mayoría de blogs, páginas de negocio, portafolios y sitios personales son sitios estáticos. Afortunadamente, existen herramientas para crear fácilmente este tipo de páginas.

Las más conocidas (es decir, las que yo conozco) son:
- [Jekyll](https://jekyllrb.com/)
- [Gatsby](https://www.gatsbyjs.org/)
- [Hugo](https://gohugo.io/)

Cada una tiene sus ventajas y desventajas, pero su funcionalidad es la misma. Github Pages (la plataforma donde inicialmente pensaba alojar el sitio) recomienda utlizar Jekyll para construir los sitios web, por lo que fue natural usarlo.

### el diseño
La principal ventaja de utilizar un generador de sitios estáticos para crear este tipo de páginas, es que probablemente ya exista algo similar a lo que uno quiere hacer. Todas estas herramientas tienen un repositorio de temas o *templates* que se pueden utilizar como base para estos sitios (o se pueden utilizar inmediatamente).

El tema que estoy utilizando [leonids](http://github.com/renyuanz/leonids/) lo tomé de [acá](https://jekyllthemes.io/free), Gatsby y Hugo tienen sus propios repositorios.

<img src="/img/projects/temas_jekyll.jpg" alt="muestra de temas">

A partir de esto, es tan sencillo como descargar el código fuente del tema que uno quiere utilizar y seguir las instrucciones de su creador para verlo, modificarlo y crear páginas o posts.

Si se desea modificar el diseño base que viene en cada uno de estos temas, es buena idea aprender algo de HTML y CSS. Si se quiere explorar más la interactividad de la página (o si se está utilizando Gatsby), es necesario aprender Javascript.

### el internet
El siguiente paso es subirlo a internet, para que sea accesible por otras personas. Para esto existen varias opciones:
- [Github Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/) (la que terminé usando)
- [Firebase](https://firebase.google.com/?hl=es)
- [Heroku](https://www.heroku.com/)
- [AWS](https://aws.amazon.com/)
- Wordpress
- muchísimas otras que puede que sean mejores pero no conozco

En la mayoría de casos, el proceso para que esté en internet es tan simple como tomar el proyecto que descargamos desde el catálogo de temas, subirlo a un repositorio en github, crear una nueva cuenta y sitio en la plataforma de *hosting*, y enlazar esta cuenta con el repositorio del proyecto. Las instrucciones completas estarán en las páginas de estas.

<img src="/img/projects/netlify.jpg" alt="netlify">

Todas las opciones que listé tienen unas muy buenas opciones para *hosting* gratuito. Principalmente varían los precios (aunque son gratuitas, tienen opciones pagas con mayor capacidad si llega a ser necesario), las capacidades avanzadas y, claramente, el fabricante. En mi opinión, la manera más fácil para comenzar es con Github Pages, puesto que es 100% gratuito, provee un buen dominio por defecto y está muy bien integrado con Jekyll y el flujo de trabajo de Github. Sin embargo, al final me fui con Netlify porque ofrece buenas características en su opción gratuita (aunque si algún día llego a necesitar más de lo gratis probablemente me vaya a Firebase, la opción no gratuita más barata de Netlify ya es carísima)

### el nombre del sitio
Además, necesitamos un nombre para el sitio. La forma más fácil (y barata) que encontré de conseguir el nombre o *dominio* fue a través de [Namecheap](https://www.namecheap.com/), pero también existen otros servicios como GoDaddy o NameSilo.

Acá, simplemente se busca la URL que queremos para nuestro sitio (por ejemplo: misitio) y la página nos mostrará el precio y disponibilidad de este.
<img src="/img/projects/namecheap.jpg" alt="compra de dominio">

El dominio que tengo actualmente ([zamoradelatorre.com](zamoradelatorre.com)) me costó aproximadamente $35000 (o $9 USD) por año.

Después de esto, es necesario seguir las instrucciones del proveedor de *hosting* (en mi experiencia para Github Pages y Netlify ha sido fácil) para enlazar la página con el nombre que compramos.

### el contenido
La creación de posts por lo general es muy fácil (lo difícil es el contenido). 

Dentro de la estructura del proyecto descargado, existirá una carpeta de *posts*, en donde cada publicación está descrita por un archivo en formato Markdown (que es muy sencillo de aprender y utilizar).

<img src="/img/projects/markdown.jpg" alt="markdown">

Cada tema o *template* tiene su forma específica de manejar la creación de posts, por lo que es recomendable visitar la página de donde lo descargamos para ver sus instrucciones.

Realmente, lo difícil es encontrar y crear el contenido para subir.

### el fin
Existen otras herramientas para el manejo de formularios (FormCarry), analítica del negocio (Google Search Console y Google Analytics y Google OtraCosa), comentarios (Disqus), backend (bases de datos, funciones, procesamiento de información) que también son implementables fácilmente a partir de esta configuración

Eso es todo por ahora, ojalá le sirva a alguien. Recuerden que estoy dispuesto a ayudar si me contactan.

salud 2
