<template>
  <h1>Iniciar Sesión</h1>
  <button @click="regresar">Regresar</button>
  <button @click="ingresar">Ingresar</button>
</template>

<script>
export default {
  name: "IniciarSesion",
  methods:{
    regresar(){
        this.$router.push('/')
    },
    ingresar(){
      this.$router.push('/home')
    }
  }
};
</script>
