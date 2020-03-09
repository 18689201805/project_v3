<template>
  <div>
    <div style="margin-top:100px;"></div>
    <img style="width:100%" src="../assets/images/20190404_5ca5bc18932b3.jpg" alt="">
    <div class="text-center header-Part2">
        <img style="width:45%" src="../assets/images/video/name.e7945d4.png" alt="">
        <p class="header-text1 mt-5">
            <span>TRUE PRAISE</span>
            <span class="pl-4">真实好评</span>
        </p>
        <hr class="hr">
        <p class="header-text2 pb-4">全球全渠道真实你想看到的客户好评</p>
    </div>
    <div class="container ">
        <div class="reviews mt-5 re-lfloat">
            <p>
                <span class="text1">想念琥珀的拥抱</span>
                <span class="text1 text2">TIME:2019-12-18 </span>
            </p>
            <p class="text3">
                摄影师很敬业，化妆师雨森也很不错（没想到男人也可以化妆画的这么好）。来七彩玫瑰拍照 最困难的其实是选片 都想要 7rose真的不错 朋友都说要来呢。
            </p>
            <table></table>
            <div class="square"></div>
        </div>
        <div class="reviews re-float mt-5 ">
            <p>
                <span class="text1">开飞机的飞飞</span>
                <span class="text1 text2">TIME:2019-04-01 </span>
            </p>
            <p class="text3">
                7rose全球旅拍，全球蜜月旅拍领导品牌，@七彩玫瑰全球旅拍@7rose摄影师小杰@化妆我是人很的（化妆师安琪）。感谢几天的辛苦付出。期待精修大片。
            </p>
            <table></table>
            <div class="square"></div>
        </div>
        <div class="reviews re-lfloat mt-4">
            <p>
                <span class="text1">MISS——CL</span>
                <span class="text1 text2 ml">TIME:2019-12-21  </span>
            </p>
            <p class="text3">
                @7rose小雪 @七彩玫瑰摄影师老曹 照片终于精修出炉啦。特此感谢7rose帅气的摄影师曹Sir（我默默关注你很久了）美美的化妆师婷婷，还有一直催我选片的后期东子 正在跟我聊天的设计师小强[哈哈]、小老乡韩雨。巴厘岛之行虽然拍摄匆忙，下次专门来旅游在和你们相见。感谢大家！
            </p>
            <table></table>
            <div class="square"></div>
        </div>
        <div class="reviews mt-4 re-float">
            <p>
                <span class="text1">矛盾児_梦</span>
                <span class="text1 text2 ml ">TIME:2020-01-01  </span>
            </p>
            <p class="text3">
                棒棒的团队服务，@七彩玫瑰摄影师阿杰，你那么搞怪、为了拍照都把鞋子贡献给了大海、光脚丫子也是健步如飞的节奏……这些你妈妈造吗？[偷笑][偷笑]@7rose化妆师安妮 也是蛮贴心，剩下的就是慢慢的期待精修大片了。
            </p>
            <table></table>
            <div class="square"></div>
        </div>
        <div style="clear:both"></div>
    </div>
    <div class="container">
        <div class="page-div">
            <ul class="pagination">
                <li class="page-item disabled "><a href="" class="page-link">上一页</a></li>
                <li class="page-item active "><a href="" class="page-link">1</a></li>
                <li class="page-item"><a href="" class="page-link">2</a></li>
                <li class="page-item"><a href="" class="page-link">3</a></li>
                <li class="page-item"><a href="" class="page-link">下一页</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .container .re-float{
            float:right;
        }
        .container .re-lfloat{
            float:left;
        }
        .reviews {
            width: 410px;
            background: #f2f3f4;
            border-radius: 10px;
            padding: 20px;
            position: relative;
        }
        
        .reviews .text1 {
            font-size: 16px;
            color: black;
            display: inline-block;
            text-align: left;
        }
        
        .reviews .text2 {
            margin-left: 8rem;
        }
        
        .reviews .text3 {
            margin-top: 10px;
            font-size: 13px;
            color: #888;
        }
        
        .square {
            margin: -104px -50px;
            width: 0px;
            height: 0px;
            border: 10px solid transparent;
            border-right: 20px solid #f2f3f4;
            transform: rotate(3deg);
            position: absolute;
        }
       .reviews .ml{
            margin-left:160px;
       }
       .page-div{
           width:300px;
           position: relative;
           top:50%;
           left:38%;
           margin-top:100px;
           margin-bottom:60px;
       }
       .page {
            position: relative;
            top: 1rem;
            left: 40%;
        }
        /* .page .page-1 {
            position: absolute;
            top: 0;
            left: 50%;
        } */
        
        .page-link {
            border-radius: 5px;
        }
        
        .page-item+.page-item {
            margin-left: 0.55rem;
        }
</style>
