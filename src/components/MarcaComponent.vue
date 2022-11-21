<template>
    <div v-if="cubos" class="card">
    <div class="card" style="width: 18rem" v-for="cubo in cubos" :key="cubo">
      <img :src="cubo.imagen" class="card-img-top" alt="..." style="width:200px;height:200px" />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">
          Modelo: {{ cubo.modelo }}, Marca: {{ cubo.marca }} , Color: {{ cubo.color }}
        </p>
         <router-link :to="'/detalles/' + cubo.idCubo" class="btn btn-primary">Detalles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CubosService from "../services/CubosService";
const service = new CubosService();
export default {
  name: "MarcaComponet",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    this.allCubos();
  },
  methods: {
    allCubos() {
      var marca = this.$route.params.marca;
      service.getCubosFromOneMarca(marca).then((result) => {
        this.cubos = result;
      });
    },
  },
  watch: {
    "$route.params.marca"(newValue, oldValue) {
      if (newValue != oldValue) {
        this.allCubos();
      }
    },
  },
};
</script>

<style scoped>
.card {
    display: inline-block;
    margin: 10px;
}
</style>