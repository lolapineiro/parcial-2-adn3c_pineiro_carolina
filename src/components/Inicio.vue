<template>
    <div>
      
   
    <link rel="shortcut icon" href="../images/luna.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../css/index.css">


   
    <div id="contenedor">
        <header_component></header_component>

        <div class="container mt-5 mb-3">
            <h1 class="text-center">{{titulo}}</h1>

            <div class="container">
                <p> {{mensaje}} </p>
            </div>

            <div class="container">
                <habito_agradecer></habito_agradecer>
            </div>
            <div>
                <footer_component></footer_component>
            </div>
        </div>
        
        <h1>{{ mensaje }}</h1>
    </div>
    </div>

</template>

<script>
import header_component from './header_component.vue';
import habito_agradecer from './habito_agradecer.vue';
import footer_component from './footer_component.vue';

export default {
  name: 'Otro'
  ,components: {
    
    footer_component,
    habito_agradecer,
    header_component
  },
  props: {
    msg: String
  }
}
</script>