$(function () {
    $('#projects-list ul').on('click','li',function(){
        var now=$(this);
        var index=now.parent('ul').index();  //点击标签的对应行号
        var activeRow;  //点击标签所在行（当前操作行）
        if(!now.hasClass('active')){
            // 如果点击的是左侧按钮
            if(now.parents('.list-left').length==1){
                // 找到主区域的对应行（当前操作行）
                activeRow=$('#projects-list .list-main ul').eq(index);
            }else{
                // 如果点击的是主区域的按钮，找到左侧对应行（当前操作行）
                activeRow=$('#projects-list .list-left ul').eq(index);
                // 判断左侧区域如果没有active类，找到主区域对应行（当前操作行）去删除对应active类
                if(activeRow.find('li.active').length!==1){
                    activeRow=$('#projects-list .list-main ul').eq(index);
                }
            }
            // 去掉当前操作行原来的active类
            activeRow.find('li.active').removeClass('active');
            now.addClass('active');
        }
    });
});