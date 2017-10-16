<template>
  <div class="wrap">
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  computed:{
      ...mapState([
        "navData"
      ])
  },
  created(){
    if(!this.navData){
      this.$router.push({name:'loading',query:{
        form:"/index"
      }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
