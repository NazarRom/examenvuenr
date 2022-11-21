<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active"  aria-current="page">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marca
          </a>
          <ul class="dropdown-menu">
             <li v-for="marca in marcas" :key="marca" >
               <router-link class="dropdown-item" :to="'/marca/'+ marca">{{marca}}</router-link> 
                </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import CubosService from "../services/CubosService";
const service = new CubosService();
export default {
name:"MenuComponent",
data(){
    return{
        marcas:[]
    }
},
mounted(){
    service.getCubosMarca().then(result=>{
        this.marcas = result;
    })
}
}
</script>

<style>

</style>