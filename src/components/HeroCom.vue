<template>
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
.BaseHero {
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.BaseHero h1{
    color: #cfcfcf;
    font-size: 80px;
}
</style>
