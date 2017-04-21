<template>
  <div class="home">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './Header.vue'
  import vSidebar from './SideBar.vue'
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    },
    created () {
      //  alert(1)
    },
    components: {
      vHeader,
      vSidebar
    }
  }
</script>

<style lang="less" scoped>
  
</style>
