<template>
    <div>
      
   
    <link rel="shortcut icon" href="../images/luna.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../css/index.css">


   
    <div id="contenedor">
        <HeaderComponent></HeaderComponent>

        <div class="container mt-5 mb-3">
            <h1 class="text-center">{{titulo}}</h1>

            <div class="container">
                <p> {{mensaje}} </p>
            </div>

            <div class="container">
                <habito_agradecer></habito_agradecer>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>
        </div>
        
        <h1>{{ mensaje }}</h1>
    </div>
    </div>

</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import habito_agradecer from './habito_agradecer.vue';
import FooterComponent from './FooterComponent.vue';

export default {
  name: 'Otro'
  ,components: {
    
    FooterComponent,
    habito_agradecer,
    HeaderComponent
  },
  props: {
    msg: String
  }
}
</script>