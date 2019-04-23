<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang='scss'>
*{
  margin:0;
  padding:0;
  list-style: none;
  box-sizing: border-box;
} 

#app{
     width:100%;
     height:900px;
     position: relative;
     .main-container{
       display: flex;
       flex-direction: column;
      .app-main{
        flex:1;
      }
     }
}
</style>

