<template>
  <div class="h-screen w-80 grid grid-cols-1 mx-auto p-4 pt-10 md:size-dvw md:h-dvh md:grid-rows-3 md:grid-cols-6 md:ps-15  md:p-10 md:gap-5">
    <!-- title -->
    <div class="row-span-1 md:col-span-2 md:row-span-3 place-self-center text-left md:place-self-end md:justify-self-end p-2 md:text-right md:w-60">
      <h1 class="font-bold uppercase text-xl">Proyectos</h1>
      <p class="md:font-extralight lowercase">SELECCIÓN DE PROYECTOS REALIZADOS 🗂️</p>
      <div>
        <a href="https://github.com/Yannelee" target="_blank" class="text-xs lowercase mt-2 gap-2 text-right flex items-center md:mt-5 md:justify-end hover:italic hover:underline hover:text-color1"> VER MÁS en
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
      </div>
    </div>
    <!-- info -->
    <div class="flex flex-col p-4 md:p-10 gap-y-2 row-span-5 md:row-span-3 md:col-span-4 border border-gray-400 bg-blue-100/40 rounded-md overflow-auto overscroll-none">
      <div v-for="p in proyects" :key="p" class="">
        <FlipCard :proyecto=p.proyecto :name="p.name" :info=p.info :tipo=p.tipo :img=p.img :resumen="p.descripcion.resumen"/>
      </div>
      <!-- <BgCircles class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1" /> -->
    </div>
  </div>
</template>

<script setup>
import{ proyects } from '~/assets/datos/proyectos.json'


/* let proyects =[
  {
    proyecto:'Academia Vida Tenis',
    info:'PAGINA WEB INFORMATIVA DE UNA ACADEMIA DE TENIS DESARROLLADA EN NUXT 3 Y TAILWINDCSS. SINGLE PAGE APLICATION.VERSIÓN FINAL EN HOSTING FIREBASE CON CDN CLOUDFLARE.',
    tipo:'Freelance',
    role:['Diseñadora web', 'Desarrolladora Front-End'],
    img:'/_nuxt/assets/img/roommates.png'
  },
  {
    proyecto:'Voucher',
    info:'APLICACION WEB QUE ENVÍA VOUCHER DE PAGO DE GASTOS COMUNES POR CORREO ELECTRÓNICO. UTILIZACIÓN DE NUXT 3, TAILWINDCSS, PINIA, NODEMAILER, FIREBASE FIRESTORE. VERSIÓN FINAL ALOJADA EN NETLIFY.',
    tipo:'Freelance',
    role:['Diseñadora web', 'Desarrolladora Web'],
    img:'/_nuxt/assets/img/roommates.png'
  },
  {
    proyecto:'EcoNaturals',
    info:'asdsad',
    tipo:'Freelance',
    role:['Diseñadora de Gráficas'],
    img:'~/app/assets/img/roommates.png'
  },
  {
    proyecto:'Biocrom',
    info:'asdsada',
    tipo:'Freelance',
    role:['Diseñadora de Gráficas', 'Rebranding'],
    img:'/_nuxt/assets/img/bancoSolar.png'
  },
  {
    proyecto:'Roommates',
    info:'APLICACION WEB PARA REGISTRAR LOS GASTOS COMPARTIDOS DE ROOMMATES. UTILIZACION DE File System PARA MANEJO DE ARCHIVOS, ManejO errores, CONSTRUCCIÓN DE una API RESTful, ManejO DE códigos de estado HTTP, UTILIZACION DE NODEMAILER',
    tipo:'bootcamp',
    role:['Desarrolladora Web'],
    img:'/_nuxt/assets/img/roommates.png'
  },
  {
    proyecto:'Banco Solar',
    info:'APLICACION WEB QUE SIMULA TRANSACCIONES BANCARIAS, CONECTADA A UNA BASE DE DATOS POSTGRESQL A TRAVES DE NODE, REALIZACIÓN DE CONSULTAS DML Y TCL. CONSTRUCCIÓN DE API RESTful EN EL SERVIDOR CON LOS DATOS ALMACENADOS EN POSTGRESQL.',
    tipo:'bootcamp',
    role:['Desarrolladora Web'],
    img:'/_nuxt/assets/img/roommates.png'
  },
] */

</script>