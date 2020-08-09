![RICK&MORTY]

# Evaluación final modulo 3- Adalab

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

# 1. Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a
utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
Foto
Nombre
Especie

# 2. Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la

# 3. Detalle de personajes

Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle
aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que
aparece y si está vivo o muerto.

# 4. BONUS

- MEJORAS VISUALES:

  - Mostrar la especie y si un personajes está muerto con un icono.
  - Usar algún sistema de grid para pintar el listado de personajes.
  - Que funcione bien el responsive en dispositivos pequeños.

- URL COMPATIBLE:

  - Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
  - Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".

- ORDENACIÓN:
  - Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.
