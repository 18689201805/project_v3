<template>
    <div style="margin-top:50px;" class="swiper-container swiper1">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1e3cf72b95.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">三月①期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <router-link to="/travelPhoto" class="index-a mt-4">点击欣赏</router-link>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1e4ab0084e.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">三月②期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1e33c2232e.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">三月③期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1e25609d76.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">三月④期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1ea5d0503a.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">二月①期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1eb09303cf.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">二月②期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="div-photo">
                    <a href="" style="color:#fff">
                        <img class="img" src="../../assets/images/banner/banner2/20190401_5ca1e25609d76.jpg" alt="">
                        <div class="div-text">
                            <table></table>
                            <div class="banner-two-text">
                                <p class="m-0">二月③期</p>
                                <p class="text m-0">每周客照</p>
                                <p class="m-0">WEDDING PHOTO</p>
                                <a class="index-a mt-4" href="">点击欣赏></a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- <div class=".banner_swiper swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';
    export default {
    data(){
        return{}
    },
    mounted(){
        new Swiper ('.swiper1', {
            speed:5000,
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true, // 循环模式选项
            //导航按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //自动轮播
            autoplay: {
                delay:0, //控制时间
                disableOnInteraction: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination', //点标记
                //dynamicBullets: true,
                //dynamicMainBullets: 2,
                clickable: true,
            },
        })
     }
}
</script>
<style scoped>
.swiper-container {
      width: 90%;
    }
.swiper-wrapper{
    transition-timing-function:linear !important;
}
  .img {
    width: 263px;
    height: 393px;
}

.div-photo {
    width: 262px;
    height: 393px;
    position: relative;
    margin-right: 20px;
    top: 50px;
    /* left: 50px; */
    display: inline-block;
}

.img {
    width: 100%;
}

.div-text {
    width: 262px;
    height: 393px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0px;
    left: 0px;
    text-align: center;
    color: white;
    font-size: 20px;
    /* display:none; */
    display: block;
}


/* 
		.div-photo:hover .div-text{
				display:block; 
			}*/

.index-a {
    width: 128px;
    height: 30px;
    background: #fff;
    border-radius: 20px;
    margin-left: 65px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    color: #333333;
    display: block;
}
.div-text .text {
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
}

.banner-two-text {
    margin-top: 120px;
}

</style>