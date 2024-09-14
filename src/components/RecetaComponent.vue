<template>
  <NavbarComponent2 />
  <div class="container my-5">
    <div v-if="receta">
      <h1 class="text-center">{{ receta.nombre }}</h1>
    
      <div class="d-flex justify-content-center">
          <img :src="receta.img" alt="" :style="{ width: '60rem', height: '30rem'}" />
      </div>

      <div class="d-flex justify-content-center m-3">
        <div class="m-3">
          <p>
            <b>{{ receta.descripcion }}</b>
          </p>
          <p><b>Tiempo de preparación: </b>{{ receta.tiempoPreparacion }}</p>
          <p><b>Porciones: </b>{{ receta.porciones }}</p>
          <p><b>Tipo: </b>{{ receta.categoria }}</p>
          <p><b>Dificultad: </b>{{ receta.dificultad}}</p>
          <p><b>Ingredientes:</b></p>
          <ul>
            <li v-for="(ingrediente, index) in receta.ingredientes" :key="index">
                {{ ingrediente }}
            </li>
          </ul>
          <p><b>Instrucciones:</b></p>
          <ul>
            <li v-for="(paso, index) in receta.pasos" :key="index">
              {{ paso }}
            </li>
          </ul>
          <p><b>Notas adicionales: </b>{{ receta.notas }}</p>

        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent2 from "./NavbarComponent2.vue";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: "RecetaComponent",
  data() {
    return {
      receta: null,
    };
  },
  components: {
    NavbarComponent2,
    FooterComponent,
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    },
  },
  mounted() {
    const jsonData = JSON.parse(this.$route.query.data);
    this.receta = jsonData.find((item) => item.idReceta === this.id);
  },
};
</script>
