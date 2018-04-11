<template>
  <div class="main">
    <div class="tab">
      <div class="tab-item" v-show="!isLogin"><router-link to="/login"  >请登录</router-link></div>
      <div class="tab-item"><router-link to="/main">个人中心</router-link></div>
      <div class="tab-item" v-show="isLogin"><a  @click="Logout">退出</a></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
  .tab{

    height: 44px;
    /*line-height: 53px;*/
  }
  .tab-item {
    float:right;
    padding:3px 15px;
    margin:5px;
    background-color: aqua;
    text-align: center
  }
  .tab-item a{
    text-decoration: none;
    cursor: pointer;
    /*color:black;*/
  }
  .main{
    margin:auto;
    width: 400px;
  }
  .content{
    margin-top:10px;
  }

</style>
