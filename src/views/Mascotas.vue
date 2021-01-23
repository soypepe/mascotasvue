<template>
  <div>
    <h1>{{animales.name}} ({{$route.params.especie}})</h1>
    <p>Edad: {{animales.age}} years old</p> -->
    <p>Raza: {{animales.breed}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animales: {}
    }
  },
  computed: {
    ...mapState([
      'gatos',
      'perros'
    ])
  },
  mounted () {
    const animales = this[this.$route.params.especie][this.$route.params.id]
    this.animales = animales
  }
}
</script>
