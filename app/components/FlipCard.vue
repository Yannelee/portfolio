<template>
  <div>
    <NuxtLink :to="`/proyectos/${proyecto}`">
    <div class="relative h-50 w-full">
      <div class="absolute w-full h-full transform-3d transition-all duration-500 ease-in hover:rotate-y-180">
        <div class="absolute flex flex-col justify-around w-full h-full p-4 border border-gray-500/70 backface-hidden text-left rounded">
          <!-- front -->
          <div class="mt-3">
            <h1 class="font-[Sora] font-bold uppercase md:text-2xl lg:text-3xl mb-2">{{ name }}</h1>
          </div>
        </div>
        <!-- back -->
        
        <div class="flex flex-col justify-between p-2 absolute w-full h-full backface-hidden rotate-y-180 rounded border border-gray-500/50">
            <div class="text-xs md:text-sm lg:text-lg">{{ resumen }}</div>
            <div>
              <div class="flex items-baseline gap-2 font-light text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" :class="[tipo == 'Freelance' ? 'text-purple-600' :'text-orange-600','bi bi-arrow-right-circle-fill']" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg> 
                <p>Proyecto {{ tipo }}</p>
              </div>
              <div v-for="r in info" :key="r" class="flex items-baseline gap-2 font-light text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" :class="[tipo == 'Freelance' ? 'text-purple-600' :'text-orange-600','bi bi-arrow-right-circle-fill']" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg> 
                <p >{{ r }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup >

const props = defineProps({ 
  name: 'name',
  proyecto:'proyecto',
  resumen:'resumen',
  info:'info',
  img:'img',
  tipo:'tipo'
})

</script>