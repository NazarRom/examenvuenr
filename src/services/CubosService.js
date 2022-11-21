import axios from 'axios';
import Global from '@/Global';
export default class CubosService {

    getCubos() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos";
            var url = Global.urlApiCubos + request;
            var cubos = [];
            axios.get(url).then(res => {
                cubos = res.data;
                resolve(cubos);
            })
        })
    }
    getCubosMarca() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/Marcas";
            var url = Global.urlApiCubos + request;
            var marcas = [];
            axios.get(url).then(res => {
                marcas = res.data;
                resolve(marcas);
            })
        })
    }

    getCubosFromOneMarca(marca) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/CubosMarca/" + marca;
            var url = Global.urlApiCubos + request;
            var cubos = [];
            axios.get(url).then(res => {
                cubos = res.data;
                resolve(cubos);
            })
        })
    }
    getCuboById(id) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/" + id;
            var url = Global.urlApiCubos + request;
            var cubo = {};
            axios.get(url).then(res => {
                cubo = res.data;
                resolve(cubo);
            })
        })

    }
    getComentarios(id){
        return new Promise(function (resolve) {
            var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
            var url = Global.urlApiCubos + request;
            var coment = [];
            axios.get(url).then(res => {
                coment = res.data;
                resolve(coment);
            })
        })
    }

    comprarCubo(id) {
        return new Promise(function(resolve){
            var request = "/api/Compra/InsertarPedido/" + id;
            var token = localStorage.getItem('token');
            var headers = { 'Authorization': 'bearer ' + token };
            var url = Global.urlApiCubos + request;
            axios.post(url,id,{ headers: headers }).then(res=>{
                console.log(res.data);
                resolve(res.data);
            })
        })
    }
}