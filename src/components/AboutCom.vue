<template>
  <div class="About">
    <h1>About</h1>
    <div class="container">
      <div class="row "> 

        <div class="col-lg-4 col-md-6 col-12">
          <div class="card custom-card">
            <div class="icon">
              <div class="img">
                <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="Portfolio Project">
              </div>
            </div>
            <div class="info">
              <h1>موقع شخصي</h1>
              <p>صممت وبرمجت موقع شخصي باستخدام HTML وCSS وVue.js، يحتوي على أقسام عني، مهاراتي، وأعمالي السابقة مع تصميم بسيط وجذاب.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="card custom-card">
            <div class="icon">
              <div class="img">
                <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="Responsive Design">
              </div>
            </div>
            <div class="info">
              <h1>تصميم متجاوب</h1>
              <p>أنشأت واجهات متجاوبة باستخدام CSS Grid وFlexbox وBootstrap لتتناسب مع جميع الشاشات مثل الموبايل والتابلت واللابتوب.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="card custom-card">
            <div class="icon">
              <div class="img">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="Animations">
              </div>
            </div>
            <div class="info">
              <h1>تحريك وتفاعل</h1>
              <p>أضفت تأثيرات انتقال وتفاعل (Hover, Scroll Animations) باستخدام CSS وJavaScript لتحسين تجربة المستخدم وإضفاء طابع حيوي على الواجهة.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.About {
  padding-top: 160px;
  background-color: #f7f7f7;
}
.About h1{
  text-align: center;
  margin-bottom: 50px;
}
.custom-card {
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease;
  padding: 30px 20px;
  min-height: 550px;
}

.custom-card:hover {
  transform: translateY(-10px);
}
.img{
    padding-bottom: 70px;
}
.img img{
    width: 160px;
    height: 160px;
    border-radius: 50%;
}
.info{
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.info p{
    font-size: 18px;
}

</style>

<script>
export default {
  name: "AboutCom"
}
</script>
