<template>
  <div class="dashboard-container">
    <div class="ting"></div>
    <component :is="currentRole" />
    <!-- <h1>北京八维考试系统</h1> -->
  </div>
</template>

<script>
import { mapGetters,mapState} from 'vuex'
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
    ...mapGetters([
      'roles'
    ]),
    ...mapState({
      identity_text:state=>state.user.userInfo.identity_text
    })
  },
  created() {
    if (this.identity_text!=='管理员') {
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

