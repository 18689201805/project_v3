<template>
      <div style="height:500px;background: #333333;" class="container-fluid">
        <div  class="row no-gutters ml-5">
            <div style="margin-top:50px;" class="col-6 no-gutters footer_border ">
                <ul class="d-flex justify-content-around list-unstyled ml-2">
                    <li>
                        <h5>中国</h5>
                        <ul class="list-unstyled adress_list">
                            <li>三亚</li>
                            <li>丽江</li>
                            <li>大理</li>
                            <li>香格里拉</li>
                            <li>西藏</li>
                            <li>青海</li>
                            <li>青岛</li>
                            <li>大连</li>
                            <li>厦门</li>
                            <li>香港</li>
                            <li>澳门</li>
                            <li>稻城亚丁</li>
                        </ul>
                    </li>
                    <li>
                        <h5 class="">亚洲</h5>
                        <ul class="list-unstyled adress_list">
                            <li>巴厘岛</li>
                            <li>普吉岛</li>
                            <li>苏梅岛</li>
                            <li>济州岛</li>
                            <li>大阪</li>
                            <li>京都</li>
                            <li>小樽</li>
                            <li>冲绳</li>
                            <li>吉隆坡</li>
                            <li>新山</li>
                        </ul>
                    </li>
                    <li>
                        <h5 class="">欧洲</h5>
                        <ul class="list-unstyled adress_list">
                            <li>巴黎</li>
                            <li>圣托里尼</li>
                            <li>伦敦</li>
                            <li>瑞士</li>
                            <li>罗马</li>
                            <li>威尼斯</li>
                            <li>普罗旺斯</li>
                            <li>土耳其</li>
                            <li>摩洛哥</li>
                            <li>塞浦路斯</li>
                        </ul>
                    </li>
                    <li>
                        <h5 class="">大洋洲</h5>
                        <ul class="list-unstyled adress_list">
                            <li>悉尼</li>
                            <li>新西兰</li>
                            <li>墨尔本</li>
                            <li>帕劳</li>
                        </ul>
                    </li>
                    <li>
                        <h5>美洲</h5>
                        <ul class="list-unstyled adress_list">
                            <li>塞班</li>
                            <li>纽约</li>
                            <li>旧金山</li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex footer_float mr-4">
                    <div>
                        <h3 class="mt-2">400-995-2022</h3>
                    </div>
                    <div class="adress_list">
                        <p class="mb-0 mt-2 text-white">全球热线</p>
                        <p class="text-white">服务热线</p>
                    </div>
                    <div>
                        <img class="ml-1" src="../assets/images/server.png" alt="">
                    </div>

                </div>
            </div>
            <div style="margin-top:50px;" class="col-3 no-gutters">
                <div class="d-flex ml-3">
                    <div>
                        <img src="../assets/images/footer_get.png" alt="">
                    </div>
                    <div class="ml-2">
                        <p class="mb-0">我们的专业让你的蜜月旅行更专业</p>
                        <a href="" class="footer_a">立即登录领取大奖</a>
                    </div>
                </div>
                <div class="ml-3 border-bottom border-warning w-75 pb-4">
                    <input class="footer_input" type="text" placeholder="姓名">
                    <input class="footer_input" type="text" placeholder="电话">
                    <Date></Date>
                    <el-button type="primary">提交</el-button>
                    
                </div>
                <div class="ml-3 mt-3">
                    <p class="mb-0 h5">七彩玫瑰(上海)实业有限公司</p>
                    <p class="mb-0 mt-1">上海普陀区大渡河路168弄F栋</p>
                    <p class="text-justify pr-5 mt-3">Address: Building F, No. 168 Daduhe Road, Putuo District, Shanghai Seven Rose (Shanghai) Company Limited</p>
                </div>
            </div>
            <div style="margin-top:50px;" class="col-3 no-gutters">
                <div>
                    <ul class="list-unstyled">
                        <li>
                            <img class="footer_img" src="../assets/images/footerpart.png" alt="">
                            <div class="d-inline ml-4">
                                <img src="../assets/images/footerpart2.png" alt="">
                                <span>微信</span>
                            </div>
                        </li>
                        <li>
                            <img class="mt-3" src="../assets/images/footerpart3.png" alt="">
                            <div class="d-inline ml-4">
                                <img src="../assets/images/footer_part.png" alt="">
                                <span>微博</span>
                            </div>
                        </li>
                        <li>
                            <img class="mt-3" src="../assets/images/footer_part5.png" alt="">
                            <div class="d-inline ml-4">
                                <img src="../assets/images/footer_part67.png" alt="">
                                <span>天猫</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Date from "./footer_date"
export default {
  components:{Date}
}
</script>
<style scoped>
  body {
    background: #333333;
}

.footer_border {
    border-right: 2px solid orange;
}

.ml-5 {
    margin-left: 4.5rem !important;
    font-size: .8rem !important;
    color: white;
}

.adress_list {
    color: #9e9e9e;
    font-size: 0.5rem;
}

.h4 {
    margin-right: 50px;
}

.footer_float {
    float: right;
    margin-top: -10px;
}

.footer_a,
.mt-2 {
    color: orange;
}

.footer_input {
    width: 16rem;
    height: 2rem;
    background: #000000;
    border: 0;
    display: block;
    outline: none;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
    padding-left: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
}

.footer_lastinput {
    width: 10rem;
}
.el-button{
    width: 10rem;
    height: 2rem;
    margin-top:10px;
    margin-left:45px;
    line-height: 0.5;
}

.footer_img {
    width: 7.6rem;
}

</style>
