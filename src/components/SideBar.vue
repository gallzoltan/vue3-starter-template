<script setup>
  import { ref } from 'vue'

  const props =  defineProps({
    items: Array
  });
  const is_expanded = ref(true);
  const ToggleMenu = () => { 
    is_expanded.value = !is_expanded.value 
  }
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <span class="font-bold">BM</span><span>ÖGF</span>
    </div>
    
    <div class="menu-toggle-wrap">
      <span class="text">
        <i :class="`${is_expanded ? 'pi pi-angle-double-left' : 'pi pi-angle-double-right'}`"  @click="ToggleMenu"></i>
      </span>
		</div>

    <h3>Menü</h3>
    <div class="menu">
      <RouterLink v-for="item in items" :key="item.id" :to="item.link" class="menu-item">
        <span class="menu-icon"><i :class="item.icon"></i></span>
        <span class="text">{{ item.text }}</span>
      </RouterLink>
		</div>

    <div class="flex"></div>

    <div class="menu">
			<!-- <router-link to="/settings" class="menu-item">
        <span class="menu-icon"><i class="pi pi-cog"></i></span>
				<span class="text">Settings</span>
			</router-link> -->
		</div>

  </aside>
</template>

<style lang="scss" scoped>
  .pi{
    font-size: 1.5rem
  }
</style>