<template>
   <eladd
    :titles='title'
    :data='data'
    :handeltype='handeltype'
   ></eladd>
</template>
<script>
import eladd from './eladd'
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return{
       title:'',
       data:[],
       handeltype:''
    }
  },
  computed:{
    ...mapState({
       allquestions:state=>state.addexam.allquestions
    })
  },
  components:{
    eladd
  },
  methods:{
     ...mapActions({
        getAllQues:'addexam/getAllQues'
     }),
  },
  mounted(){
      this.title=this.$route.name==='examAdd'?'查看试题':'编辑试题'
      this.handeltype=this.$route.name==='examAdd'?'add':'update'
      this.data=this.$route.name==='examAdd'? this.data:this.allquestions.filter(item=>item.questions_id===this.$route.query.id)
  }
}
</script>
<style scoped lang="scss">
   @import "../examAdd.scss";
</style>
