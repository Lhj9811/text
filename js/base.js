$.ajax({
    type:'GET',
    url:'https://edu.telking.com/api/',
    timeout:8000,
    async:true,
    dataType: "jsonp",
    jsonp:"callback",
    crossDomain: true,
    data:{type:'week'},
    success:function( msg ){
        //饼状图
        let data = [];
        for(let i=0;i<msg.data.series.length;i++){
            data.push({"value":msg.data.series[i],"name":msg.data.xAxis[i]})
        }
        pancake.series[0].data = data;
        myChart1.setOption(pancake,true);
        //柱状图
        columnar.xAxis[0].data = msg.data.xAxis;
        columnar.series[0].data = msg.data.series;
        myChart2.setOption(columnar,true);
    }
})