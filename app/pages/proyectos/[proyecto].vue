<template>
  <div class="h-screen w-80 grid grid-cols-1 mx-auto p-4 pt-10 md:size-dvw md:h-dvh md:grid-rows-6 md:grid-cols-6 md:ps-15  md:p-10 md:gap-5">
    <!-- title & rol-->
    <div class="row-span-1 md:col-span-2 md:row-span-6 place-self-center justify-self-start px-2 text-left md:place-self-end md:justify-self-end md:text-right md:max-w-80">
      <h1 class="font-[Sora] font-bold uppercase text-xl md:text-2xl lg:text-3xl mb-2 md:mb-5 text-wrap">{{ selected.name }}</h1>
      <div class="mb-2">
        <p class="font-bold mb-2">Rol</p>
        <ul>
          <li v-for="rol in selected.info" :key="rol" class="list-disc list-inside text-sm leading-4 md:text-right md:list-none">{{ rol }}</li>
        </ul>
      </div>
      <div v-if="selected.github !== ''" class="mb-2">
        <p  class="font-bold">Github</p>
        <a :href="selected.github"  target="_blank" class="underline text-sm md:text-right text-wrap hover:text-color1">Link a {{ selected.name }}</a>
      </div>
      <div v-if="selected.link !== ''"  class="mb-2">
        <p class="font-bold">Link</p>
        <a :href="selected.link"  target="_blank" class="underline text-sm md:text-right hover:text-color1">{{ selected.link }}</a>
      </div>
    </div>
    <!-- descripcion -->
    <ShowDesign v-if="selected.content.graphic == 0" :resumen="selected.descripcion.resumen" :como="selected.descripcion.como" :web="selected.content.dev.web" :mobile="selected.content.dev.mobile" />
    <ShowContent v-else :resumen="selected.descripcion.resumen" :como="selected.descripcion.como" :design="selected.content.graphic" />
    <!-- botones -->
    <div class="row-span-1 md:-row-start-1 md:col-span-6 md:row-span-1 px-2">
      <div class="flex justify-between mt-4">
        <Button v-if="index !== 0" :nombre="proyects[index-1].name"  arrow="left" class="justify-start" />
        <Button v-if="index+1 < proyects.length" :nombre="proyects[index+1].name"  arrow="right" class="justify-end"  />
      </div>
    </div>
  </div>
</template>

<script setup>
import {proyects} from '~/assets/datos/proyectos.json'
const proyectName = useRoute().params.proyecto

let selected = proyects.find(({proyecto}) => proyecto == proyectName)
let index = proyects.findIndex(p => p.proyecto == proyectName)

</script>