<template>
  <div class="container">
    <h1>Registrarse</h1>
    <div>
      <input type="text" v-model="nombre" placeholder="Nombre" />
      <input type="text" v-model="apellido" placeholder="Apellido" />
    </div>
    <div>
      <input type="text" v-model="correo" placeholder="Correo Electrónico" />
      <input type="password" v-model="contrasena" placeholder="Contraseña" />
    </div>
    <button @click="guardarUsuarioNuevo">Registrarse</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistrarseComponent",
  data() {
    return {
      nombre: "",
      apellido: "",
      correo: "",
      contrasena: "",
    };
  },
  methods: {
    async guardarUsuarioNuevo() {
      if (!this.nombre || !this.apellido || !this.correo || !this.contrasena) {
        console.error("Todos los campos deben ser llenados");
        return;
      }

      try {
        const nuevoUsuario = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          contrasena: this.contrasena,
        };

        const response = await axios.post(
          "http://localhost:3000/api/usuarios",
          nuevoUsuario
        );

        if (response.data.success) {
          console.log("Usuario registrado:", response.data.usuario);
          // Aquí puedes agregar lógica adicional, como redireccionar al usuario o mostrar un mensaje de éxito
        } else {
          console.error("Error al registrar usuario:", response.data.message);
        }
      } catch (error) {
        console.error("Error al hacer la solicitud:", error);
      }
      this.$router.push('/iniciarSesion')
    },
  },
};
</script>
