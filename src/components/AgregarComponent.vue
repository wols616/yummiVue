<template>
  <NavbarComponent2 />
  <div class="container my-2 p-3" style="background-color: #fefae0">
    <div class="container mb-5" style="background-color: white">
      <div
        id="containerSubirImagenNoBorrar"
        class="text-center d-flex flex-column"
      >
        <div id="containerSubirImagen">
          <i
            @click="subirImagen"
            class="bi bi-card-image"
            style="font-size: 10rem"
          ></i>

          <h4>Agrega una fotografía</h4>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style="display: none"
          />
        </div>
        <img
          v-if="imagenPreviewURL"
          :src="imagenPreviewURL"
          class="w-50 h-25 m-auto"
          alt=""
        />
      </div>
    </div>
    <div class="container text-center mb-3">
      <input
        type="text"
        placeholder="Título: Crema de espárragos"
        class="m-auto w-100"
        style="border: 0"
        v-model="titulo"
      />
    </div>
    <div class="container text-center mb-3">
      <input
        type="text"
        placeholder="Descripción: Fácil crema de espárragos con solo 5 ingredientes"
        class="m-auto w-100"
        style="border: 0"
        v-model="descripcion"
      />
    </div>
    <div
      class="container d-flex flex-column flex-md-row justify-content-between text-center mb-3"
    >
      <div class="p-5 mb-3" style="background-color: white">
        <h5>Ingredientes/utensilios</h5>
        <div ref="ingredientesContainer">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Ingrediente/Utensilio"
              v-model="nuevoIngrediente"
            />
          </div>
        </div>
        <button @click="agregarNuevoItem('Ingrediente/Utensilio')">
          Agregar Nuevo
        </button>
      </div>

      <div class="p-5 mb-3" style="background-color: white">
        <h5>Pasos</h5>
        <div ref="pasosContainer">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Paso"
              v-model="nuevoPaso"
            />
          </div>
        </div>
        <button @click="agregarNuevoItem('Paso')">Agregar Nuevo</button>
      </div>
    </div>
    <div class="container mt-4">
      <form>
        <div class="row mb-3">
          <div class="col-md-4">
            <label for="categorias" class="form-label">Categoría:</label>
            <select
              name="categorias"
              id="categorias"
              v-model="categoriaSeleccionada"
              class="form-select"
            >
              <option
                v-for="categoria in categorias"
                :key="categoria"
                :value="categoria"
              >
                {{ categoria }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="tipos" class="form-label">Tipo:</label>
            <select
              name="tipos"
              id="tipos"
              v-model="tipoSeleccionado"
              class="form-select"
            >
              <option v-for="tipo in tipos" :key="tipo" :value="tipo">
                {{ tipo }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="dificultad" class="form-label">Dificultad:</label>
            <select
              name="dificultad"
              id="dificultad"
              v-model="dificultadSeleccionada"
              class="form-select"
            >
              <option
                v-for="dificultad in dificultad"
                :key="dificultad"
                :value="dificultad"
              >
                {{ dificultad }}
              </option>
            </select>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label for="tiempoPreparacion" class="form-label"
              >Tiempo de preparación:</label
            >
            <input
              type="number"
              id="tiempoPreparacion"
              placeholder="Minutos:"
              class="form-control"
              v-model="tiempoPreparacion"
            />
          </div>

          <div class="col-md-6">
            <label for="porciones" class="form-label">Porciones:</label>
            <input
              type="number"
              id="porciones"
              placeholder="Porciones:"
              class="form-control"
              v-model="porciones"
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="notas" class="form-label">Notas:</label>
          <input type="text" id="notas" class="form-control" v-model="notas" />
        </div>
      </form>
    </div>
    <div class="container">
      <button @click="publicar">Publicar</button>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent2 from "./NavbarComponent2.vue";
import FooterComponent from "./FooterComponent.vue";
import axios from "axios";

export default {
  name: "AgregarComponent",
  components: {
    NavbarComponent2,
    FooterComponent,
  },
  data() {
    return {
      imagenSeleccionada: null, // Para almacenar la imagen seleccionada
      imagenURL: null, // Para almacenar la URL de la imagen subida
      imagenPreviewURL: null,
      btnEliminar: null,
      titulo: "",
      descripcion: "",
      nuevoIngrediente: "",
      nuevoPaso: "",
      ingredientes: [],
      pasos: [],
      categorias: ["Mexicana", "Salvadoreña"],
      dificultad: ["Baja", "Media", "Baja"],
      categoriaSeleccionada: "",
      dificultadSeleccionada: "",
      tipos: ["Bebida", "Entrada", "Postre"],
      tipoSeleccionado: "",
      tiempoPreparacion: 0,
      porciones: 0,
      notas: ""
    };
  },
  methods: {
    agregarNuevoItem(item) {
      const container = this.$refs.ingredientesContainer;
      const containerPasos = this.$refs.pasosContainer;

      const div = document.createElement("div");
      div.classList.add("input-group", "mb-3");

      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("form-control", "eliminarHoverInput");
      input.placeholder = item;

      const span = document.createElement("span");
      span.classList.add("input-group-text");
      const i = document.createElement("i");
      i.classList.add("bi", "bi-trash3-fill", "eliminarHover");
      i.style.color = "red";

      i.addEventListener("click", () => {
        div.remove();
        this.actualizarArreglos();
      });
      span.appendChild(i);
      div.appendChild(input);
      div.appendChild(span);

      if (item === "Paso") {
        containerPasos.appendChild(div);
      } else {
        container.appendChild(div);
      }
    },

    subirImagen() {
      const fileInput = document.getElementById("fileInput");
      fileInput.click();

      if (!this.btnEliminar) {
        this.btnEliminar = document.createElement("button");
        this.btnEliminar.textContent = "EliminarImagen";
        this.btnEliminar.classList.add("btnEliminar");
        this.btnEliminar.addEventListener("click", () => {
          document.getElementById("containerSubirImagen").style.display =
            "block";
          this.btnEliminar.remove();
          this.btnEliminar = null;
          this.imagenSeleccionada = null;
          this.imagenPreviewURL = null;

          fileInput.value = "";
        });
        document
          .getElementById("containerSubirImagenNoBorrar")
          .appendChild(this.btnEliminar);
      }

      document.getElementById("containerSubirImagen").style.display = "none";
    },
    async publicar() {
      this.actualizarArreglos();

      if (this.imagenSeleccionada) {
        const apiKey = "cbb1ae761bbe35f0d3d439c8053eaa30"; // Reemplaza con tu API Key de ImgBB
        const formData = new FormData();
        formData.append("image", this.imagenSeleccionada);

        try{
          const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
            method: "POST",
            body: formData
          });
          const data = await response.json();
          
          if (data.success){
            this.imagenURL = data.data.url;
            console.log("Imagen Subida con éxito", this.imagenURL);
            await this.agregarReceta();
          } else{
            console.error("Error al subir la imagen:", data.error.message);
          }
        }catch(error){
          console.error("Error al subir la imagen", error);
        } 
      }
      else{
        alert("Por favor, selecciona una imagen antes de publicar");
      }
      //this.agregarReceta();
      
    },
    async agregarReceta(){
      let tipoMinuscula = this.tipoSeleccionado.toLowerCase();
      try{
        const nuevaReceta = {
          nombre : this.titulo,
          img : this.imagenURL,
          descripcion : this.descripcion,
          pasos : this.pasos,
          tiempoPreparacion : this.tiempoPreparacion,
          porciones : this.porciones,
          ingredientes : this.ingredientes,
          categoria : this.categoriaSeleccionada,
          dificultad : this.dificultadSeleccionada,
          notas : this.notas,
          tipo : tipoMinuscula 
        };
        const response = await axios.post("http://localhost:3000/api/comida", nuevaReceta);
        
        if(response.data.success){
          console.log('Receta agregada: ', response.data.receta)
        }
        else{
          console.log('Receta no agregada')
        }

      }catch(error){
        console.error("Error al hacer la solicitud:", error);
      }
    },
    actualizarArreglos() {
      this.ingredientes = [];
      this.pasos = [];

      const ingredientesInputs =
        this.$refs.ingredientesContainer.querySelectorAll("input");
      ingredientesInputs.forEach((input) => {
        const value = input.value.trim();
        if (value) {
          this.ingredientes.push(value);
        }
      });

      const pasosInputs = this.$refs.pasosContainer.querySelectorAll("input");
      pasosInputs.forEach((input) => {
        const value = input.value.trim();
        if (value) {
          this.pasos.push(value);
        }
      });
      console.log(this.ingredientes);
      console.log(this.pasos);
    },
  },
  mounted() {
    document.getElementById("fileInput").addEventListener("change", (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          this.imagenSeleccionada = file;
          console.log("Imagen seleccionada:", this.imagenSeleccionada);
          this.imagenPreviewURL = URL.createObjectURL(file);
        } else {
          alert("Por favor, selecciona solo imágenes");
        }
      }
    });
  },
};
</script>

<style>
.eliminarHover:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(1.5);
}
.eliminarHover:hover + .eliminarHoverInput {
  background-color: blue;
}

.btnEliminar {
  background-color: white;
  color: red;
  font-weight: bold;
}
</style>
