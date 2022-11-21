<template>
<ul v-if="compras">
    <li v-for="com in compras" :key="com">
        idCubo:{{com.idCubo}}, idPedido:{{com.idPedido}}, idUsuario:{{com.idUsuario}}, fechaPedido:{{com.fechaPedido}}
    </li>
</ul>
<router-link class="btn btn-info" to="/miperfil">Volver</router-link>
</template>

<script>
import PerfilServices from "../services/PerfilService";
const service = new PerfilServices();
export default {
name:"ComporaComponent",
data(){
    return{
        compras:[]
    }
},
mounted(){
    service.getCompra().then(res=>{
        this.compras = res;
        console.log(res);
    })
}
}
</script>

<style>

</style>