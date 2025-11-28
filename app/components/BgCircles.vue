<template>
  <div class="gradient-bg overflow-hidden h-full w-full bg-linear-40/30 from-bg to-bg1">
    <div class="gradiente-container noise w-full h-full blur-xl filter-[url('#')]">
        <div class="g1 absolute size-80 rounded-full bg-radial from-slate-500/80 from-0% to-color1/0 to-50%  mix-blend-hard-light top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-[90%+400px] animate-[spin_25s_ease_infinite]"></div>
        <div class="g2 absolute size-150 rounded-full bg-radial from-color2/80 from-0% to-color2/0 to-50%  mix-blend-hard-light top-1/2 -left-1/2 transform translate-x-1/2 -translate-y-2 origin-[30%-100px] animate-[spin_30s_ease_infinite]"></div>
        <div class="g3 absolute size-150 rounded-full bg-radial from-color3/70 from-0% to-color3/0 to-50%  mix-blend-hard-light top-1/2 left-1/7 transform -translate-x-1/8 -translate-y-1/16 animate-[bounce_10s_ease_infinite]"></div>
        <div class="g4 absolute size-150 rounded-full bg-radial from-color4 from-0% to-color4/0 to-50%  mix-blend-hard-light top-1/6 left-1/2 transform -translate-x-1/16 -translate-y-1/8 origin-[30%+500px] animate-[spin_20s_ease_infinite]"></div>
        <div class="g5 absolute size-150 rounded-full bg-radial from-color5/70 from-0% to-color5/0 to-50%  mix-blend-hard-light top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/4 animate-[bounce_15s_ease_infinite]"></div>
        <div class="interactiveDot absolute rounded-full bg-radial from-interactive/80 from-0% to-interactive/0 to-50% w-full h-full -top-50 -left-50 mix-blend-hard-light opacity-75"></div>
<!--         <div class="interactive absolute size-80 rounded-full bg-radial from-color-interactive/80 from-0% to-color-interactive/0 to-50% w-full h-full top-[-50%] left-[-50%] mix-blend-hard-light opacity-75"></div>
 -->    </div>
  </div>
</template>

<script setup>
  

</script>