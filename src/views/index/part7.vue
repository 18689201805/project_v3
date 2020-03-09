<template>
  <div>
    <div>
        <img style="width:100%" src="../../assets/images/wpcn.jpg" alt="">
        <img style="width:100%" src="../../assets/images/ptitle5.jpg" alt="">
    </div>
    
   <div style="width:92%" class="part_seven">
      <div>
        <div class="part6-img">
          <a href="">
            <img style="width:100%;" src="../../assets/images/part6/20190404_5ca5a1c1c8fd5.jpg" alt="">
          </a>
        </div>
        <div class="part6-img-a2">
          <a href="">
            <img style="width:100%" src="../../assets/images/part6/20190404_5ca5a1eb106c7.jpg" alt="">
          </a>
        </div>
      </div>
      <div>
        <div class="part6-img-a3">
          <a href="">
            <img style="width:100%" src="../../assets/images/part6/20190404_5ca5a205d1e6d.jpg" alt="">
          </a>
        </div>
        <div class="part6-img-a4">
           <a href="">
            <img style="width:100%;width:419px;" src="../../assets/images/part6/20190404_5ca5a21db357c.jpg" alt="">
          </a>
        </div>
        <div class="part6-img-a5">
          <a href="">
            <img style="width:100%" src="../../assets/images/part6/20190404_5ca5a230c7156.jpg" alt="">
          </a>
        </div>
      </div>
    </div>

    <div>
        <img style="width:100%;" src="../../assets/images/ptitle6.jpg" alt="">
    </div>
    <div style="width:90%;" class="part-last">
        <a href="" style="color:black">
            <div class="media border-bottom mt-3">
                <img class="part-last-img" src="../../assets/images/part7/20190402_5ca2e28178b2d.jpg" alt="">
                <div class="media-body ml-4">
                    <h5 class="part-last-text">摩洛哥旅行小贴士</h5>
                    <p class="part-last-p">摩洛哥旅行小贴士</p>
                </div>
            </div>
        </a>
        <a href="" style="color:black">
            <div class="media border-bottom mt-3">
                <img class="part-last-img" src="../../assets/images/part7/20190402_5ca2e2ba9c403.jpg" alt="">
                <div class="media-body ml-4">
                    <h5 class="part-last-text">实用攻略：日本旅行签证！！！！！！！！</h5>
                    <p class="part-last-p">日本旅行的签证办理有一定的复杂程度，希望这些签证相关的知识可以给各位小伙伴提供参考。</p>
                </div>
            </div>
        </a>
        <a href="" style="color:black">
            <div class="media border-bottom mt-3">
                <img class="part-last-img" src="../../assets/images/part7/20190411_5caf0b3bbd73e.jpg" alt="">
                <div class="media-body ml-4">
                    <h5 class="part-last-text">春季花海拍摄</h5>
                    <p class="part-last-p">春季国内大部分景点都是不冷不热的，各色花朵也都争相开放，最适合旅行，也是婚纱旅拍的黄金时期，恰好今天刚调整的五一小长假，可以连休4天，莫要辜负好时光哦。</p>
                </div>
            </div>
        </a>
    </div>

    <div class="gif-img">
      <a href="#">
        <img style="width: 13rem;" src="../../assets/images/xf.565fda9.gif" alt="">
      </a>
    </div>
    <!-- <a href="# " class="right ">
        返回顶部
    </a> -->

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.part_seven{
  width:75rem;
  margin-left:5rem;
  margin-right: 5rem;
}

.part6-img {
    width: 47.5rem;
    margin-right:10px;
    float:left;
    transition:all 0.5s;
    
}
.part6-img-a2{
    width: 430px;
    float:left; 
    
    transition:all 0.5s;
}
 
.part6-img-a3,.part6-img-a4 {
    width: 442px;
    float:left;
    margin-top:10px;
    margin-right:10px;
    transition:all 0.5s;
    
}
.part6-img-a4{
  margin-right:0px;
}

.part6-img-a5 {
    width: 304px;
    margin-top:10px;
    float:left;
    transition:all 0.5s;
}
.part6-img:hover,
.part6-img-a2:hover,
.part6-img-a3:hover,
.part6-img-a4:hover,
.part6-img-a5:hover{
		box-shadow: 4px 5px 15px 0 rgba(0, 0, 0, 0.3);
		transform: translate(0,-10px);
}

.part-last {
    margin-left: 5.3125rem;
    margin-bottom: 20px;
}

.part-last-img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
}

.part-last-text {
    font-size: 18px;
    font-weight: bold;
}

.part-last-p {
    font-size: 14px;
    color: #888;
}

.gif-img {
    width: 12.5rem;
    height: 12.5rem;
    position: fixed;
    top: 28.125rem;
    right: 0.5rem;
    z-index: 98;
}
</style>