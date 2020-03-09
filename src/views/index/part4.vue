<template>
  <div>
    <div class="border-bottom border-warning">
      <img style="width:100%" src="../../assets/images/banner/ptitle.jpg" alt=" ">
    </div>
    <div id="pag" class="mt-3 ">
      <video id="v1" poster="../../assets/images/banner/balidao.png" src="../../assets/images/banner/kyoto.mp4" width="100% " height="auto ">
      </video>
      <a id="ctrl1">
          <img src="../../assets/images/video/close.c4a8439.png" alt="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
   #pag{
            position:relative;
        }
        #ctrl1{
            position:absolute;
            top:35%;
            left:56%;
            margin-left:-100px;
            margin-right:-100px;
        }
        #ctrl1 img{
            width:120px;
            height:120px;
        }
</style>