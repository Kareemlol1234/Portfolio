<template>
  <div class="about">
    <h1>About</h1>
    <HeroCom img_src="imgs/Hero.jpg" name="#About"/>
  <AboutCom/>
  </div>
</template>


<script>
import AboutCom from '@/components/AboutCom.vue';
import HeroCom from '@/components/HeroCom.vue';
export default {
  name: "AboutView",
  components:{
    AboutCom,
    HeroCom
  }
}
</script>