<template>
  <p>
    home
  </p>
  <!-- <ul>
    <li>
      <a href="/" @click="goHome">Home</a>
      <a href="/about" @click="goAbout">About</a>
    </li>
  </ul> -->
  <!-- <router-view class="view two" name="a"></router-view> -->
</template>

<script>
  import routes from '../routes'
  import about from './hello.vue'

  export default {
    // props: {
    //   href: String,
    //   required: true
    // },
    computed: {
      isActive:function () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
