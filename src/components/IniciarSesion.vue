<template>
  <h1>Iniciar Sesión</h1>
  <button @click="regresar">Regresar</button>
</template>

<script>
export default {
  name: "IniciarSesion",
  methods:{
    regresar(){
        this.$router.push('/')
    }
  }
};
</script>
