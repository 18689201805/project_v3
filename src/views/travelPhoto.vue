<template>
  <div>
    <div style="margin-top:100px;"></div>
    <img style="width:100%" src="../assets/images/dateDetail/20190425_5cc16d9f05b64.jpg" alt="">
    <div class="text-center header-Part2">
        <img style="width:45%" src="../assets/images/dateDetail/name.e7945d4.png" alt="">
        <p class="header-text1 mt-5">
            <span style="color:#706c66">CUSTOMER PHOTOS</span>
            <span style="color:#706c66" class="pl-4">全球客片</span>
        </p>
        <hr style="margin-top:20px;margin-bottom:20px;" class="hr">
        <p class="header-text2 pb-4">全球合法拍摄保障-旅途安枕无忧</p>
    </div>
    <div>
      <div class="container mt-5">
        <ul class=" d-flex list-unstyled justify-content-around">
            <li><router-link to="/travelPhotoList" class="index-nav">二月份第一期</router-link></li>
            <li><a href="javascript:;" class="index-nav">二月份第二期</a></li>
            <li><a href="javascript:;" class="index-nav">二月份第三期</a></li>
            <li><a href="javascript:;" class="index-nav">二月份第四期</a></li>
            <li><a href="javascript:;" class="index-nav">三月份第一期</a></li>
            <li><a href="javascript:;" class="index-nav">三月份第二期</a></li>
            <li><a href="javascript:;" class="index-nav">三月份第三期</a></li>
            <li><a href="javascript:;" class="index-nav">三月份第四期</a></li>
        </ul>
         <hr style="margin-top:20px;margin-bottom:20px;" class="hr">
      </div>
    </div>
    <div style="padding:0;margin:0 auto;width:90%;">
      <ul class="li">
            <li>
              <router-link to="/travelPhotoList">
                <div class="product">
                  <img src="../assets/images/dateDetail/20190401_5ca1e4ab0084e.jpg" alt="">
                  <div class="product_bgcolor"></div>
                  <p style="font-size:18px;">二月①期</p>
                  <p>7ROSE</p>
                  <p>TIME:2020-01-01</p>
                </div>
              </router-link>
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/dateDetail/20190401_5ca1e3cf72b95.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">二月②期</p>
                <p>7ROSE</p>
                <p>TIME:2020-01-15</p>
              </div>			
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/dateDetail/20190401_5ca1e33c2232e.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">二月③期</p>
                <p>7ROSE</p>
                <p>TIME:2020-02-04</p>
              </div>			
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/dateDetail/20190401_5ca1e25609d76.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">二月④期</p>
                <p>7ROSE</p>
                <p>TIME:2019-02-20</p>
              </div>	
            </li>
            <li>
              <div class="product">
                <img src="../assets/images/dateDetail/20190401_5ca1ea5d0503a.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">三月①期</p>
                <p>7ROSE</p>
                <p>TIME:2020-03-01</p>
              </div>
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/dateDetail/20190404_5ca58bf67a360.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">三月②期</p>
                <p>7ROSE</p>
                <p>TIME:2020-03-09</p>
              </div>			
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/productDetail/20190404_5ca58c0d15f2f.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">三月③期</p>
                <p>7ROSE</p>
                <p>TIME:2020-03-016</p>
              </div>			
            </li>
            <li>
              <div class=" detail product">
                <img src="../assets/images/productDetail/20190404_5ca58c35cec30.jpg" alt="">
                <div class="product_bgcolor"></div>
                <p style="font-size:18px;">三月④期</p>
                <p>7ROSE</p>
                <p>TIME:2020-03-023</p>
              </div>
            </li>
      </ul>
      <div style="clear:both"></div>
      <div style="margin-top:80px;"></div>
	  </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .index-nav {
    width: 130px;
    height: 40px;
    display: inline-block;
    border: 1px solid #fde8c5;
    border-radius: 10px;
    font-size: 18px;
    color: black;
    text-align: center;
    line-height: 40px;
}

.index-nav:hover {
    background: #f7bc58;
    color: white;
}
ul{list-style:none; }
  .li{display:flex;flex-wrap:wrap;}
	.product{
		width:288px;
		height:471px;
		margin-left:10px;
		margin-bottom:10px;
		overflow:hidden;
		position:relative;
		transition:all 0.5s;	
	}
	.product_bgcolor{
		height:405px;
		width:100%;
		background: rgba(0, 0, 0, 0.3);
		position:absolute;
		top:-100%;
		left:0;
		transition:all 0.5s;
	}
	.product:hover{
		box-shadow: 4px 5px 15px 0 rgba(0, 0, 0, 0.3);
		transform: translate(0,-10px);
	}
	.product:hover .product_bgcolor{
		top:0;
	}
	p{
		margin:0;padding:0;
		font-size:14px;
		color:#333;
	}
</style>