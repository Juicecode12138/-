/*获取到Url里面的参数*/
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

// 表1模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    option = {

        title: [
            {
                text: "The proportion of the number of fires in the location of high incidence of fires",
                x: "20",
                y: "20",
                textStyle: {
                    fontSize: "20",
                    fontWeight: "100",
                    color: "#c795bb",
                    textAlign: "center",
                    textShadowColor: "#000",
                    textShadowBlur: "1",
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
            },
            {
                text: "火情高发位置火情数量占比",
                x: "150",
                y: "45",
                textStyle: {
                    fontSize: "24",
                    fontWeight: "300",
                    color: "#d8a9bd",
                    textAlign: "center",
                    textShadowColor: "#000",
                    textShadowBlur: "1",
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                },
            },
        ],

        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {d}%<br/>",
        },
        legend: {
            type: "scroll",
            orient: "vertical",
            left: "1%",
            align: "left",
            top: "middle",
            textStyle: {
                color: "#8C8C8C",
            },
            height: 150,
        },
        series: [
            {
                name: "数量占比",
                type: "pie",
                //radius: "5%",
                radius: [0, 150],   //控制圆的的大小
                center: ["50%", "50%"],
                data: [
                    { value: 9.2, name: "餐饮行业" },
                    { value: 7.4, name: "电器行业" },
                    { value: 8.3, name: "学校商场" },
                    { value: 5.5, name: "工业企业" },
                    { value: 6.7, name: "居民家庭" },
                    { value: 5.4, name: "森林" },
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    // 3. 把配置和数据给实例对象
    var season=$.getUrlParam("param")
    console.log(season)
    var date=$.getUrlParam("param1")
    $.ajax({
        type : "post",
        async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url :  "../../woaini18", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
        data : {season:season,date:date},
        dataType : "json", //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            // console.log(result)
            myChart.setOption({ //加载数据图表
                series: [
                    {
                        name: "数量占比",
                        type: "pie",
                        //radius: "5%",
                        radius: [0, 150],   //控制圆的的大小
                        center: ["50%", "50%"],
                        data: [
                            {value: result.w000, name: "餐饮行业"},
                            {value: result.w001, name: "电器行业"},
                            {value: result.w018, name: "学校商场"},
                            {value: result.w201, name: "工业企业"},
                            {value: result.w203, name: "居民家庭"},
                            {value: result.w211, name: "森林"},
                        ]
                    }
                ]}
            );
        },

    })
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();


