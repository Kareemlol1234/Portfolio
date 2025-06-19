<template>
  <link rel="stylesheet" href="css/Home.css">
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
          <a href="https://www.facebook.com/profile.php?id=61577462731094&sk=about_work_and_education"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/kareem-diaa-4a2626370/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <button><router-link to="/about">Learn More</router-link></button>
      </div>
    </div>
  </div>
  <AboutCom/>
  <SkillsCom/>
  <ServicesCom/>
  <ContactCom/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import AboutCom from '@/components/AboutCom.vue';
import SkillsCom from '@/components/SkillsCom.vue';
import ContactCom from '@/components/ContactCom.vue';
import ServicesCom from '@/components/ServicesCom.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AboutCom,
    SkillsCom,
    ContactCom,
    ServicesCom
  }
}
</script>


