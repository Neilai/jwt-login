<template>
  <div>
    你好呀{{user}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
