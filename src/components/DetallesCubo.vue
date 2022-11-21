<template>
  <div v-if="cubo">
    <div class="card" style="width: 18rem">
      <img
        :src="cubo.imagen"
        class="card-img-top"
        alt="..."
        style="width: 200px; height: 200px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">
          Modelo: {{ cubo.modelo }}, Marca: {{ cubo.marca }} , Color:
          {{ cubo.color }}
        </p>
        <router-link :to="'/marca/' + cubo.marca" class="btn btn-warning">Volver</router-link>
        <button class="btn btn-success" @click="obtenerCubo(cubo.idCubo)">Comprar</button>
      </div>
    </div>
  </div>
  
  <div v-if="coment">
    <h2>Comentarios:</h2>
    <div v-for="com in coment" :key="com">
      <h3>--{{ com.comentario }}</h3>
      <h3>{{ com.fechaComentario }}</h3>
    </div>
  </div>
</template>

<script>
import CubosService from "../services/CubosService";
const service = new CubosService();
export default {
  name: "DetallesCubo",
  data() {
    return {
      cubo: {},
      coment: [],
    };
  },
  mounted() {
    this.loadCubo();
    this.loadComentarios();
  },
  methods: {
    loadCubo() {
      var id = this.$route.params.id;
      service.getCuboById(id).then((res) => {
        this.cubo = res;
      });
    },
    loadComentarios() {
      var id = this.$route.params.id;
      service.getComentarios(id).then((res) => {
        this.coment = res;
      });
    },
    obtenerCubo(id){
      service.comprarCubo(id).then(res=>{
        console.log("comprado" + res)
      })
    }
  },
};
</script>

<style>
</style>