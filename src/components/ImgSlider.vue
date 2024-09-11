<template>
  <div class="d-flex flex-wrap justify-content-between mx-5">
    <i class="bi bi-arrow-left-circle my-auto" :style="{fontSize: '2rem'}" @click="cambiarImagenesAtras"></i>
    <div v-for="(item, index) in tarjetaComidaRand" :key="index" class="image-container">
      <transition name="grow-fade" mode="out-in">
        <img
          :key="indice + index"
          v-if="showImages"
          :src="item.img"
          alt=""
          class="grow-fade-image"
          :class="{ 'initial-load': isInitialLoad }"
          @click="abrirReceta(item.id, tarjetaComida)"
        />
      </transition>
    </div>
    <i class="bi bi-arrow-right-circle my-auto" :style="{fontSize: '2rem'}" @click="cambiarImagenes"></i>
  </div>
</template>

<script>
export default {
  name: "BienvenidaComponent",
  data() {
    return {
      tarjetaComida: this.jsonDato,
      tarjetaComidaRand: [],
      indice: 0,
      showImages: false,
      isInitialLoad: true,
    };
  },
  methods: {
    obtenerImagenes(array, cantidad) {
      return array.slice(this.indice, this.indice + cantidad);
    },
    actualizarImagenes() {
      this.showImages = false;
      this.$nextTick(() => {
        this.tarjetaComidaRand = this.obtenerImagenes(this.tarjetaComida, 4);
        this.$nextTick(() => {
          this.showImages = true;
          if (this.isInitialLoad) {
            setTimeout(() => {
              this.isInitialLoad = false;
            }, 1000); // Ajusta este tiempo según la duración de tu animación
          }
        });
      });
    },
    cambiarImagenes() {
      if (this.indice + 4 < this.tarjetaComida.length) {
        this.indice += 4;
      } else {
        this.indice = 0;
      }
      this.actualizarImagenes();
    },
    cambiarImagenesAtras() {
      if (this.indice - 4 >= 0) {
        this.indice -= 4;
      } else {
        this.indice = Math.max(this.tarjetaComida.length - 4, 0);
      }
      this.actualizarImagenes();
    },
    abrirReceta(idReceta, json) {
      this.$router.push({
        name: 'RecetaComponent', params: {id: idReceta},
        query: {data: JSON.stringify(json)}
      });
    }
  },
  mounted() {
    this.actualizarImagenes();
  },
  props: {
    jsonDato: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.image-container {
  width: 100%;
  max-width: 15rem;
  height: 10rem;
  overflow: hidden;
  margin: 0.5rem;
}

.grow-fade-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grow-fade-enter-active,
.grow-fade-leave-active {
  transition: all 0.3s ease;
}

.grow-fade-enter-from,
.grow-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.grow-fade-enter-to,
.grow-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

@keyframes initialFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.initial-load {
  animation: initialFadeIn 1s ease-out;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
    align-items: center;
  }
  .bi-arrow-left-circle, .bi-arrow-right-circle {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .image-container {
    max-width: 12rem;
    height: 8rem;
  }
}
</style>
