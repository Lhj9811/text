var myChart = echarts.init($('.main-view-curve')[0]);
$.ajax({
    type:'GET',     //请求方式
    url:'https://edu.telking.com/api/',     //请求地址
    timeout:8000,           //超时时间
    async:true,             //异步请求
    dataType: "jsonp",      //返回数据的格式
    jsonp:"callback",       //是否回调
    crossDomain: true,      //允许跨域
    data:{type:'month'},    //传递数据
    success:function( msg ){    //交互成功
        let data = [];
        for(let i =0;i<msg.data.xAxis.length;i++){
            data.push([msg.data.xAxis[i],msg.data.series[i]]);
        }
        option.series[0].data = data;
        myChart.setOption(option,true);
    },
    error:function ( err ) {    //交互失败
        console.log(err);
    }
})
var option = {
    title: {
        text: '曲线图数据展示',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine:{       //x轴虚线
            "show":false
        },
        axisTick:{       //x轴刻度线
            "show":false
        },
        axisLabel:{
            interval:1,
        },
    },
    yAxis: [
        {
            type: 'value',
            axisLine:{       //y轴虚线
                "show":false
            },
            axisTick:{       //y轴刻度线
                "show":false
            },
            axisLabel: {    //设置y轴文案
                formatter: '{value} 人',
            },
            splitLine:{     //设置虚线
                lineStyle:{
                    type:'dotted'
                }
            }
        }
    ],
    series: [
        {
            type: 'line',
            smooth: 0.3,
            lineStyle: {    //折线颜色+宽度
                color: 'rgb(137,178,245)',
                width: 3,
            },
            itemStyle: {
                normal: {
                    label: {    //拐点上显示数值
                        show:true,
                    },
                    color:'rgb(137,178,245)',
                    borderColor: 'rgb(137,178,245)',  // 拐点边框颜色
                },
            },
            areaStyle: {
                normal: {
                    color: 'rgb(243,246,254)' //改变区域颜色
                }
            },
            data:[]
        }
    ]
};


