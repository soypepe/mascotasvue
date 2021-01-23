export default {
  conteoAnimales: (state) => {
    return state.gatos.length + state.perros.length
  },
  getGatos: (state) => {
    return state.mascotas.filter((mascotas) => {
      return mascotas.species === 'cat'
    })
  }
}
