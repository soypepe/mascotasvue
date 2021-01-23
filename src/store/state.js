import gatos from '@/data/gatos'
import perros from '@/data/perros'

export default {
  gatos,
  perros,
  mascotas: [...gatos, ...perros]
}
