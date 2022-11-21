import axios from 'axios';
import Global from '@/Global';
export default class PerfilService {
    //para obtener el token 
    getToken(data) {
        return new Promise(function (resolve) {
            var request = "/api/Manage/Login";
            var url = Global.urlApiCubos + request;
            var token = "";
            axios.post(url, data).then(res => {
                token = res.data.response;
                localStorage.setItem("token", token);
                resolve(token);
            })
        })
    }

    getPerfilUsuario() {
        return new Promise(function (resolve) {
            var request = "/api/Manage/PerfilUsuario";
            var token = localStorage.getItem('token');
            var headers = { 'Authorization': 'bearer ' + token };
            var user = {};
            var url = Global.urlApiCubos + request;
            axios.get(url, { headers: headers }).then(res => {
                user = res.data;
                resolve(user);
            })
        })
    }

    registerUser(dato) {
        return new Promise(function (resolve) {
            var request = "/api/Manage/RegistroUsuario";
            var url = Global.urlApiCubos + request;
            axios.post(url, dato).then(res => {
                resolve(res);
            })
        })
    }

    getCompra() {
        return new Promise(function (resolve) {
            var request = "/api/Compra/ComprasUsuario";
            var url = Global.urlApiCubos + request;
            var token = localStorage.getItem('token');
            var headers = {'Authorization': 'bearer ' + token };
            var compras = [];
            axios.get(url, { headers: headers }).then(res => {
                compras = res.data;
                resolve(compras);
            })
        })
    }
}