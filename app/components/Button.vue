<template>
  <div class="flex w-full md:items-center hover:italic tracking-tighter hover:text-color1">
    <!-- arrow left -->
    <svg v-if="arrow == 'left'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5 md:size-8" viewBox="0 0 16 16" >
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    </svg>

    <NuxtLink :to="`${ nombre.toLowerCase().replace(/\s/g, '') }`" :class="[arrow !== 'upRight' ? 'text-sm mx-1' :'text-4xl font-bold mx-3', 'max-w-full  uppercase hover:italic md:text-2xl lg:text-4xl']">{{ nombre }}</NuxtLink>
    <!-- arrow up-right -->
    <svg v-if="arrow == 'upRight'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
    <!-- arrow right -->
    <svg v-if="arrow == 'right'" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-5 md:size-8" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ nombre: string, arrow:string }>()

</script>