<template>
  <div class="flex flex-col p-4 md:p-10 gap-y-2 row-span-5  md:row-span-6 md:col-span-4 border border-gray-400 bg-blue-100/40 rounded-md overflow-auto overscroll-none">
    <div class="text-xs md:text-sm lg:text-lg text-justify">{{ resumen }}</div>
    <!-- img web -->
    <div v-for="w in web" :key="w" class="bg-bg/50 p-2 rounded">
      <p class="text-sm font-ligth text-center"> Vista Web</p>
      <div v-if="w.endsWith('png' || 'jpg')">
        <img :src="w" class="object-cover">
      </div>
      <div v-else>
        <video autoplay controls :src="w"></video>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
        <div :class="[mobile.length !== 0 ? 'basis-2/3' :'basis-full', 'text-xs md:text-sm lg:text-lg text-justify']">{{ como }}</div>
        <div v-if="mobile.length !== 0" class="bg-bg/50 p-2 rounded basis-1/3">
        <p class="text-sm font-ligth text-center"> Vista Móvil</p>
          <img :src="mobile" alt="" class="object-fit">
        </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({ 
  resumen:'resumen', 
  como:'como',
  web:'web', 
  mobile:'mobile'
})


</script>