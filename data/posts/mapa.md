---
title: un mapa
description: no es de colombia
date: 2020-05-10
tags:
    - colombia
    - python
thumbnail: /img/posts/mapa_tr.png
type: blog
---

*este mapa no es de colombia*  
*no es de sus costas, ni de sus ríos*  
*no están sus islas*  
*no tiene su música*  
*no está su gente o sus animales*  
*y aunque estén en las enciclopedias*  
*y los impriman en camisetas*  
*ningún mapa es de colombia*

<hr>

Originalmente es con fondo negro, pero lo volví transparente para esta página.

El mapa fue hecho a partir de imágenes satelitales de elevación, del proyecto *Shuttle Radar Topography Mission* [(SRTM)](http://srtm.csi.cgiar.org/srtmdata/). Se hizo un mosaico con los segmentos del dataset de SRTM en donde se encuentra Colombia, posteriormente se recortó el raster siguiendo el contorno del área continental del país (este contorno lo tomé de [SERiES](https://sites.google.com/site/seriescol/)).

Teniendo ya el contorno de Colombia, se modificó ligeramente el código de [line-topography-plotter](https://github.com/sjaquemate/line-topography-plotter) para obtener el diseño final.

Todo el código utilizado (sin contar la edición de la imagen para ponerle fondo negro/transparente), se puede encontrar en este [repositorio](https://github.com/cazdlt/line-topography-plotter).


<!-- poner imágenes sacadas del notebook -->

<hr>
<img alt="mapa lineas" src="/img/posts/mapa_tr.png" />
<hr>

El texto (y por lo tanto el resto del post, realmente no hubiera hecho toda una publicación para explicar cómo lo hice) se me ocurrió después de hacer un [post en /r/Colombia](https://www.reddit.com/r/Colombia/comments/ggst2l/oc_relieve_colombiano/) con esta imagen, y recibir múltiples sugerencias para poner este mapa en una camiseta, y otras personas diciendo que lo querían de fondo de pantalla. 

Honestamente, aunque está bonito, no creo que esta estética sea nada *"colombiana"* (ponerle los colores de la bandera sería peor), al menos para mí. El territorio colombiano (como el de cualquier país) contiene una gran diversidad de expresiones y características que no están definidas por sus fronteras políticas, aunque se haya intentado definir una identidad nacional única a partir de símbolos que fácilmente podrían ser diferentes. 

Si se quisiera agrupar este mapa en regiones según características de las comunidades que lo habitan (ignorando las fronteras definidas políticamente), sería necesario incluir sectores de todos (?) los países vecinos. De Panamá se tomaría el Darién, del caribe (realmente intenté tener al menos un par de líneas para San Andrés y Providencia, pero estaba difícil), de Venezuela (los llanos por lo menos), Brazil, Perú (el Amazonas) y Ecuador. Aclaro que no estoy fomentando el imperialismo colombiano, solo desdibujando las fronteras (y el mapa) del país.

En fin, no odio el mapa, me gustan las líneas, solo lo estoy sobreanalizando.

Si alguien lo quiere en mejor resolución, puede escribirme al correo.



