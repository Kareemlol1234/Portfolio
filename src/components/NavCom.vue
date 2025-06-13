<template>
    <link rel="stylesheet" href="css/Nav.css">
    <nav>
        <a href="#" class="logo">Kareem</a>
        <ul>
            <li><a href="#"><router-link to="/">Home</router-link></a></li>
            <li><a href="#"><router-link to="/about">About</router-link></a></li>
            <li><a href="#"><router-link to="/SkillsView">Skills</router-link></a></li>
            <li><a href="#"><router-link to="/ServicsView">Servics</router-link></a></li>
            <li><a href="#"><router-link to="/ContactView">Contact</router-link></a></li>
            <li><a href="#"><select><router-link to="/BlogView"><option>Blog</option></router-link></select></a></li>
        </ul>
    </nav>
</template>


<script>
export default {
    name: "NavCom"
}
</script>