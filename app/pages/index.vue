<template>
  <div class="bg-slate-200">

    <div class="h-screen w-80 grid grid-cols-1 mx-auto pt-10 content-around md:size-dvw md:h-dvh md:grid-rows-3 md:grid-cols-6 md:gap-4 md:ps-15 md:p-10">
      <!-- info -->
      <div class="md:col-span-2 md:p-2 max-w-90">
        <h1 class="font-[Sora] font-extrabold lowercase text-4xl">Yannelee Vera</h1>
        <p class="uppercase text-2xl font-[Inter] tracking-tight leading-6">desarrollo front end & graficas redes sociales</p>
        <div class="flex justify-start items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="size-4">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <p class="font-ligth"> disponible para trabajar</p>
        </div>
      </div>
      <!-- circles -->
      <div class="size-70 max-h-full w-full md:row-span-3 md:col-span-4 md:h-full">
        <BgCircles class="border border-blue-300/40 rounded-xl"/>
      </div>
      <!-- menu -->
      <div class="md:col-span-2 md:row-span-2 md:place-self-end md:justify-self-start md:p-2">
        <Button nombre="Sobre Mi" arrow="upRight"/>
        <Button nombre="Proyectos" arrow="upRight" />
        <Button nombre="Contacto" arrow="upRight" />
      </div>
  
    </div>
  </div>
</template>

<script>

</script>