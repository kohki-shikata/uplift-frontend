import Alpine from 'alpinejs'

interface Window {
  Alpine: any
}
declare var window: Window

window.Alpine = Alpine

Alpine.start()

