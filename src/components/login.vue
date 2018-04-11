<template>
<div>
  <form>
    用户名 :<br>
    <input type="text" name="username" v-model="name">
    <br>
    密码 :<br>
    <input type="text" name="password" v-model="pwd"><br>
    <input type="button" @click.enter="Login" value="登陆">
  </form>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        error: ''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods:{
      Login:function() {
        console.log(this.$store);
        this.$axios.get('/api/login/name/'+this.name+'/password/'+this.pwd).then((response) => {
            console.log(response.data.data.token);
            if(response.data) {
                console.log(response.data.data.token);
            this.$store.commit('Login', {"user":response.data.data.username,"token":response.data.data.token});
            this.$router.push({path: 'main'})
          }
       }).catch(e=>{
            console.log(e);
        })
      }
    },
    created(){
        if(this.$store.state.token)
          this.$router.push({path: 'main'});
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
