/**
 * Created by admin on 2018/8/24.
 */
$(document).ready(function () {
    //商品列表的显示和隐藏
    $("#shopping_commend_arrow").click(function () {
        $("#shopping_commend_sort").toggle();
        if($("#shopping_commend_sort").css("display")=="none"){
            $(this).attr("src","images/shopping_arrow_down.gif");
        }else{
            $(this).attr("src","images/shopping_arrow_up.gif");
        }

    });
   //各行变色
    $("#myTableProduct tr:even").css("background-color","#fefbf2");
    $("#myTableProduct tr:odd").css("background-color","#fff");
    $("#myTableProduct tr").hover(function () {
        $(this).css("background-color","orange");
    }, function () {
        $("#myTableProduct tr:even").css("background-color","#fefbf2");
        $("#myTableProduct tr:odd").css("background-color","#fff");

    })
    //删除
    $("#myTableProduct .shopping_product_list_6 a").click(function () {
        var flag=confirm("确定要删除吗？");
        if(flag){
            $(this).parent().parent().remove();
            calcTotal();
        }
    });
    //清空
    $("#removeAllProduct").click(function () {
        $("#myTableProduct").remove();
        $(".shopping_list_end").empty().html("<div class='empty_product'><div>您还没有挑选商品，<a href='index.html'>去挑选看看>></a></div></div>");
    });

    //修改数量
    $("#myTableProduct .shopping_product_list_5 input").change(function () {
        if($(this).val()>0){
            calcTotal();
            alert("修改成功");
        }

    });
    //自动计算积分、金额
    calcTotal();
});

function calcTotal(){
    var totalScore=0;//总积分
    var totalPrice=0;//总金额
    var totalOldPrice=0;//总市场金额
    $("#myTableProduct tr").each(function () {
        var num=$(this).find(".shopping_product_list_5").find("input").val();
        var score=$(this).find(".shopping_product_list_2").find("label").text();
        var price=$(this).find(".shopping_product_list_4").find("label").text().replace(".","");
        var oldPrice=$(this).find(".shopping_product_list_3").find("label").text().replace(".","");
        totalScore+=score*num;
        totalPrice+=price*num;
        totalOldPrice+=oldPrice*num;
    });
    $("#product_total").html(totalPrice/100);
    $("#product_integral").html(totalScore);
    $("#product_save").html((totalOldPrice-totalPrice)/100);
    
}