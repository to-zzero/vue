<template>
  <div class="loading">
   数据请求
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  name: 'loading',
  data () {
    return {

    }
  },
  mounted(){
    this.ok(this.jump_to);
    console.log("loading")
  },
  computed:{
    ...mapState([
      "state"
    ])
  },
  methods:{
    ...mapActions([
      "ok"
    ]),
    jump_to(){
      this.$router.push({path:this.$route.query.form})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
