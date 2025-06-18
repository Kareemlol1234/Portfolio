<template>
  <div class="fotter">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 fotter_info">
          <div class="texts">
            <h1>Kareem</h1>
            <p>Front-End Developer with responsive design.</p>
          </div>
          <div class="social-links-fotter">
            <a href="https://github.com/Kareemlol1234" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://wa.me/201006721385" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61577462731094&sk=about_work_and_education" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://discordapp.com/users/777644730484916245" target="_blank"><i class="fa-brands fa-discord"></i></a>
          </div>
        </div>

        <div class="col-12 col-md-6 fotter_links">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/SkillsView">Skills</router-link></li>
            <li><router-link to="/ServicsView">Services</router-link></li>
            <li><router-link to="/ContactView">Contact</router-link></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-12 explain">
          <h6>Skilled in HTML, CSS, JavaScript & Vue.js. I build modern and fast websites.</h6>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h4>Contact: "	kareem123456work@gmail.com" or "01006721385"</h4>
        </div>
      </div>
    </div>
    <h5>2024 Copyrights @Kareem.dev</h5>
  </div>
</template>

<script>
export default {
  name: "FotterCom"
}
</script>

<style>
.fotter {
  margin-top: 50px;
  background-color: #000;
  color: #fff;
  padding-top: 20px;
}

.fotter h5 {
  margin: 0;
}
.explain{
    margin-bottom: 20px;
}
.fotter_links ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
.fotter_links li {
  margin: 5px 0;
  text-align: center;
}
@media (max-width: 575.98px) {
  .fotter_links li {
      text-align: left;
  }
}
.fotter_links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.fotter_links a:hover {
  color: #00bcd4;
}

.social-links-fotter a {
  margin-right: 10px;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links-fotter a:hover {
  color: #00bcd4;
}
</style>
