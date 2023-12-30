import { Alpine as AlpineType } from 'alpinejs'

declare global {
  var Alpine: AlpineType
}

window.Alpine = Alpine

Alpine.start()