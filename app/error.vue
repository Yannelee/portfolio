<template>
  <div class="w-full h-screen content-center ">
    <BgCircles class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1" />
    <div class="text-center text-4xl font-bold mx-3 max-w-full  uppercase">
      <h1>¡Ups! Algo salió mal ({{ error.statusCode }})</h1>
      <div class="flex items-center justify-center mt-10 hover:underline hover:italic gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5 md:size-8" viewBox="0 0 16 16" >
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>  
        <NuxtLink to="/" class="text-2xl">Volver a Inicio</NuxtLink>
      </div>
    </div>

    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'; 

const props = defineProps<{ error: NuxtError }>()
</script>
