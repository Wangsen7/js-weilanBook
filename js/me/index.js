/**
 * Created by admin on 2018/8/24.
 */
$(document).ready(function () {
    //新手入门
    $("#menu").hover(
        function () {
            $("#dd_menu_top_down").show();
        }, function () {
            $("#dd_menu_top_down").hide();
        }
    );
    //打开广告

    //关闭
    $("#dd_close a").click(function () {
        $("#right").hide();
    });
    //图片放大
    $(".book ul li img").mouseover(function () {
        $(this).animate({"width":"110%"},1000);
    }).mouseout(function () {
        $(this).animate({"width":"80%"},1000);
    });
    //轮播
    luobo();
    //书讯滚动
    bookMove();
});
//书讯滚动
function bookMove(){
    var marginTop=0;
    var isStop=false;//是否停止   true:停
    $("#express li").hover(
        function () {
            isStop=true;
        }, function () {
            isStop=false;
        }
    );
    setInterval(function () {
        if(isStop) return;
        marginTop--;
        $("#express li").first().css("margin-top",marginTop+"px");
      //  if(! $("#express li").first().is(":animated")){
            if( $("#express li").first().height()<=-marginTop){
                marginTop=0;
                $("#express li").first().css("margin-top","0px").appendTo($("#express"));
            }
      //  }
    },50);

}

//轮播
function luobo(){
    var index=0;//当前显示图片的索引
    var isStop=false;//是否停止   true:停  false:轮播
    $("#scroll_number li").mouseover(function () {
        index=$("#scroll_number li").index(this);
        $("#scroll_img li:eq("+index+")").fadeIn(500).siblings().fadeOut();
        $("#scroll_number li:eq("+index+")").addClass("scroll_number_over").siblings().removeClass();
        isStop=true;
        
    }).mouseout(function () {
        isStop=false;
    });
    setInterval(function () {
        if(isStop) return;
        if(index==3){
            index=0;
        }else{
            index++;
        }
        $("#scroll_img li:eq("+index+")").fadeIn(500).siblings().fadeOut();
        $("#scroll_number li:eq("+index+")").addClass("scroll_number_over").siblings().removeClass();
    },3000);

}