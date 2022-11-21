<template>
  <form v-on:submit.prevent="accessLogin()">
    <label>Email</label>
    <input type="text" class="form-control" v-model="dato.email" />
    <label>Password</label>
    <input type="text" class="form-control" v-model="dato.password" />
    <button class="btn btn-success">Enviar</button>
  </form>
</template>

<script>
import PerfilServices from "../services/PerfilService";
const service = new PerfilServices();
export default {
  name: "LoginComponent",
  data() {
    return {
      dato: {
        email:"",
        password:"",
      },
    };
  },
  methods: {
    accessLogin() {
      service.getToken(this.dato).then((result) => {
        console.log(result);
        this.$router.push("/miperfil")
      });
    },
  },
};
</script>

<style>
</style>