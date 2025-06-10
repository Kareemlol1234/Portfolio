<template>
  <div class="home" :style="{ backgroundImage: 'url(/imgs/Hero.jpg)' }">
    <div class="container">
      <div class="Home_info">
        <div class="title">
          <HelloWorld msg="I'M  Kareem"/>
          <h4 class="text-warning">Front-End Developer</h4>
        </div>
        <div class="social_media_icons">
          <a href="https://github.com/Kareemlol1234"><i class="fa-brands fa-github"></i></a>
          <a href="https://wa.me/201006721385"><i class="fa-brands fa-whatsapp"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href="https://discordapp.com/users/777644730484916245"><i class="fa-brands fa-discord"></i></a>
        </div>
        <button><router-link to="/AboutView">Learn More</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  background-color: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  width: 100%;
  height: 95vh;
}
.Home_info{
  padding-top: 250px;
  padding-left: 70px;
}
.Home_info .title h4{
 padding: 25px 0; 
 font-size: 35px;
}
.social_media_icons{
  width: 10%;
  display: flex;
  justify-content: space-between ;
  gap: 20px;
}
.social_media_icons i{
  font-size: 45px;
  gap: 8px;
  color: #cbcbcd;
  cursor: pointer;
  transition: 0.3s;
}
.social_media_icons .fa-whatsapp{
  color: #36cd1f;
}
.social_media_icons .fa-whatsapp:hover{
  color: #2c9d1b;
}
.social_media_icons .fa-facebook{
  color: #2427f4;
}
.social_media_icons .fa-facebook:hover{
  color: #191ccd;
}
.social_media_icons .fa-discord{
  color: #ffffffeb;
}
.social_media_icons .fa-discord:hover{
  color: #ffffffa7;
}
.social_media_icons .fa-github:hover{
  color: #a7a7ba;
}
.Home_info button{
  margin-top: 30px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 6px;
  font-size: 25px;
  background-color: #31f3eb;
  transition: 0.3s;
}
.Home_info button:hover{
  background-color: #20918e;
}
.Home_info button a{
  color: #000;
  text-decoration: none;
}
</style>
