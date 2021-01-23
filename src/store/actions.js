export default {
  agregarMascota: ({ commit }, payload) => {
    console.log(payload)
    commit('sumarMascota', payload)
  }
}
