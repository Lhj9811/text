var myChart2 = echarts.init($('.main-view-columnar')[0]);
var columnar = {
    title:{
        text: '柱状图数据展示',
        left: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLine:{       //y轴虚线
                "show":false
            },
            axisTick:{       //y轴刻度线
                "show":false
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:'商品数',
            axisLabel:{
                margin:10,
            },
            axisLine:{       //y轴虚线
                "show":false
            },
            axisTick:{       //y轴刻度线
                "show":false
            },
            splitLine:{     //设置虚线
                lineStyle:{
                    type:'dotted'
                }
            }
        },
    ],
    series: [
        {
            name: '点击访问',
            type: 'bar',
            barWidth: '25%',
            data:[],
        }
    ]
};
