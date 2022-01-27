<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(this.$store.state.count)
    }
  }
}
</script>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <router-view />
</template>

<style>

</style>
