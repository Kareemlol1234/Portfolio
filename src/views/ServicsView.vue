<template>
    <div>
        <HeroCom img_src="imgs/Hero.jpg" name="#Services"/>
        <ServicesCom/>
    </div>
</template>


<script>
import HeroCom from '@/components/HeroCom.vue';
import ServicesCom from '@/components/ServicesCom.vue';
export default {
    name: "ServicsView",
    components:{
        HeroCom,
        ServicesCom
    }
}
</script>