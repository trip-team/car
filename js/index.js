$(function () {
    /*    $("a").click(function(e){
     e.preventDefault();
     })
     */

    $(".hover-shop").mousemove(function () {
        $(".hover-box .img01").show();
    });
    $(".hover-shop").mouseout(function () {
        $(".hover-box .img01").hide();
    })
    /*  定义个模板  用来页签之间的切换效果  开始 */
    $("ul[data-toggle='navchange']").find("li").click(function (e) {
        e.preventDefault();
        if ($(this).attr("data-target") != undefined) {   //排除掉没有链接切换的 id
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            var listNav = $(this).attr("data-target");
            var listId = listNav.substr(1);
            if ($("#" + listId)) {
                $("#" + listId).show();
                $("#" + listId).siblings().hide();
            }
        }
    });
    /*  定义个模板  用来页签之间的切换效果  结束 */


    /*  视频 切换 */

    $("div[data-toggle='navchange']>div").click(function () {
        if ($(this).attr("data-target") != undefined) {   //排除掉没有链接切换的 id
            $(".img-bar>div").removeClass("active");
            $(this).addClass("active");
            var listNav = $(this).attr("data-target");
            var listId = listNav.substr(1);
            if ($("#" + listId)) {
                $(".pro-modal .carousel").hide();
                $("#" + listId).show();
            }
        }
    });


    /* 头部 导航二级菜单移入移出效果  开始 */
    var list = [["市政/环卫用车", "环卫用车", "环卫用车", "环卫用车", "环卫用车", "环卫用车", "洒水车", "洒水车", "洒水车", "洒水车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "市政/环卫用车", "洒水车", "市政/环卫用车", "洒水车", "市政/环卫用车", "洒水车", "市政/环卫用车", "洒水车", "市政/环卫用车"],
        ["市政/环卫用车", "环卫用车", "环卫用车", "环卫用车", "环卫用车", "环卫用车", "洒水车", "洒水车", "环卫用车", "洒水车"],
        ["市政/洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "洒水车", "洒水车", "沙水车", "市政/洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "洒水车", "洒水车", "沙水车", "市政/洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "洒水车", "洒水车", "沙水车", "市政/洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "市政/洒水车洒水车", "洒水车", "洒水车", "洒水车", "沙水车"],
        ["市政/环卫用车", "市政/环卫用车", "环卫用车", "市政/环卫用车", "环卫用车", "环卫用车", "市政/环卫用车", "环卫用车", "沙水车", "沙水车"],
        ["市政/洒水车", "洒水车", "洒水车", "洒水车", "洒水车", "洒水车", "洒水车", "洒水车", "洒水车", "洒水车"]];
    $("#index-nav").mousemove(function () {
        $(".list-navChild").show();
    });
    $("#index-nav li").each(function () {
        $(this).mousemove(function () {
            if ($(this).attr("data-index") != undefined) {
                var index = $(this).attr("data-index");
                var title = $(this).children("label").html();
                $(".list-navChild").empty();
                $(".list-navChild").append("<h4>" + title + "</h4>");
                for (var k = 0; k < list[index].length; k++) {
                    console.log(list[index][k]);
                    $(".list-navChild").append("<a href='#'>" + list[index][k] + "</a>");
                }
            }
        })
    })
    $("#index-nav").mouseout(function () {
        $(".list-navChild").hide();
    })
    $(".list-navChild").mousemove(function () {
        $(this).show();
    })
    $(".head-bg>div").mouseleave(function () {
        $(".list-navChild").hide();
    })
    /* 头部 导航二级菜单移入移出效果  结束 */

    /*  分页 样式 切换  */
    $("div[data-type='page']").each(function () {
        //得到所有需要分页效果的div
        var pageID = $(this).parent().attr("id");
        //并获取所在层级对应的ID
        $("#" + pageID + " li[data-page='page']").click(function () {
            //点击时，单独控制所有ID下的分页，避免相互影响。
            $("#" + pageID + " li[data-page='page']").removeClass("active");
            $(this).addClass("active");
        })
    })

    $(".black-top").click(function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;    //点击Black  让页面回到顶部
    })
    $("#blockTop").click(function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;    //点击Black  让页面回到顶部
    })


    //洒水车首页  缩约图效果  开始
    $(".ssCar-bg .img-list ul li").each(function () {
        $(this).mouseenter(function () {
            var $this = $(this);
            var t = setTimeout(function () {
                $(".ssCar-bg .img-bg img").animate({opacity: '0.8'}, 0);
                // $(".ssCar-bg .img-title").animate({opacity:'0.6'},200);
                $(".ssCar-bg .img-list li").removeClass("active");
                $this.addClass("active");
                var title = $this.children("a").attr("title");
                var imgBg = $this.children("a").attr("data-pic");
                $(".ssCar-bg .img-title").html(title);
                $(".ssCar-bg .img-bg img").attr("src", imgBg);
                $(".ssCar-bg .img-bg img").animate({opacity: '0.9'}, 600);
                //$(".ssCar-bg .img-title").animate({opacity:'1'},1000);
                var url = $(".ssCar-bg li.active").children("a").attr("data-url");
                $(".ssCar-bg .play-img a").attr("href", url);
            }, 300);
        })
    });

    /*  自动轮播效果  */
    /*
     *
     * var t = $(".ssCar-bg .img-list li.active").attr("index");   //获取当前那个li元素为激活状态，得到索引值。
     var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));    //li的最大索引值
     var count = 1;
     setInterval(function(){
     t++;
     $(".ssCar-bg .img-list li").removeClass("active");
     $(".ssCar-bg li[index="+t+"]").addClass("active");
     $(".ssCar-bg .img-bg img").animate({opacity:'0.8'},200);
     $(".ssCar-bg .img-title").html($(".ssCar-bg li[index="+t+"]").children("a").attr("title"));
     $(".ssCar-bg .img-bg img").attr("src",$(".ssCar-bg li[index="+t+"]").children("a").attr("data-pic"));
     $(".ssCar-bg .img-bg img").animate({opacity:'0.9'},600);
     if(t*count > 6){

     }
     },2000);*/


    //洒水车首页  缩约图效果  开始
    $(".ssCar-bg .icon-right").click(function () {
        $(".ssCar-bg .img-bg img").animate({opacity: '0.8'}, 0);
        var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));    //li的最大索引值
        var index = parseInt($(".ssCar-bg li[data-show='show']:last").attr("index")) + 1;    //获取每一组的最后一个li  的index
        var current = parseInt($(".ssCar-bg li.active").attr("index"));    //获取当前选中的图片位置

        var srcImg = $(".ssCar-bg li.active").children("a").attr("data-pic");
        var next = current + 1;    //下一个
        if ((current + 1) % index == 0) {
            //到底每一组图片的  最后一张图的时候
            $(".ssCar-bg li").hide();
            for (var i = 1; i <= index; i++) {    //当前往后数6张图片  设置为显示
                $(".ssCar-bg li[index=" + (current + i) + "]").show();
            }
        }
        $(".ssCar-bg li").removeClass("active");     //先移除之前的
        $(".ssCar-bg li[index=" + next + "]").addClass("active");    //点击下一张按钮时，设置下一个图片选中  current+1
        $(".ssCar-bg .img-bg img").attr("src", srcImg);
        $(".ssCar-bg .img-bg img").animate({opacity: '0.9'}, 600);

        //切换对应的大图片
        if (current >= indexmax) {    //如果到达最后一页
            $(".ssCar-bg li").hide();
            for (var k = 0; k < index; k++) {
                $(".ssCar-bg li[index=" + k + "]").show();     //显示第一组图片
            }
            $(".ssCar-bg li[index=0]").addClass("active");
        }
        var url = $(".ssCar-bg li.active").children("a").attr("data-url");

        $(".ssCar-bg .play-img a").attr("href", url);

    });
    $(".ssCar-bg .icon-left").click(function () {
        $(".ssCar-bg .img-bg img").animate({opacity: '0.8'}, 0);
        var indexmax = parseInt($(this).siblings("ul").children("li:last-child").attr("index"));    //li的最大索引值
        var index = parseInt($(".ssCar-bg li[data-show='show']:last").attr("index")) + 1;    //获取每一组的最后一个li  的index
        var current = parseInt($(".ssCar-bg li.active").attr("index"));    //获取当前选中的图片位置

        var srcImg = $(".ssCar-bg li.active").children("a").attr("data-pic");
        var before = current - 1;    //下一个

        $(".ssCar-bg li").removeClass("active");     //先移除之前的
        $(".ssCar-bg li[index=" + before + "]").addClass("active");
        $(".ssCar-bg .img-bg img").attr("src", srcImg);
        $(".ssCar-bg .img-bg img").animate({opacity: '0.9'}, 600);
        //切换对应的大图片
        if (current == 0) {    //如果到达第一张图片
            $(".ssCar-bg li").hide();
            for (var k = 0; k < index; k++) {
                $(".ssCar-bg li[index=" + (indexmax - k) + "]").show();     //显示第一组图片
            }
            $(".ssCar-bg li[index=" + indexmax + "]").addClass("active");
            current = indexmax;
        }
        if (current % index == 0) {
            //到底每一组图片的  最后一张图的时候
            $(".ssCar-bg li").hide();
            for (var i = 1; i <= index; i++) {    //当前往后数6张图片  设置为显示
                $(".ssCar-bg li[index=" + (current - i) + "]").show();
            }
        }
        var url = $(".ssCar-bg li.active").children("a").attr("data-url");

        $(".ssCar-bg .play-img a").attr("href", url);
    })
    //洒水车首页  缩约图效果  结束


    //配件产品内页  换图片效果
    $("#list-imgPJ .icon>div").mouseenter(function () {
        $("#list-imgPJ .icon>div").removeClass("active");
        $(this).addClass("active");
        var imgsrc = $(this).attr("data-pic");
        $("#list-imgPJ .imgBg img").attr("src", imgsrc);
    })


    //固定底部 切换
    $(".fixedBM .div-group>div").click(function () {
        if ($(this).attr("data-toggle") != undefined) {
            var fixedID = $(this).attr("data-toggle");
            $(".fixedBM .div-group>div").removeClass("active");
            $(this).addClass("active");
            $(".fixed-change >div").hide();
            $("#" + fixedID).show();
        }
    });

    //咨询栏目页面  点击切换 轮播图
    $("#ZXnav-change >li").click(function () {
        $("#ZXnav-change >li").removeClass("active");
        $(this).addClass("active");
        var carouselID = $(this).attr("data-toggle");
        $(".ZXcarousel").hide();
        $("#" + carouselID).show();
    })





    //点击换一批图片 效果

    var page = 2;

    $("#refIcon").click(function () {
        $("#refImgList").empty();
        $.ajax({
            url:'http://mkache.com/site/tpzs?page='+page,
            type: "GET",
            success: function (data) {
                console.log(data);
                data = JSON.parse(data);
                var imglength = data.length;
                // alert(imglength);
                var strImg="";
                for(var i = 0; i<imglength; i++){
                    console.log(i);
                    strImg += '<div class="img-span"> <a href="'+data[i].link+'">  <img src="http://mkache.com'+data[i].pic+'" alt=""> </a><span>'+data[i].title+'</span></div>';
                }
                console.log('success  '+ JSON.stringify(data));
                $("#refImgList").append(strImg);
            },
            error: function (ret) {
                console.log('ERROR  '+ JSON.stringify(ret))
            }
        });
        page++;
        if(page >3){
            page = 1;
        }
    })
})