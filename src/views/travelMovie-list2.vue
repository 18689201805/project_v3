<template>
  <div>
    <div style="margin-top:100px;"></div>
        <img style="width:100%" src="../assets/images/video/20190425_5cc16cd95febc.jpg" alt="">
    <div class="text-center header-Part2">
        <img style="width:45%" src="../assets/images/video/name.e7945d4.png" alt="">
        <p class="header-text1 mt-5">
            <span>MICRO FILMS</span>
            <span class="pl-4">旅程动态影像记录</span>
        </p>
        <hr class="hr">
        <p class="header-text2 pb-4">在全球风景中记录和参与你的每一个笑容</p>
    </div>
    <div style="width:90%" class="movie">
        <div id="pag5" class="pt-5 pb-5 bd">
            <video id="v3" controls poster="../assets/images/video/part3/yp.jpg" src="../assets/images/video/part3/yp.mp4" width="100%" height="auto"></video>
            <a id="ctrl">
                <img src="../assets/images/video/close.c4a8439.png" alt="">
            </a>
        </div>
    </div>
    <div class="container">
        <div class="page p-4">
            <ul class="pagination">
                <li class="page-item ">
                  <button>
                    <router-link to="travelMovie-list1">上一页</router-link>
                  </button>
                </li>
                <li class="page-item ">
                  <button>
                    <router-link to="travelMovie">1</router-link>
                  </button>
                </li>
                <li class="page-item">
                    <button>
                        <router-link to="travelMovie-list1">2</router-link>
                    </button>
                    
                </li>
                <li class="page-item active">
                        <router-link to="travelMovie-list2">3</router-link>
                </li>
                <li class="page-item disabled">
                        <router-link to="travelMovie-list2">下一页</router-link>
                    
                </li>
            </ul>
        </div>
    </div>
    
  </div>
</template>
<script>
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.css';
// export default {
//   data(){
//       return{}
//   },
//   mounted(){
//      new Swiper ('.swiper-container', {
//         slidesPerView: 3,
//         spaceBetween: 50,
//         loop: true, // 循环模式选项
//         //导航按钮
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         //自动轮播
//         autoplay: {
//             delay: 5000, //控制时间
//             disableOnInteraction: true,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: '.swiper-pagination', //点标记
//             dynamicBullets: true,
//             dynamicMainBullets: 2,
//             clickable: true,
//         },
//   })        
//   }
// }
</script>
<style scoped>
 .swiper-container {
      width: 90%;
    }
 .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    .page {
            width:40rem;
            position: relative;
            top: 50%;
            left:35%;
            
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
        #pag5{
            position:relative;
        }
        #ctrl{
            position:absolute;
            top:35%;
            left:56%;
            margin-left:-100px;
            margin-right:-100px;
        }
        #ctrl img{
            width:120px;
            height:120px;
        }

        /* .header-Part2 {
    padding-top: 6rem;
    border-bottom: 1px solid orange;
}

.header-Part2 .header-text1 {
    font-size: 50px;
}

.header-Part2 .hr {
    width: 70px;
    height: 4px;
    background: #000000;
    display: block;
    margin-left: 660px;
}

.header-Part2 .header-text2 {
    font-size: 22px;
    color: #706c66;
} */

.right {
    width: 40px;
    height: 60px;
    background: #cccccc;
    position: fixed;
    top: 391px;
    left: 5px;
    text-align: center;
}

.movie {
    text-align: center;
    margin: 0 auto;
    /* position: relative; */
}

.bd {
    border-bottom: 2px solid #f2f3f4;
}


/* .img2 buttom {
    width: 200px;
    position: absolute;
    top: 265px;
    left: 641px; 
}

.img2 img:hover::after {
    display: none;
}*/
</style>

</style>