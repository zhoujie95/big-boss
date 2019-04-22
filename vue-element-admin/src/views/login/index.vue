<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title') }}
        </h3>
        <lang-select class="set-language" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            :key="passwordType"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="$t('login.password')"
            name="password"
            auto-complete="on"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
        {{ $t('login.logIn') }}95登陆
      </el-button>

      <div style="position:relative">
        <div class="tips">
          <span>{{ $t('login.username') }} : admin</span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">
            {{ $t('login.username') }} : editor
          </span>
          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
        </div>

        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          {{ $t('login.thirdparty') }}
        </el-button>
      </div>
    </el-form>

    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t('login.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import SocialSign from './socialSignin'
import {mapActions} from 'vuex'

export default {
  name: 'Login',
  components: { LangSelect, SocialSign },
  data() {
    //用户名的自定义校验
    const validateUsername = (rule, value, callback) => {
<<<<<<< HEAD
      if (!value) {
        callback(new Error('Please enter the correct user name哇哇哇'))
=======
<<<<<<< HEAD
      if (!value) {
        callback(new Error('Please enter the correct user name哇哇哇'))
=======
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
>>>>>>> 582fbaa7cf6bba16c63e05848f8a1176099eeda6
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'chenmanjie',
        password: 'Chenmanjie123!'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
 
    ...mapActions({
      login:'user/login'
    }),
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
<<<<<<< HEAD
=======
=======
    ...mapActions({
      login:'user/login',
      generateRoutes: 'permission/generateRoutes'
    }),
>>>>>>> 582fbaa7cf6bba16c63e05848f8a1176099eeda6
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    //点击登陆按钮
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        //vaild:登陆from表单做的验证,通过执行下边
        if (valid) {
          //console.log(this.loginForm)
          this.loading = true
<<<<<<< HEAD
          //请求登陆接口  返回token
          //调用仓库里的user/login方法，放用户名密码发过去，请求接口，接受返回值（返回值就是函数里return出来的请求接口的返回值）
=======
<<<<<<< HEAD
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
          let res = await this.login(this.loginForm)
          console.log('login res...',res)
          if (res.code == 1){
            this.$router.push({ path: this.redirect || '/' })
          }
<<<<<<< HEAD
           this.loading = false

<<<<<<< HEAD
=======
          this.loading = false
      
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
=======
          //console.log('login...',res)
          // this.$store.dispatch('user/login', this.loginForm)
          //   .then(() => {
          //     this.$router.push({ path: this.redirect || '/' })
          //     this.loading = false
          //   })
          //   .catch(() => {
          //     this.loading = false
          //   })
=======
          let res=await this.login(this.loginForm)
          if (res.code == 1){
            await this.generateRoutes([]);
            this.$router.push({ path: this.redirect || '/' })
          }
          //this.loading = false
      
>>>>>>> 582fbaa7cf6bba16c63e05848f8a1176099eeda6
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
    
=======
>>>>>>> 582fbaa7cf6bba16c63e05848f8a1176099eeda6
>>>>>>> 4c6d52aeea6c0daf3c88dcb4cf919d5abe08402f
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
