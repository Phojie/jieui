<script setup lang="ts">
const currentPage = ref(1)
</script>

<template>
  <div class="flex overflow-auto">
    <NPagination
      v-model:page="currentPage"
      :total="100"
      show-edges
    />
  </div>
</template>
