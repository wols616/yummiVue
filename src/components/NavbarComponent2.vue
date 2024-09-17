<template>
    <nav class="navbar navbar-expand-md p-4" :style="{ backgroundColor: '#DDA15E' }">
      <div class="container">
        <a class="navbar-brand" href="/home">
          <img
            src="https://i.ibb.co/7SNdCFQ/Yummy-4.png"
            alt="Logo"
            :style="{ height: '10vh' }"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end d-md-none"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#favorites">
                  <i class="bi bi-heart fs-1 me-2"></i>
                  <span>Favoritos</span>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a @click="redireccionarAlAgregar" class="nav-link" href="#add">
                  <i class="bi bi-plus-circle fs-1 me-2"></i>
                  <span>Agregar</span>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="/recipePage">
                  <i class="bi bi-person-circle fs-1 me-2"></i>
                  <span>Perfil</span>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="#search">
                  <i class="bi bi-search fs-1 me-2"></i>
                  <span>Buscar</span>
                </a>
              </li>
              <li class="nav-item d-flex align-items-center">
                <a class="nav-link" href="/">
                  <i class="bi bi-box-arrow-left fs-1"></i>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-none d-md-flex align-items-center">
          <a class="nav-link" href="#favorites">
            <i class="bi bi-heart fs-1 me-4"></i>
          </a>
          <a @click="redireccionarAlAgregar" class="nav-link" href="#add">
            <i class="bi bi-plus-circle fs-1 me-4"></i>
          </a>
          <input
            type="text"
            class="form-control rounded-pill p-2 me-2"
            placeholder="Buscar"
            :style="{ minWidth: '300px' }"
          />
          <a class="nav-link" href="/recipePage">
            <i class="bi bi-person-circle fs-1"></i>
          </a>
          <a @click="cerrarSesion" class="nav-link" href="/">
            <i class="bi bi-box-arrow-left fs-1"></i>
          </a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent2",
    methods:{
    cerrarSesion(){
      localStorage.removeItem('usuario');
      this.$router.push('/iniciarSesion');
    },
    redireccionarAlAgregar(){
      this.$router.push('/agregar');
    }
    }
  };
  </script>
  

  