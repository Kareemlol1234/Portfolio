<template>
    <div>
        <HeroCom img_src="imgs/Hero.jpg" name="#Skills" />
        <div class="container">
            <SkillsCom/>
        </div>
    </div>
</template>


<script>
import HeroCom from '@/components/HeroCom.vue';
import SkillsCom from '@/components/SkillsCom.vue';
export default {
    name: "SkillsView",
    components:{
        HeroCom,
        SkillsCom
    }
}
</script>