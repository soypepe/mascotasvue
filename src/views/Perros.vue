<template>
<div>
  <TablaMascotas
    especie='perros'
    :mascotas='perros'
  />
</div>
</template>

<script>
import { mapState } from 'vuex'
import TablaMascotas from '@/components/TablaMascotas'
export default {
  components: {
    TablaMascotas
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'perros'
    ])
  }
}
</script>
