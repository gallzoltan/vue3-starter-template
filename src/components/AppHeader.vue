<script setup>
  import { ref } from 'vue';
  import Toolbar from 'primevue/toolbar';
  import Button from 'primevue/button';
</script>

<template>
  <header>
    <Toolbar class="test">
      <template #end>
        <p class="text-lg w-10">Gáll Zoltán</p>
        <Button icon="pi pi-arrow-left" class="p-button-rounded p-button-text" />
        <Button icon="pi pi-sign-out" class="p-button-rounded p-button-danger p-button-text" />
      </template>
    </Toolbar>
  </header>
</template>

<style lang="scss" scoped>

  ::v-deep(.p-toolbar) {
    border-radius: 0;
  }

</style>