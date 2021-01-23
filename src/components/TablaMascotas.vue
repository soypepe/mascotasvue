<template>
  <div>
    <h1>{{ especie }} para adoptar</h1>
    <b-table striped hover :items="mascotas">
      <template #cell(nombre)="data">
        <router-link
          :to="`/mascotas/gatos/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    especie: String,
    mascotas: Array
  }
}
</script>
