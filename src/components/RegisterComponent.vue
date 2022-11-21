<template>
  <form v-on:submit.prevent="registerUser()">
    <input type="hidden" v-model="dato.idUsuario"/>
    <label>Nombre</label>
    <input type="text" class="form-control" v-model="dato.nombre" />
    <label>Email</label>
    <input type="text" class="form-control" v-model="dato.email" />
    <label>Password</label>
    <input type="text" class="form-control" v-model="dato.pass" />
    <button class="btn btn-success">Enviar</button>
  </form>
</template>

<script>
import PerfilServices from "../services/PerfilService";
const service = new PerfilServices();
export default {
  name: "RegisterComponent",
  data() {
    return {
      dato: {
        idUsuario: 0,
        nombre: "",
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    registerUser() {
        service.registerUser(this.dato).then(res=>{
            console.log("registrado" + res.data)
        })
    },
  },
};
</script>

<style>
</style>