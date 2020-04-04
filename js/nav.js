var $slip = $('.main-header-right .navslip'),
    $lis = $('.main-header-right ul li'),
    $a = $('.main-header-right ul li:first')
    $as = $('.main-header-right ul li a'),
    index = 0;

//初始$slip样式
$slip.css({
    'width':$a.width(),
    'left':parseInt($a.css('marginLeft'))
});

//点击完成css样式更换，配合上css3属性：transition 完成滑动
$lis.click(function () {
    index = $(this).index();
    $slip.css({
        'width':$as.eq(index).width(),
        'left':parseInt($as.eq(index).position().left)
    })
});

