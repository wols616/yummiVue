<template>
  <NavbarComponent2 />

  <div class="container my-5 p-5" style="background-color: #fefae0">
    <section>
      <h1>Trending</h1>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg"
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/01/03/20-carnitas-mexicanas.jpeg"
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.numar.net/wp-content/uploads/2022/10/plato-saludable.jpg"
              class="d-block w-75 m-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section>
      <h1>Bebidas</h1>
      <ImgSlider :json-dato="cardsBebidas"/>
      <h1>Postres</h1>
      <ImgSlider :json-dato="cardsPostres"/>
      <h1>Entradas</h1>
      <ImgSlider :json-dato="cardsEntradas"/>
    </section>
  </div>
  <FooterComponent/>
</template>

<script>
import NavbarComponent2 from "./NavbarComponent2.vue";
import ImgSlider from "./ImgSlider.vue";
import cardsBebidas from "../json/cardsBebidas.json";
import cardsPostres from "../json/cardsPostres.json";
import cardsEntradas from "../json/cardsEntradas.json";
import FooterComponent from "./FooterComponent.vue";

export default {
  name: "HomeComponent",
  data(){
    return{
      cardsBebidas,
      cardsPostres,
      cardsEntradas
    }
  },
  components: {
    NavbarComponent2,
    ImgSlider,
    FooterComponent
  },
};
</script>

<style>
.carousel-inner img {
  width: 100%;
  height: 50vh; 
  object-fit: cover; 
}

.carousel-control-prev,
.carousel-control-next {
  display: flex;
  align-items: center; 
  height: 100%; 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1); 
}
</style>
