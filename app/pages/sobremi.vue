<template>
  <div class="h-screen w-80 grid grid-cols-1 mx-auto p-4 pt-10 md:size-dvw md:h-dvh md:grid-rows-3 md:grid-cols-6 md:ps-15 md:p-10 md:gap-5">
    <!-- title -->
    <div class="row-span-1 md:col-span-2 md:row-span-3 place-self-center text-left md:place-self-end md:justify-self-end p-2 md:text-right md:w-60">
      <h1 class="font-bold uppercase text-xl">Sobre mí</h1>
      <p class="lowercase md:font-extralight">Conoce un poquito más sobre mi viaje y cómo llegué a este camino 🛤️</p>
    </div>
    <!-- info -->
    <div class="w-full h-full p-2 row-span-5 text-left md:p-10 md:row-span-3 md:col-span-4 border border-gray-400 bg-blue-100/40 rounded-md overflow-auto overscroll-none content-center">
      <div class="flex flex-col md:flex-row mb-5 items-center text-center md:text-left">
        <p class="font-[Sora] text-lg md:basis-2/3 md:text-2xl lg:text-5xl font-bold hyphens-auto">{{presentation}}</p>
        <img src="~/assets/img/yannelee.png" alt="" class="md:basis-1/3 p-2 md:size-1/3">
      </div>
      <p class="mb-5 text-justify px-3 md:px-0 md:text-left">{{aboutMe}}</p>
      <p class="font-bold mb-5">Experiencia:</p>
      <ul v-for="list in experience" :key="list" class="list-disc ps-4">
        <li>{{list}}</li>
      </ul>
      <Button nombre="Mi Cv" class="mt-10" arrow="right" />
    </div>
  </div>
</template>

<script setup>

let presentation =  "Soy Yannelee, diseñadora y desarrolladora web, creadora y eterna aprendiz."
let aboutMe =  "Desde siempre me ha intrigado cómo la tecnología y el diseño se fusionan para solucionar problemas reales. Mi impulso por experimentar y aprender me llevó de la medicina veterinaria —donde entrené el trabajo en equipo, la empatía y la resiliencia— al fascinante universo del desarrollo web y el diseño digital. He aprendido desde cero, incursionando en herramientas como Figma, Illustrator y Photoshop mientras me convertía en desarrolladora Front-End. Me apasiona crear interfaces responsivas que no solo se vean bien, sino que faciliten la vida de sus usuarios."
let experience = ["Vue.js / Nuxt3 / JavaScript / HTML / CSS / TailwindCSS", 
  "Diseño de interfaces y gráficos digitales (Figma, Illustrator, Photoshop, After Effects)", 
  "Solución de problemas complejos en entornos colaborativos y bajo presión",
   "Migración profesional y crecimiento constante a través del aprendizaje continuo."]


</script>