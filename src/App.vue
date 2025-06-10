<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tagesschrift&display=swap" rel="stylesheet"> 
  <link rel="stylesheet" href="css/main.css">

  <NavCom/>
  
  <router-view/>
</template>



<script>

import NavCom from '@/components/NavCom.vue';

export default {
  name: "App",
  components:{
    NavCom
  }
}
</script>
