<template>
    <nav class="navbar navbar-expand-lg navbar-light" :style="{ backgroundColor: '#DDA15E', color: 'white' }">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button @click="redireccionarAIniciarSesion" type="button" class="btn btn-primary m-3" :style="{backgroundColor:'#FEFAE0', border:'0', color:'#BC6C25', 'font-weight':'bold'}">Iniciar Sesión</button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-primary m-3" :style="{backgroundColor:'#FEFAE0', border:'0', color:'#BC6C25', 'font-weight':'bold'}">Registrarse</button>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MiNavbar",
    methods:{
        redireccionarAIniciarSesion(){
            this.$router.push('/iniciarSesion')
        }
    }
  };
  </script>
  
  <style scoped>
  .navbar-toggler-icon {
    background-image: url('data:image/svg+xml;charset=utf8,...'); /* Ajusta según tu icono de menú */
  }
  </style>
  