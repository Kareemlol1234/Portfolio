<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style scoped>
h1{
  color: #fff;
  font-size: 90px;
  letter-spacing: 2px;
}
</style>


