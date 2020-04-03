/**
 * Created by admin on 2018/8/27.
 */
$(document).ready(function () {
    //图书分类动态展示
    var bookSortList=["中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）",
        "四大名著（696）","港澳台小说（838）","外国小说（5119）",
        "侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）",
        "武侠（574）","军事（726）","情感 （6700）",
        "社会（4855）","都市（949）","乡土（99）","职场（176）",
        "财经（292）","官场（438）","历史（1329）","影视小说（501）",
        "作品集（2019）","世界名著（3273）"];
    var str=" <ul>            ";
    $(bookSortList).each(function(i){
        str=str+"<li>.<a href=\"#\">"+bookSortList[i]+"</a></li>";
    });
    str=str+"</ul>";

    $("#product_catList_class").html(str);
    //图书动态展示
    var bookList=new Array();
    bookList[0]=['product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',4,'郭现杰','花山文艺出版社', '2009年08月',
        '数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...',
        '13.10','59折','￥18.90','￥32.00'];
    bookList[1]=['product_list_02.jpg','圈子圈套.1.战局篇',4,'王强','清华大学出版社', '2006年01月',
        '虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...',
        '￥8.90','68折','￥19.10','￥28.00'];
    var listStr="";
    var bigBookStr="";

    //获取大图的Html
    function getBigBookStr(){
        $(bookList).each(function (i,n) {
            var starStr="";
            for(var j=1;j<=5;j++){
                if(j<=bookList[i][2]){
                    starStr+="<img src=\"images/star_red.gif\" alt=\"star\"/>";
                }else{
                    starStr+="<img src=\"images/star_gray.gif\" alt=\"star\"/>";
                }
            }
            var str="<div class=\"big_img_list\"><ul class=\"\"><li class=\"bookImg\">" +
                "<img src=\"images/"+bookList[i][0]+"\" alt=\"图书列表\"></li><li><dl><dd " +
            "class=\"footer_dull_red\">"+bookList[i][10]+"</dd><dd class=\"product_content_delete\">" +
            ""+bookList[i][9]+"</dd><dd class=\"footer_dull_red\">"+bookList[i][8]+
            "</dd></dl></li><li class=\"detail\">"+bookList[i][6]+"</li><li class=\"detail\">作　者：" +
            "<a href=\"#\" class=\"blue_14\">"+bookList[i][3]+" </a> 著</li><li class=\"detail\">顾客评分：" +
            ""+starStr+"</li><li class=\"detail\">" +
            "出版社：<a href=\"#\" class=\"blue_14\">"+bookList[i][4]+"</a></li><li class=\"detail\">" +
            "出版时间："+bookList[i][5]+"</li></ul></div>";
            bigBookStr+=str;
        });
    }
    getBigBookStr();
    //获取列表的Html
    function getListStr(){
        $(bookList).each(function (i,n) {
            var starStr="";
            for(var j=1;j<=5;j++){
                if(j<=bookList[i][2]){
                    starStr+="<img src=\"images/star_red.gif\" alt=\"star\"/>";
                }else{
                    starStr+="<img src=\"images/star_gray.gif\" alt=\"star\"/>";
                }
            }
            var str="<!--列表开始-->" +
                "            <div class=\"product_storyList_content_left\"><img src=\"images/"+bookList[i][0]+"\" alt=\"图书列表\"/></div>" +
                "            <div class=\"product_storyList_content_right\">" +
                "            <ul>" +
                "            <li class=\"product_storyList_content_dash\"><a href=\"#\" class=\"blue_14\">"+bookList[i][1]+"  </a></li>" +
                "        <li>顾客评分："+starStr+"</li>" +
                "            <li>作　者：<a href=\"#\" class=\"blue_14\">"+bookList[i][3]+" </a> 著</li>" +
                "        <li>出版社：<a href=\"#\" class=\"blue_14\">"+bookList[i][4]+"</a></li>" +
                "        <li>出版时间："+bookList[i][5]+"</li>" +
                "        <li>"+bookList[6]+".</li>" +
                "        <li>" +
                "            <dl class=\"product_content_dd\">" +
                "                <dd><img src=\"images/product_buy_02.gif\" alt=\"shopping\"/></dd>" +
                "                <dd><img src=\"images/product_buy_01.gif\" alt=\"shopping\"/></dd>" +
                "            <dd>节省：￥11.4</dd>" +
                "        <dd>折扣：<span>59折</span></dd>" +
                "        <dd class=\"footer_dull_red\"><span>￥16.60</span></dd>" +
                "        <dd class=\"product_content_delete\"><span>￥28.00</span></dd>" +
                "        </dl>" +
                "        </li>" +
                "        </ul>" +
                "        </div>" +
                "        <div class=\"product_storyList_content_bottom\"></div>" +
                "                <!--列表结束-->";
            listStr=listStr+str;
        });
    }
    getListStr();

    $("#product_storyList_content").html(listStr);
    //大图  列表切换
    $("#product_array a").click(function () {
        if($(this).hasClass("click")) return;
        $(this).addClass("click").siblings().removeClass();
        if($(this).attr("name")=="array"){
            //列表
           $("#product_storyList_content").html(listStr);
        }else if($(this).attr("name")=="bigImg"){
            //大图
            $("#product_storyList_content").html(bigBookStr);
            $(".big_img_list").mouseover(function () {
                $(this).addClass("over");
                $(this).children("ul").addClass("over");
            }).mouseout(function () {
                $(this).removeClass("over");
                $(this).children("ul").removeClass("over");
            });
        }
    });
});