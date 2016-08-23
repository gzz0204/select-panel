var clickStatus,clickIndex;
// 配置路径
require.config({
	　　baseUrl: "js/lib",
　　　　paths: {
　　　　　　"jquery": "http://ajax.aspnetcdn.com/ajax/jquery/jquery-2.1.1.min"
　　　　}
});
//点击导航菜单跳到锚点
require( ['../scrollTo'],function(scrollTo){
    var navAnchor = new scrollTo('.navbar-link',{
            offset:-30,
            endFun:function () {
                clickStatus=false;
            }
        });
});
// 顶部导航栏样式改变（点击滚动）
require( ['jquery'],function($){
    // 获取页面所有锚点
    var $anchorList=$('#main-body a[id^="anchor-"]');
    var $n=$anchorList.length;
    // 判断到达页面底部时需要的参数，目前暂不需要
    // var docHeight=Math.round($(document).height());
    // var beforeScrollTop=Math.round($(window).scrollTop());
    $(window).scroll(function(event){
        // 页面卷起高度
        var targetTop = Math.round($(this).scrollTop());
        // 页面窗口高度，之前需求是根据滚动方向改变参考位置，现在不需要判断方向
        // var wHeight = Math.round($(window).height());
        // 导航栏高度
        var $navHeight=Math.round($('#navbar').height());
        // 用于比较位置的高度
        var targetHeight=targetTop+$navHeight;
        // 二分法判断区间
        var left=0;
        var right=$n-1;
        var mid;
        // 判断页面到达底部时条件
        // if(targetTop+wHeight<docHeight){
            console.log(targetHeight);
            while(left<=right){
                mid=Math.floor((left+right)/2);
                // 取当前锚点的高度
                var $anchorMid=Math.floor($($anchorList[mid]).offset().top);
                if(targetHeight>=$anchorMid){
                    // 如果大于的话，判断是不是最后一个锚点
                    if(mid+1>$n-1){
                        navbarActive($n-1);
                        break;
                    }else{
                        // 取当前锚点的下一个的高度
                        var $anchorMidR=Math.floor($($anchorList[mid+1]).offset().top);
                        // 判断在不在[mid,mid+1]两个锚点之间
                        if(targetHeight<=$anchorMidR){
                            navbarActive(mid);
                            console.log(targetHeight+':'+$anchorMidR);
                            break;
                        }else{
                            left=mid+1;
                        }
                    }
                }else{
                    if(mid-1<0){
                        navbarActive(0);
                        break;
                    }else{
                        var $anchorMidL=Math.floor($($anchorList[mid-1]).offset().top);
                        if(targetHeight>=$anchorMidL){
                            navbarActive(mid-1);
                            break;
                        }else{
                            right=mid-1;
                        }
                    }
                }
            }
            // 同上为了判断页面滚到底部
        // }else{
        //     navbarActive($n-1);
        //     // console.log('到底了'+targetTop+':'+wHeight+':'+docHeight);
        // }
    });
    // 点击顶部导航栏效果
    $("#navbar li").on('click',function () {
        clickIndex=$(this).index();
        clickStatus=true;
        navbarActive(clickIndex);
    });
    // 添加导航栏样式
    function navbarActive(index) {
        // 如果点击状态是true,则导航栏样式以点击为准。
        if(clickStatus){
            index=clickIndex;
        }
        var $now=$('#navbar li').eq(index).children('a');
        $('#navbar li a.active').removeClass('active');
        $now.addClass('active');
        console.log(index);
    };
});
