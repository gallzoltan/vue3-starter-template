import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('SidebarStore', {
  state: () => ({
    items: [
      { id: 1, link: '/', text: 'Áttekintés', icon: 'pi pi-th-large' },
      // { id: 2, link: '/designation', text: 'Szignálás', icon: 'pi pi-check-square' },
      // { id: 3, link: '/workflow', text: 'Ügyintézés', icon: 'pi pi-wrench' },
      // { id: 4, link: '/maintenance', text: 'Karbantartás', icon: 'pi pi-wrench' }
    ]
  }),

  getters: {
    getItems: (state) => state.items
  }
})