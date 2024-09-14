<template>
  <MiNavbar/>
  <div class="text-center mt-5 pt-5">
    <img :src="imgLogo" alt="Logo de la aplicación" />
    <h1
      class="m-5"
      v-bind:style="{ color: '#BC6C25', 'font-weight': 'bolder' }"
    >
      ¡Más de 1,000 recetas de cocina!
    </h1>

    <section>
      <div class="p-5" :style="{ backgroundColor: '#DDA15E', color: 'white' }">
        <h1>¿No sabes qué cocinar?</h1>
        <h3 class="mb-5">
          Recetas fáciles y deliciosas para cada día de la semana
        </h3>
        <div
          class="d-flex flex-column flex-md-row col-12 col-xl-10 align-items-center justify-content-between m-auto"
        >
          <div v-for="item in tarjetasComidaRand" :key="item.id" class="card" :style="{ width: '18rem', height: '18rem' }">
            <img :src="item.img" class="card-img-top img-fluid" :style="{ height: '12rem' }" alt="..."/>
            <div class="card-body">
              <h5 class="card-title" style="color: black">{{ item.nombre }}</h5>
              <div class="d-flex justify-content-end align-items-center">
                <i class="bi bi-heart" style="color: black"></i>
                <i class="bi bi-bookmark" style="color: black"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="p-5">
        <h1 class="my-5" style="color: #924400">¡Publica todas tus creaciones!</h1>
      </div>
    </section>

    <section>
      <div class="p-5 mb-5" style="background-color: #DDA15E;">
        <h2 style="color: white">Encontraras todo tipo de comidas</h2>
      </div>

      <div class="d-flex flex-column flex-md-row justify-content-between col-12 col-xl-10 m-auto">
        <div class="" v-for="item2 in tarjetasCircularesRand" :key="item2.id">
          <img :src="item2.img" :style="{ width: '15rem', height: '15rem', borderRadius: '50%' }" alt="">
          <h3>{{item2.nombre}}</h3>
        </div>
      </div>
    </section>

    <section>
      <div class="p-3 mt-5" style="background-color: #DDA15E;">
        <h1 style="color: white">Y mucho más...</h1>
      </div>

      <div class="p-5">
        <h3>¡Regístrate gratis!</h3>
        <h4>Publica, comenta y guarda tus recetas favoritas.</h4>
        <button type="button" class="btn btn-primary p-2" :style="{backgroundColor: '#BC4025', fontWeight: 'bold', width: '10rem', border: '0'}">Registrarse</button>
      </div>
    </section>

    <MiFooter/>
  </div>
</template>

<script>
import cards from "../../public/json/cards.json";
import cardsCirculares from "../../public/json/cardsCirculares.json";
import MiFooter from "./FooterComponent.vue";
import MiNavbar from "./NavbarComponent.vue";

export default {
  name: "BienvenidaComponent",
  data() {
    return {
      imgLogo: require("../images/logo.png"),
      tarjetasComida: cards,
      tarjetasCirculares: cardsCirculares,
      tarjetasCircularesRand: [],
      tarjetasComidaRand: []
    };
  },
  methods: {

    //Este método permite desordenar un array y retornar una cantidad determinada de elementos de ese arreglo
    obtenerDatosAleatorios(array, cantidad){
      let arrayCopia = array.slice();

      for (let i = arrayCopia.length-1; i> 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = arrayCopia[i];
        arrayCopia[i] = arrayCopia[j];
        arrayCopia[j] = temp;
      }
      return arrayCopia.slice(0, cantidad);
    }
  },
  mounted(){
    this.tarjetasCircularesRand = this.obtenerDatosAleatorios(this.tarjetasCirculares, 3);
    this.tarjetasComidaRand = this.obtenerDatosAleatorios(this.tarjetasComida, 3)
  },
  components: {
    MiFooter,
    MiNavbar
  }
};
</script>
