  var pag5=document.getElementById("pag");
     var ctrl=document.getElementById("ctrl1");
     var img=document.querySelector("#ctrl1 img");
     var v3=document.getElementById("v1");
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
       ctrl1.style.display = "none"
     }
     v3.onpause = function(){
     ctrl1.style.display="block"
      }
