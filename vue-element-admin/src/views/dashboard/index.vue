<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import {mapState } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapState({
      userInfo:state=>state.user.userInfo
    })
  },
  created() {
    //console.log(this.userInfo.identity_text)
    if (this.userInfo.identity_text=='管理员') {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
<style>
.ting{
  width: 100%;
  height: 50px;
}
h1{
  margin-top: 180px;
  margin-left: 200px;
}
</style>

