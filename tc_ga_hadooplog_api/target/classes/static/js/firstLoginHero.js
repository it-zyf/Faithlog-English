var Lock1;
var Lock2;
var Lock3;
var Lock4;
function todays(){//构建方法
    var today=new Date();//new 出当前时间
    today.setDate(today.getDate())
    var h=today.getFullYear();//获取年
    var m=today.getMonth()+1;//获取月
    var d=today.getDate()-1;//获取日
    if(m>=1&&m<10){
        m="0"+m
    }
    if(d>=1&&d<10){
        d="0"+d
    }
    return h+"-"+m+"-"+d ;//返回 年-月-日 时:分:秒
};
document.getElementById("in3").value=todays();
$(function () {
    onready1();
    onready2();
    onready3();
    onready4();
})

$("#btn1").click(function(){
    $("#table1 tbody").empty();
    $("#table2 tbody").empty();
    $("#table3 tbody").empty();
    $("#table4 tbody").empty();
    onready1();
    onready2();
    onready3();
    onready4()
});

//查询英雄分布
function onready1(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getHeroDistribution.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                $("body").mLoading("hide");
                if(json.data.length == 0){
                    $("#table1").append('<tr><td colspan="6">无数据</td></tr>')
                }else{
                    for(var i=0;i<json.data.length;i++){
                        if (json.data[i].heroId == 75000201) {
                            $("#table1").append('<tr><td>西斯</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000301) {
                            $("#table1").append('<tr><td>元法</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000401) {
                            $("#table1").append('<tr><td>死神</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000901) {
                            $("#table1").append('<tr><td>拳法</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        }
                        // if (json.data[i].heroId == 75000501) {
                        //     $("#table1").append('<tr><td>范海辛</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        // }
                        if (json.data[i].heroId == 75001001) {
                            $("#table1").append('<tr><td>范海辛</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td><td>'+json.data[i].onLineOneGameNum+'</td><td>'+json.data[i].offLineSettlementRate+'</td></tr>')
                        }
                    }
                }
            }
        }
    })
}
//首局活人数对2局率的影响
function onready2(){
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getTwoRate.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                if(json.data.length ==0){
                    $("#table2").append('<tr><td colspan="4">无数据</td></tr>')
                }else{
                    for(var i=0;i<json.data.length;i++){
                        $("#table2").append('<tr><td>'+json.data[i].playerNum+'</td><td>'+json.data[i].firstGameNum+'</td><td>'+json.data[i].oneGameNum+'</td><td>'+json.data[i].twoRate+'</td></tr>')
                    }
                }
            }
        }
    })
}
//死亡原因表
function onready3(){
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getCauseOfDeathDistribution.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
               if(json.data.length ==0){
                   $("#table3").append('<tr><td colspan="3">无数据</td></tr>')
               }else {
                   for(var i=0;i<json.data.length;i++){
                       $("#table3").append('<tr><td>'+json.data[i].stepNum+'</td><td>'+json.data[i].offLineNum+'</td><td>'+json.data[i].onLineNum+'</td></tr>')
                   }
               }
            }
        }
    })
}
//通过筛选结算日志库在线结算用户游戏时间分布
function onready4(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getGameTimeDistribution.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                $("body").mLoading("hide");
                console.log(json.data.length)
                if(json.data.length == 0){
                    $("#table4").append('<tr><td colspan="3">无数据</td></tr>')
                }else{
                    for(var i=0;i<json.data.length;i++){
                        console.log(json.data.cycles)
                        if(json.data[i].cycles == 0){
                            $("#table4").append('<tr><td>异常用户（游戏时间为0）</td><td>'+json.data[i].ratio+'</td><td>'+json.data[i].playerNum+'</td></tr>')

                        }
                        else{
                            $("#table4").append('<tr><td>第'+json.data[i].cycles+'圈</td><td>'+json.data[i].ratio+'</td><td>'+json.data[i].playerNum+'</td></tr>')
                        }
                    }
                }
            }
        }
    })
}
