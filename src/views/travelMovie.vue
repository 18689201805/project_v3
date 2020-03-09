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
        <div class="pt-5 pb-5 bd">
            <video class="bd" controls id="videoPlay1" poster="../assets/images/video/balidao.png" src="../assets/images/video/balidao.mp4" width="100%" height="auto" name="balidao"></video>
            <!-- <div class="img2">
                <button onclick="onclick()">
                    <img src="images/video/close.c4a8439.png" alt="">
                </button>
            </div> -->
        </div>
        <div class="pt-5 pb-5 bd">
            <video controls poster="../assets/images/video/xuanchuan.jpg" src="../assets/images/video/xuanchuan.mp4" width="100%" height="auto"></video>
        </div>
        <div class="pt-5 pb-5 bd">
            <video controls poster="../assets/images/video/stln.png" src="../assets/images/video/stln.mp4" width="100%" height="auto"></video>

        </div>
        <div class="pt-5 pb-5 bd">
            <video controls poster="../assets/images/video/paris.png" src="../assets/images/video/paris.mp4" width="100%" height="auto"></video>

        </div>
        <div class="pt-5 pb-5 bd">
            <video controls poster="../assets/images/video/fashion.jpg" src="../assets/images/video/fashion.mp4" width="100%" height="auto"></video>

        </div>
    </div>
    <div class="container">
        <div class="page p-4">
            <ul class="pagination">
                <li class="page-item disabled ">
                    <router-link to="travelMovie">上一页</router-link>
                </li>
                <li class="page-item active ">
                    <router-link to="travelMovie">1</router-link>
                </li>
                <li class="page-item">
                    <button>
                        <router-link to="travelMovie-list1">2</router-link>
                    </button>
                    
                </li>
                <li class="page-item">
                    <button>
                        <router-link to="travelMovie-list2">3</router-link>
                    </button>
                </li>
                <li class="page-item">
                    <button>
                        <router-link to="travelMovie-list1">下一页</router-link>
                    </button>
                    
                </li>
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
     .page {
            width: 40rem;
            position: relative;
            top: 50%;
            left: 35%;
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