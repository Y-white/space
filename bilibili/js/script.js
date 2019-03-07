
window.onload=function(){

//主页菜单
    var mene=document.getElementById('mene');
    var homeHeader=document.getElementById("home-header");
    var homeHeaders=homeHeader.getElementsByTagName('img');
 
function meneblock(){  
    homeHeaders[0].onclick=function(){
      mene.style.left=0;
        mene.onmouseover=function(){
        mene.style.left=0+"px";
      }
      mene.onmouseout=function(){
        mene.style.left=-255+"px";
      }
    }
    // mene.onmouseover=function(){
    //   mene.style.left=0+"px";
    // }
    // mene.onmouseout=function(){
    //   mene.style.left=-255+"px";
    // }
}
//主页切换
    var bigBox=document.getElementById('bigBox');
    var bigBoxs=bigBox.childNodes;
    var Arr=[];
    var item=document.getElementById("item");
    var items=item.getElementsByTagName("li");
    var c=null;
function findpage(){
    for (var i = 0; i < bigBoxs.length; i++) {
      if (bigBoxs[i].className=="page") {
          Arr.push(bigBoxs[i]);
      }
    }
  }

function mainswitch(){ 
      findpage();
    for (var i = 0; i < items.length; i++) {
        items[i].id=i;
        items[i].onclick=function(){
        for (var i = 0; i < Arr.length; i++) {
          Arr[i].style.display="none";
          items[i].className="";
        }
        c=this.id;
        this.className="active-color";
        Arr[c].style.display="block";
      }
    }
} 

// 页面切换
    var pageBox=document.getElementById("page-box");
    var homePageitem=document.getElementById("home-pageitem");
    var homePageitems=homePageitem.getElementsByTagName("li");
    var width=-400;
    var b=0;
function pageswitch(){
    for (var i = 0; i < homePageitems.length; i++) {
      homePageitems[i].id=i;
      homePageitems[i].onclick=function(){
        for (var i = 0; i < homePageitems.length; i++) {
          homePageitems[i].className="";
        }
        this.className="active-color";
        b=this.id;
        console.log(width*b);
        console.log(b);
        pageBox.style.left=width*b+"px";
      }
      homePageitems[i].onmouseover=function(){
        if (this.className=="active-color") {
        this.className="active-color2";
        }else{
          this.className="active-color1";
        }
      }
      homePageitems[i].onmouseout=function(){
        if (this.className=="active-color1") {
          this.className="";
        }else{
          this.className="active-color";
        }
      }
    }

}
 

// 首页--直播

    var moveBox=document.getElementById('move-box');
    var boxImg=moveBox.getElementsByTagName('div');
    var dot=document.getElementById("dots");
    var dots=dot.getElementsByTagName("span");
    var timer;
    var a=0;

function livepush(){
  for(var i=0,len=dots.length;i<len;i++){
          dots[i].id = i;   
          boxImg[i].id=i;   
          dots[i].onmouseover= function(){
            a = this.id;
            clearInterval(timer);
            changeImg();
       }
          boxImg[i].onclick= function(){
            if(this.id<2){
              a++;
            }else{
              a=0;
            }
            clearInterval(timer);
            changeImg();
    
       }
         boxImg[i].onmouseover= function(){
            clearInterval(timer);
       }
       moveBox.onmouseout= function(){
          push();
       }
    }
    push();
}


function changeImg(){
   for(var i=0;i<dots.length;i++){
       dots[i].className = "";
   }
       moveBox.style.top = a*(-200)+'px';
       dots[a].className = "active";
}
    //推送播放
function push(){
    timer=setInterval(function(){
      if (a<2) {
        a++;
      }else{
        a=0;
      }
    changeImg();
    },3000)   
  }

// 首页推荐推送

    var RmoveBox=document.getElementById('Rmove-box');
    var RmoveBoxs=RmoveBox.getElementsByTagName('div');
    var Rdot=document.getElementById("Rdots");
    var Rdots=Rdot.getElementsByTagName("span");
    var timer1;
    var R=0;
    console.log(RmoveBoxs);

function Rlivepush(){
  for(var i=0,len=Rdots.length;i<len;i++){
          Rdots[i].id = i;
          RmoveBoxs[i].id=i;      
          Rdots[i].onmouseover= function(){
            R = this.id;
            clearInterval(timer1);
            RchangeImg();
       }
          RmoveBoxs[i].onclick= function(){
            if(this.id<2){
              R++;
            }else{
              R=0;
            }
            clearInterval(timer1);
            RchangeImg();
    
       }
        RmoveBoxs[i].onmouseover= function(){
            clearInterval(timer1);
       }
       RmoveBox.onmouseout= function(){
          Rpush();
       }
    }
    Rpush();
}


function RchangeImg(){
   for(var i=0;i<Rdots.length;i++){
       Rdots[i].className = "";
   }
        console.log(R);
       RmoveBox.style.top = R*(-180)+'px';
       Rdots[R].className = "active";
}
    //推送播放
function Rpush(){
    timer1=setInterval(function(){
      if (R<2) {
        R++;
      }else{
        R=0;
      }
    RchangeImg();
    },3000)   
  }


Rlivepush();
livepush();
// if (b==0) {
//   livepush();
// }

    
pageswitch();    //首页页面切换
mainswitch();     //主页面切换
meneblock();      //主菜单栏调出
}
