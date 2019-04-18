<template>
    <div class="edittest">
        <p class="createedit" @click="aa">创建试卷</p>
    </div>
</template>
<script>

import {mapState} from "vuex";

export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState("testmanager",{
            addflag:state=>state.addflag
        })
    },
    methods:{
         aa(){
            let obj = this.$route.params;
            this.$store.dispatch("testmanager/addtest",obj);
            this.$router.push({path:"testlist"});
        }
    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style lang="scss">
    .edittest{
        width: 100%;
        margin-top:64px;
        height: 800px;
        background: #f0f2f5;
        box-sizing: border-box;
        overflow-y: auto;
        .createedit{
            width: 200px;
            height:50px;
            background:blue;
            color:white;
        }
    }
</style>