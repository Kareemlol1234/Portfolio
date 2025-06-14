<template>
    <div>   
        <HeroCom img_src="imgs/Hero.jpg" name="#Contact"/>
        <ContactCom/>
    </div>
</template>


<script>
import HeroCom from '@/components/HeroCom.vue';
import ContactCom from '@/components/ContactCom.vue';
export default {
    name:"ContactView",
    components:{
        ContactCom,
        HeroCom
    }
}
</script>