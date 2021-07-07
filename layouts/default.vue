<template>
  <div>
    
    <Navbar v-if=this.$auth.loggedIn />
    <Nuxt />
  </div>
</template>

<style>
  @import '../assets/styles/style.css';
</style>
