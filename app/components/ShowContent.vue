<template>
  <div class="flex flex-col p-4 md:p-10 gap-y-2 row-span-5  md:row-span-6 md:col-span-4 border border-gray-400 bg-blue-100/40 rounded-md overflow-auto overscroll-none">
    <div class="text-xs md:text-sm lg:text-lg text-justify">{{ resumen }}</div>
    <!-- img web -->
    <div class="bg-bg/50 p-2 rounded">
      <p class="text-sm font-ligth text-center"> Contenido Creado</p>
      <div class="flex gap-2 overflow-x-auto">
        <img v-for="d in design" :key="d" :src="d" class="w-5/6 lg:w-5/8 aspect-square object-cover object-top-left">
        
      </div>
    </div>
    <div class="text-xs md:text-sm lg:text-lg text-justify basis-2/3">{{ como }}</div>
  </div>
</template>

<script setup>

const props = defineProps({ 
  resumen:'resumen',
  como:'como',
  design:'design',
})


</script>