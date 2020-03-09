var pag5=document.getElementById("pag5");
    var ctrl=document.getElementById("ctrl");
    var img=document.querySelector("#ctrl img");
    var v3=document.getElementById("v3");
    ctrl.onclick=function(event){
        event.preventDefault();
        //v3.paused?v3.play():v3.pause()
        if(v3.paused){
            v3.play();
            v3.controls="controls"
        }else{
            v3.pause()
        }
    }

    v3.onplay = function(){
       ctrl.style.display = "none"
     }
    v3.onpause = function(){
    ctrl.style.display="block"
     }