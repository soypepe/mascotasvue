export default {
  sumarMascota: (state, { especie, mascota }) => {
    state[especie].push(mascota)
  }
}
