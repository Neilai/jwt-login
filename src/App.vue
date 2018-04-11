<template>
  <div>
    <router-link to="/login" v-show="!isLogin" >请登录</router-link>
    <router-link to="/main">个人中心</router-link>
    <a v-show="isLogin" @click="Logout">退出</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
      }
  },
  methods:{
      Logout(){
        this.$store.commit("Logout");
        this.$router.push({path: '/login'});
      }
  },
  computed:{
      isLogin(){
          return this.$store.state.token?true:false;
      }
  }
}
</script>

<style>

</style>
