var $imgs = $('#img li'),
    $prev = $('#prev'),
    $next = $('#next'),
    $icons = $('#icon ul li'),
    $wrap = $('#img'),
    $box = $('.rotation-chart-content'),
    $btn = $('.rotation-chart-btn'),
    index = 0,
    now = new Date(),
    timer = null;

var $imgsW =  -$imgs.width();

$prev.click(()=>{
    if(new Date()-now <500)return;      //距离上次轮播时间少于500ms，则不轮播
    index--;
    if(index<0)index=$imgs.length-1;
    play();
});

$next.click(()=>{
    if(new Date()-now <500)return;
    index++;
    if(index>$imgs.length-1)index=0;
    play();
});

$icons.click(function(){
    if(new Date()-now <500)return;
    index = $(this).index();
    play()
});

$box.hover(()=>{
    clearInterval( timer );
    $btn.show();    //左右按钮显示
},()=>{
    $btn.hide();    //左右按钮隐藏
    fn()
})

$(window).ready(fn());  //页面加载完成后启动轮播

function play() {      //轮播函数
    let X = $imgsW * index;
    now = new Date();
    $wrap.css({
        "transform": `translateX( ${X}px )`,
    })
    $icons.eq(index).addClass('on').siblings().removeClass('on')
};

function fn() {     //定时轮播
    timer = setInterval(function () {
        index++;
        if(index>$imgs.length-1)index=0;
        play()
    },1500)
};