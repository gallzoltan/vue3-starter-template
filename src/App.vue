<script setup>
  import { RouterView } from 'vue-router'
  import SideBar from './components/SideBar.vue';
  import AppHeader from './components/AppHeader.vue';
  import { useSidebarStore } from '@/stores/SidebarStore';

  const store = useSidebarStore();
</script>

<template>
  <div class="layout-wrapper">
    <SideBar :items="store.getItems" />    
    <main> 
      <AppHeader />    
      <RouterView />
    </main>
  </div>
</template>
