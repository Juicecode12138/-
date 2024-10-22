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
                text: "第一季度",
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
                text: "各省市火情数量占比",
                x: "20",
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
        color: [
            "#37a2da",
            "#32c5e9",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea",
        ],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {d}%<br/>",
        },
        toolbox: {
            show: true,
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
                radius: [0, 150],

                data: [
                    { name: '北京', value: 1.2 },
                    { name: '天津', value: 3.1 },
                    { name: '上海', value: 2.6 },
                    { name: '重庆', value: 6.4 },
                    { name: '河北', value: 3.2 },
                    { name: '河南', value: 2.6},
                    { name: '云南', value: 1.7 },
                    { name: '辽宁', value: 2.1},
                    { name: '黑龙江', value: 4.3 },
                    { name: '湖南', value: 3.0 },
                    { name: '安徽', value: 4.2 },
                    { name: '山东', value: 2.3 },
                    { name: '新疆', value: 1.1 },
                    { name: '江苏', value: 3.1 },
                    { name: '浙江', value: 2.5 },
                    { name: '江西', value: 3.6 },
                    { name: '湖北', value: 2.9},
                    { name: '广西', value: 4.3 },
                    { name: '甘肃', value: 1.4 },
                    { name: '山西', value: 3.6 },
                    { name: '内蒙古', value: 1.1 },
                    { name: '陕西', value: 3.2 },
                    { name: '吉林', value: 4.3 },
                    { name: '福建', value: 5.4 },
                    { name: '贵州', value: 6.8 },
                    { name: '广东', value: 3.8 },
                    { name: '青海', value: 2.6 },
                    { name: '西藏', value: 1.2 },
                    { name: '四川', value: 4.2 },
                    { name: '宁夏', value: 3.7 },
                    { name: '海南', value: 3.3 },
                    { name: '台湾', value: 5.4 },
                ],
            },
        ],
    };

    var season=$.getUrlParam("param")
    var date=$.getUrlParam("param1")
    //console.log(season)
    $.ajax({
        type : "post",
        async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url :  "../../woaini19", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
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
                        radius: [0, 150],

                        data: [
                            {name: '北京', value: result.beijing},
                            {name: '天津', value: result.tianjin},
                            {name: '上海', value: result.shanghai},
                            {name: '重庆', value: result.chongqing},
                            {name: '河北', value: result.hebei},
                            {name: '河南', value: result.henan},
                            {name: '云南', value: result.yunnan},
                            {name: '辽宁', value: result.liaoning},
                            {name: '黑龙江', value: result.heilongjiang},
                            {name: '湖南', value: result.hunan},
                            {name: '安徽', value: result.anhui},
                            {name: '山东', value: result.shangdong},
                            {name: '新疆', value: result.xinjiang},
                            {name: '江苏', value: result.jiangsu},
                            {name: '浙江', value: result.zhejiang},
                            {name: '江西', value: result.jiangxi},
                            {name: '湖北', value: result.hubei},
                            {name: '广西', value: result.guangxi},
                            {name: '甘肃', value: result.gansu},
                            {name: '山西', value: result.shanxi},
                            {name: '内蒙古', value: result.neimenghu},
                            {name: '陕西', value: result.shanxi1},
                            {name: '吉林', value: result.jilin},
                            {name: '福建', value: result.fujian},
                            {name: '贵州', value: result.guizhou},
                            {name: '广东', value: result.guangdong},
                            {name: '青海', value: result.qinghai},
                            {name: '西藏', value: result.xizang},
                            {name: '四川', value: result.sichuang},
                            {name: '宁夏', value: result.ningxia},
                            {name: '海南', value: result.hainan},
                            {name: '台湾', value: result.taiwang},
                        ]
                    }
                    ],}

            );
        },

    })

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();

// 表2模块
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    option = {
        title: [
            {
                text: "第一季度",
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
                x: "20",
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
                    { value: 1.0, name: "餐饮行业" },
                    { value: 0.7, name: "电器行业" },
                    { value: 0.8, name: "学校商场" },
                    { value: 0.5, name: "工业企业" },
                    { value: 0.6, name: "居民家庭" },
                    { value: 0.5, name: "森林" },
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
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();


