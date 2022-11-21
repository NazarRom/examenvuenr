import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import MarcaComponent from './components/MarcaComponent.vue';
import DetallesCubo from './components/DetallesCubo.vue';
import PerfilComponent from './components/PerfilComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import ComporaComponent from './components/ComporaComponent.vue';
const routes = [
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/marca/:marca", component:MarcaComponent
    },
    {
        path:"/detalles/:id", component:DetallesCubo
    },
    {
        path:"/miperfil" ,component:PerfilComponent
    },
    {
        path:"/login",component:LoginComponent
    },
    {
        path:"/register", component:RegisterComponent
    },
    {
        path:"/compra", component:ComporaComponent
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes : routes
})

export default router;