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
    // $("body").mLoading("show");
    onready1();
    onready2();
    onready3();
    // $("body").mLoading("hide");
})

$("#btn1").click(function(){
    $("#table1 tbody").empty();
    $("#table2 tbody").empty();
    $("#table3 tbody").empty();
    onready1();
    onready2();
    onready3()
});

//不同时间分段内，1局在线结算用户不同行为次数均值
function onready1(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getAvgPlayerNum.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                if(json.data.length == 0){
                    $("#table1").append('<tr><td colspan="7">无数据</td></tr>')
                }else{
                    for(var i=0;i<json.data.length;i++){
                        if (json.data[i].stepNum == "populationBase") {
                            $("#table1").append('<tr><td>人口基数</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3150) {
                            $("#table1").append('<tr><td>击杀玩家</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3160) {
                            $("#table1").append('<tr><td>击杀荒神</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3180) {
                            $("#table1").append('<tr><td>技能升级</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3170) {
                            $("#table1").append('<tr><td>更换沙盒技能</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3132) {
                            $("#table1").append('<tr><td>上树</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3133) {
                            $("#table1").append('<tr><td>下树</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3134) {
                            $("#table1").append('<tr><td>使用Gank</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3135) {
                            $("#table1").append('<tr><td>轻功1段</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3136) {
                            $("#table1").append('<tr><td>轻功2段</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3137) {
                            $("#table1").append('<tr><td>轻功3段</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3138) {
                            $("#table1").append('<tr><td>轻功打空</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].stepNum == 3139) {
                            $("#table1").append('<tr><td>轻功打地</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                    }
                }
            }
        }
    })
    console.log(Lock1)
}

//英雄人数分布
function onready2(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getHeroNum.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                if(json.data.length !== 0){
                    for(var i=0;i<json.data.length;i++){
                        if (json.data[i].heroId == 75000201) {
                            $("#table2").append('<tr><td>西斯人数</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000401) {
                            $("#table2").append('<tr><td>死神人数</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000901) {
                            $("#table2").append('<tr><td>拳法人数</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75001001) {
                            $("#table2").append('<tr><td>范海辛人数</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                    }
                }else{
                    // $("#table2").append('<tr>无数据</tr>')
                }
                //自带沙盒使用情况分布累计数表
                $.ajax({
                    type:"post",
                    url:"../getCountUseCommonSandbox.action",
                    async:true,
                    data:{
                        startTime:text1
                    },
                    success:function(json){
                        if(json.state == true){
                            if(json.data.length == 0){
                                $("#table2").append('<tr><td colspan="7">无数据</td></tr>')
                            }else{
                                for(var i=0;i<json.data.length;i++){
                                    if (json.data[i].heroId == 75000201) {
                                        $("#table2").append('<tr><td>西斯公共沙盒次</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                                    }
                                    if (json.data[i].heroId == 75000401) {
                                        $("#table2").append('<tr><td>死神公共沙盒次</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                                    }
                                    if (json.data[i].heroId == 75000901) {
                                        $("#table2").append('<tr><td>拳法公共沙盒次</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                                    }
                                    if (json.data[i].heroId == 75001001) {
                                        $("#table2").append('<tr><td>范海辛公共沙盒次</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                                    }
                                }
                            }
                        }
                    }
                })
            }
        }
    })
}
//自带沙盒使用情况分布均值表
function onready3(){
    $("body").mLoading("show");
    var text1= $('#in3').val();//起始时间
    $.ajax({
        type:"post",
        url:"../getAvgUseSelfSandbox.action",
        async:true,
        data:{
            startTime:text1
        },
        success:function(json){
            if(json.state == true){
                $("body").mLoading("hide");
                if(json.data.length == 0){
                    $("#table3").append('<tr><td colspan="7">无数据</td></tr>')
                }else{
                    for(var i=0;i<json.data.length;i++){
                        if (json.data[i].heroId == 75000201) {
                            $("#table3").append('<tr><td>西斯</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000401) {
                            $("#table3").append('<tr><td>死神</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75000901) {
                            $("#table3").append('<tr><td>拳法</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                        if (json.data[i].heroId == 75001001) {
                            $("#table3").append('<tr><td>范海辛</td><td>'+json.data[i].firstLap+'</td><td>'+json.data[i].secondLap+'</td><td>'+json.data[i].thirdLap+'</td><td>'+json.data[i].fourthLap+'</td><td>'+json.data[i].fifthLap+'</td><td>'+json.data[i].sixthLap+'</td></tr>')
                        }
                    }
                }
            }
        }
    })
}
