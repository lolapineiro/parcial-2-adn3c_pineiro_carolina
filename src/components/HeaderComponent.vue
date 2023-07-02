<template>
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border border-ligh">
      <nav class="nav justify-content-center d-flex align-items-center">
        <img class="logo" src="../images/luna_llena.jpg" alt="logo tejiendo ideas">
        <router-link to="/" class="nav-link link-dark custom-link" exact>Diario de gratitud</router-link>
      <router-link to="/consejos" class="nav-link link-dark custom-link">Consejos</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  }
  </script>
  
  <style scoped>
.custom-link {
  margin-right: 10px; /* Ajusta el valor según el espacio deseado */
  text-decoration: none; /* Elimina la decoración de subrayado */
}

.custom-link:hover {
  text-decoration: underline; /* Añade subrayado al pasar el cursor sobre el enlace */
}
</style>
  