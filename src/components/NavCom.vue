<template>
    <link rel="stylesheet" href="css/Nav.css">
    <nav>
        <a href="#" class="logo">Kareem</a>

        <button class="menu-toggle" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
        </button>
        <ul :class="{open:isOpen}">
            <li><a href="#"><router-link to="/">Home</router-link></a></li>
            <li><a href="#"><router-link to="/about">About</router-link></a></li>
            <li><a href="#"><router-link to="/SkillsView">Skills</router-link></a></li>
            <li><a href="#"><router-link to="/ServicsView">Services</router-link></a></li>
            <li><a href="#"><router-link to="/ContactView">Contact</router-link></a></li>
        </ul>
    </nav>
</template>


<script>
export default {
    name: "NavCom",
    data(){
        return{
            isOpen: false
        };
    },
    methods: {
        toggleMenu(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>