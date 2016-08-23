define(['jquery'],function($) {
    return function(rollBtn,options) {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        if(arguments.length==1 && typeof arguments[0]=='object'){
            var options = arguments[0];
            if(options.destination){
                var destination = $('#'+options.destination);
                _rollTo(destination);
            }else{
                console.warn('请在参数中写上destination');
            }
        }else{
            var rollBtn = typeof rollBtn=='object'?rollBtn:$(rollBtn);
            rollBtn.click(function(){
                if(options && options.destination){
                    var destination = $('#'+options.destination);
                }else{
                    var destination = $('#'+$(this).data('destination'));
                }
                _rollTo(destination);
            });
        };

        function _rollTo(destination){
            var offset = options && options.offset?parseInt(options.offset):0;
            var speed = Math.abs((destination.offset().top+offset-document.body.scrollTop)/10);
            $body.animate({
                scrollTop: destination.offset().top+offset
            },speed,'linear');
            console.log('aaa');
            //滚动结束后执行方法 可能为undefined
            !(typeof(options.endFun) == "undefined") &&setTimeout(options.endFun,speed);
            return false;
        }
    }
});