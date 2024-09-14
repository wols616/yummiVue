<template>
  <h1>Iniciar Sesión</h1>
  <button @click="regresar">Regresar</button>
  <br>
  <br>
  <input type="text" placeholder="Correo" v-model="correo">
  <input type="password" placeholder="Contraseña" v-model="contrasena">
  <button @click="ingresar">Ingresar</button>
</template>

<script>
import axios from "axios";

export default {
  name: "IniciarSesion",
  data(){
    return{
      correo: "",
      contrasena: ""
    }
  },
  methods:{
    regresar(){
        this.$router.push('/')
    },
    async ingresar(){

      try{
        const response = await axios.post('http://localhost:3000/api/login', {correo: this.correo, contrasena: this.contrasena});

        if (response.data.success){
          localStorage.setItem('usuario', JSON.stringify(response.data.usuario));

          this.$router.push('/home');
        } else{
          console.error('Error en el inicio de sesión');
        }
      } catch (error){
        console.error('Error al hacer la solicitud', error);
      }
    }
  }
};
</script>
