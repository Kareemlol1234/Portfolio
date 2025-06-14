<template>
  <link rel="stylesheet" href="css/Hero.css">
  <div class="BaseHero" :style="{ backgroundImage: `url(${img_src})` }">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: "HeroCom",
  props: ['img_src','name']
}
</script>

<style>

</style>
