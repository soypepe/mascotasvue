<template>
  <div>
    <!-- <h1>Gatos para adoptar</h1> -->
    <TablaMascotas
      especie='gatos'
      :mascotas='gatos'
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
      'gatos'
    ])
  }
}
</script>
