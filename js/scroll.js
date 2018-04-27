$(function(){
    /*  滚动到div时，固定导航条位置。 开始  */
    var navHt = document.getElementById("fixedTop").offsetTop;     //获取导航切换div 的可视区域Top值。
    $(window).scroll(function(){
        //设置导航条固定
        if( $(window).scrollTop() >= navHt ){
            $("#fixedTop").addClass("fixedTop");
        }
        if( $(window).scrollTop() < navHt ){
            console.log($(window).scrollTop() < navHt );
            $("#fixedTop").removeClass("fixedTop");
        }
        //判断滚动到对应的导航的位置  并激活li样式
        var spzsHt = document.getElementById("listPspzs").offsetTop;    //视频展示距离窗体的高度
        var gzspHt = document.getElementById("listPgzsp").offsetTop - 60;    //工作实拍
        var xxcsHt = document.getElementById("listPxxcs").offsetTop - 60;    //详细参数
        var bccpHt = document.getElementById("listPbccp").offsetTop -60;    //本车测评
        var pzdbHt = document.getElementById("listPpzdb").offsetTop -60;    //竞争车型配置对比
        var fqfaHt = document.getElementById("listPfqfa").offsetTop -60;    //分期方案
        console.log("视频实拍" + spzsHt + "工作实拍:" + gzspHt + "详细参数" + xxcsHt + "本车测评" + bccpHt + "竞争车型配置对比" + pzdbHt + "分期方案" + fqfaHt);
        if($(window).scrollTop() >= spzsHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPspzs']").addClass("active");
        }
        if($(window).scrollTop() >= gzspHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPgzsp']").addClass("active");
        }
        if($(window).scrollTop() >= xxcsHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPxxcs']").addClass("active");
        }
        if($(window).scrollTop() >= bccpHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPbccp']").addClass("active");
        }
        if($(window).scrollTop() >= pzdbHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPpzdb']").addClass("active");
        }
        if($(window).scrollTop() >= fqfaHt){
            $("#fixedTop >li").removeClass("active");
            $("li[data-target='#listPfqfa']").addClass("active");
        }
    })
    /*  滚动到div时，固定导航条位置。 结束  */
})