<template>
<router-link to="/login" class="btn btn-danger">Login</router-link>
<router-link to="/register" class="btn btn-warning">Register</router-link>
  <div v-if="cubos" class="card">
    <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo">
      <img :src="cubo.imagen" class="card-img-top" alt="..." style="width:200px;height:200px" />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">
          Modelo: {{ cubo.modelo }}, Marca: {{ cubo.marca }} , Color: {{ cubo.color }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CubosService from "../services/CubosService";
const service = new CubosService();
export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
};
</script>

<style scoped>
.card {
    display: inline-block;
    margin: 10px;
}
</style>