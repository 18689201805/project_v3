<template>
<div>
    <div class="header_part1">
        <div class="top">
            <div class="bg-ligh">
                <div class="header_navLogin">
                    <a @click="login" style="font-size:18px;" class="font-weight-bold text-dark m-3" href="#">你好!请登录!</a>
                        <img class="imgwidth p-2 ml-2" src="../assets/images/01.png" alt="" />
                        <img class="imgwidth p-2 ml-2" src="../assets/images/02.png" alt="" />
                        <img class="imgwidth p-2 ml-2" src="../assets/images/03.png" alt="" />
                        <span class="h6 m-3">400-995-2022</span>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="container">
                <div style="position:relative;">
                    <img class="headerlogo" src="../assets/images/headerlogo.png" alt="" />
                </div>
                <div>
                    <ul class="header_nav">
                        <li style="margin-left:3.1rem;font-size:1.2rem;padding-bottom: 1.6rem;" class="">
                            <router-link to="/">首页</router-link>
                        </li>
                        <li class="">
                            <router-link to="globalPhotos">全球作品</router-link>
                        </li>
                        <li class="">
                        <router-link to="travelPhoto">全球客照</router-link>
                        </li>
                        <li class="">
                            <router-link to="travelDiscount">当地特惠</router-link>
                        </li>
                        <li class="">
                            <router-link to="travelWorld">旅拍研究所</router-link>
                        </li>
                        <li class="">
                            <router-link to="travelMovie">微电影</router-link>
                        </li>
                        <li class="">
                            <router-link to="travelReview">真实好评</router-link>
                        </li>
                        <li class="">
                            <router-link to="company">公司简介</router-link>
                        </li>
                    </ul>  
                </div>
                 
            </div>
        </div>
    </div>
    <div class="login" v-show="show">
        <div style="background:#fff" class="login_warp">
            <div class="loginbox fl">
                <div class="login_header">
                    <span @mouseenter="cur=0" :class="{active:cur==0}">账号登录</span>
                    <span @mouseenter="cur=1" :class="{active:cur==1}">快捷登录</span>
                    <span @mouseenter="cur=2" :class="{active:cur==2}">扫码登录</span>
                </div>
                <div class="login_content">
                    <div v-show="cur==0" class="Cbody_item">
                        <div class="form_item"><input type="text" name="fname" placeholder="用户名"></div>
                        <div class="form_item"><input type="password" name="fpassword" placeholder="密码"></div>
                        <div class="form_item">
                            <div class="fl"><input type="checkbox">记住密码</div>
                            <div class="fr"><a href="javascript:;">找回密码</a></div>
                        </div>
                        <div class="clear"></div>
                        <div class="form_item">
                            <input type="submit" name="" value="登录">
                        </div>
                    </div>
                    <div v-show="cur==1" class="Cbody_item">
                        <div class="form_item"><input type="text" name="fname" placeholder="手机号"></div>
                        <div class="form_item"><input type="password" name="fpassword" placeholder="验证码"></div>
                        <div class="form_item">
                            <!-- <div class="fl"><input type="checkbox">记住密码</div>
                            <div class="fr"><a href="javascript:;">找回密码</a></div> -->
                        </div>
                        <div class="clear"></div>
                        <div class="form_item">
                            <input type="submit" name="" value="登录">
                        </div>

                    </div>
                    <div v-show="cur==2" class="Cbody_item">
                        <div class="qcode"><img src="../assets/images/qcode.png" width="160" height="160" alt="二维码" /></div>
                        <div class="beizhu">打开手机客户端扫码注册</div>
                    </div>
                </div>
            </div>
            <div class="loginrslider fl">
                <span @click="logup" style="float:right;margin-right:8px;margin-top:4px;z-index:97;">x</span>
                <!-- <img style="width:100%;height:400px;" src="../assets/images/login.jpg" alt=""> -->
            </div>
        </div>
    </div>
    
</div>

</template>
<script>

export default {
  data(){
    return{
        cur:0,//默认选中第一个tab
        show:false 
        }
    },
    methods:{
        login(){
            this.show=true;
            if(this.show){
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='hidden';//隐藏滚动条
                document.addEventListener("touchmove",mo,false)  
            }
        },
        logup(){
            this.show=false;
            if(!this.show){
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='';//出现滚动条
                document.removeEventListener("touchmove",mo,false); 
            }
        }
}
}
</script>
<style scoped>
.header_part1{
    width:100%;
    position:fixed;
    top:0;
    right:0;
    z-index:88;
}
.bg-ligh{
    width:100%;
    background: #cccccc;
}
.header_navLogin{
    float:right;
}

.top {
    width: 100%;
    height: 118px;
    background: white; 
}
.imgwidth {
    width: 40px;
}

.header_nav{
    float:left;
    display: flex;
    margin-top:30px;
    margin-left:100px;
}
.headerlogo {
    position:absolute;
    top:0;
    left:0;
    float:left;
    width: 6rem;
    margin-top:25px;
}
ul{list-style: none;}
li~li{
   margin-left:2.8rem;
   /* padding-bottom: 10px; */
   font-size:1.25rem;

   
}
li>a{
    color:#000;
}
div li:hover a{
    padding-bottom: 15px;
    border-bottom: 5px solid orange;
    color:#3f7dff;
    text-decoration: none;
}

/* login登录样式 */
.fl{
	float: left;
}
.fr{
	float: right;
}
.clear{
	clear: both;
}
a{
	text-decoration: none;
	color: #333;
	transition: ease all 0.5s;
}
a{
	color: #1c65ff
}
.login{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 99;
    background:rgba(0, 0, 0,0.5);
}
.login_header{
	margin-bottom: 40px;
}
.login_header span{
	margin-right: 20px;
	cursor: pointer;
}
.loginbox{
	width: 300px;
	overflow: hidden;
	padding: 20px;
	padding-top: 15px;
}
.Cbody_item{
	border: 0px solid #999;
	overflow: hidden;
}
.form_item{
	font-size: 13px;
}
.form_item input[type="text"],.form_item input[type="password"]{
	display: block;
	width: calc(100% - 18px);
	height: 36px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #999;
	transition: ease all 0.5s;
	margin-bottom: 20px;
}
.form_item input[type="text"]:focus,.form_item input[type="password"]:focus{
	border: 1px solid #1c65ff
}
.form_item input[type="submit"]{
	display: block;
	width: calc(100% - 0px);
	height: 40px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #1c65ff;
	transition: ease all 0.5s;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: #1c65ff;
	color: #fff;
	cursor: pointer;
}
.form_item input[type="submit"]:hover{
	background-color: #3f7dff;
	border: 1px solid #3f7dff;
}
.active{
    color: #3f7dff;
    padding-bottom: 10px;
    border-bottom: 3px solid #3f7dff;
}
.loginrslider{
	width: 198px;
	height: 322px;
	background:url("../assets/images/login.jpg") no-repeat 0% 0%;
    background-size:cover;
    background-position:-22px 0px;
}

.login_warp{
	width: 500px;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 0 0px 0px #ccc;
    overflow: hidden;
    border:1px solid #3f7dff;
    margin-top: 10%;
    transition: ease all 0.5s;
    position: relative;
	top: 0px;
	cursor: pointer;
}
.login_warp:hover{
	top: -30px;
	box-shadow: 0 15px 21px #ccc;
}
.loginrslider{
	color: #fff;

}
.qcode{
	width: 160px;
	height: 160px;
	background-color: #ccc;
	margin: 0 auto;
	margin-top: 2px;
}
.beizhu{
	text-align: center;
	font-size: 13px;
	margin-top: 10px;
	color: #999
}
</style>