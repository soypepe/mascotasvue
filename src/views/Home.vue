<template>
  <div class='home'>
    <h1>Adopte a un amigo</h1>
    <button class="btn btn-primary" @click="ocultarFormMascota">Agregar Mascota</button>
    <b-form @submit.prevent="handlerEnviar" v-if="mostrarFormMascota">
      <b-form-group id="input-group-2" label="Nombre mascota:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="datosForm.name"
          required
          placeholder="Nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Especie:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="datosForm.especie"
          :options="['gatos', 'perros']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Edad:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="datosForm.age"
          type="number"
          required
          placeholder="Edad"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Agregar</b-button>
      <b-button type="reset" variant="danger">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      mostrarFormMascota: false,
      datosForm: {
        especie: null,
        name: '',
        age: 0
      }
    }
  },
  methods: {
    ...mapActions([
      'agregarMascota'
    ]),
    ocultarFormMascota () {
      this.mostrarFormMascota = !this.mostrarFormMascota
    },
    handlerEnviar () {
      const { especie, name, age } = this.datosForm
      const payload = {
        especie,
        mascota: {
          name,
          age
        }
      }
      this.agregarMascota(payload)

      this.datosForm = {
        especie: null,
        name: '',
        age: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'conteoAnimales',
      'getGatos'
    ])
  }
}
</script>
