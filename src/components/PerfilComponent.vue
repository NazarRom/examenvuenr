<template>
<h1>Mi perfil</h1>
  <div v-if="datos">
    <h1>Nombre: {{datos.nombre}}</h1>
    <h2>Email: {{datos.email}}</h2>
    <h2>Password: {{datos.pass}}</h2>
  </div>
  <router-link class="btn btn-info" to="/compra">Ver mi compra</router-link>
</template>

<script>
import PerfilServices from "../services/PerfilService";
const service = new PerfilServices();
export default {
  name: "PerfilComponent",
  data() {
    return {
      datos:{}
    };
  },
  mounted(){
   service.getPerfilUsuario().then(res=>{
    this.datos = res;
   })
  }
};
</script>

<style>
</style>