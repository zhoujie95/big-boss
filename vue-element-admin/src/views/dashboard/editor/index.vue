<template>
  <div class="dashboard-editor-container">
    <div class="clearfix">
      <pan-thumb :image="userInfo.avatar"/>
      <div class="info-container">
        <el-button
          type="primary"
          icon="upload"
          style="position: absolute;bottom:100px;margin-left:10px;"
          @click="imagecropperShow=true"
        >Change Avatar</el-button>
      </div>
    </div>
    <div>
      <image-cropper
        v-show="imagecropperShow"
        :key="imagecropperKey"
        :width="300"
        :height="300"
        url="http://123.206.55.50:11000/upload"
        lang-type="en"
        @close="close"
        @crop-upload-success="cropSuccess"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters,mapState,mapActions } from "vuex";
import PanThumb from "@/components/PanThumb";
import GithubCorner from "@/components/GithubCorner";
import ImageCropper from "@/components/ImageCropper";
export default {
  name: "DashboardEditor",
  components: { PanThumb, GithubCorner, ImageCropper },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0
    };
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles","userInfo"])
  },
  methods: {
    ...mapActions({
        updateuser:'user/updateuser',
        getInfo:'user/getInfo'
    }),
   async cropSuccess(resData) {
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
      this.image = resData[0].path;
      //console.log(this.userInfo)
     await this.updateuser({
        user_id:this.userInfo.user_id,
        avatar:this.image,
        user_name:this.userInfo.user_name
      }).then(res=>{
         if(res.code===1){
           this.getInfo()
         }
      })
    },
    close() {
      this.imagecropperShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  height: 900px;
  min-height: 100vh;
  padding: 50px 60px 0px;
  margin-top: 64px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
