<template>
    <div id="contenedor">
      
  
      <div class="container mt-5 mb-3">
        <h1 class="text-center">{{ titulo2 }}</h1>
  
        <div v-for="consejo in consejos" :key="consejo.id" class="container">
          <div class="card m-3 gap-3">
            <img class="card-img-top" :src="consejo.imagen" :alt="consejo.alt">
            <div class="card-body">
              <h4 class="card-title">{{ consejo.titulo }}</h4>
              <p v-show="texto">{{ consejo.mensaje }}</p>
              <p v-show="!texto"></p>
              <input type="checkbox" v-model="texto" /><strong>ver +</strong>
            </div>
          </div>
        </div>
  
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </template>
  
  <script>

  
  import FooterComponent from './FooterComponent'
  
  export default {
    components: {
      
      FooterComponent
    },
    data() {
      return {
        titulo2: 'El poder de agradecer',
        consejos: [
          {
            id: 1,
            titulo: 'Consejo 1',
            imagen: 'ruta-de-la-imagen-1',
            alt: 'Descripción de la imagen 1',
            mensaje: 'Mensaje del consejo 1'
          },
          {
            id: 2,
            titulo: 'Consejo 2',
            imagen: 'ruta-de-la-imagen-2',
            alt: 'Descripción de la imagen 2',
            mensaje: 'Mensaje del consejo 2'
          }
        ],
        texto: true
      }
    }
  }
  </script>
  
  <style>
  .logo{
    max-width: 15vw;
}


nav {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1{
    font-family: 'Dancing Script', cursive;
    padding-bottom: 1em;
    color: coral;

}

.foot {
    background-color: rgb(210, 210, 210);
    color: rgb(120, 117, 112);
    padding: 1.5em;
    margin: 0;
}

footer {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.emphasized { 
    font-style: italic; 
}
  </style>
  