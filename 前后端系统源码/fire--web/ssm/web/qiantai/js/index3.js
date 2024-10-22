(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);
(function() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var sb= document.getElementById("area").innerText
    option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["第一季度", "第二季度", "第三季度", "第四季度"],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: "预测总数",
                type: "pie",
                center: ["50%", "42%"],
                radius: ["40%", "60%"],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                    "#06b4ab",
                    "#06c8ab",
                    "#06dcab",
                    "#06f0ab"
                ],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 1, name: "第一季度" },
                    { value: 2, name: "第二季度" },
                    { value: 3, name: "第三季度" },
                    { value: 4, name: "第四季度" }
                ]
            }
        ]
    };
    var company_id = $.getUrlParam('param');
    var date=$.getUrlParam('param1')
    $.ajax({
        type : "post",
        async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url :  "../../woaini16", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
        data : {company_id:company_id,date:date},
        dataType : "json", //返回数据形式为json
        success : function(result) {
            // console.log(result)
            myChart.hideLoading(); //隐藏加载动画
            myChart.setOption({ //加载数据图表

                series : [ {
                    // 根据名字对应到相应的系列

                    data : [
                        { value: result.oneSeason, name: "第一季度" },
                        { value: result.twoSeason, name: "第二季度" },
                        { value: result.threeSeason, name: "第三季度" },
                        { value: result.fourSeason, name: "第四季度" }
                    ]
                } ]
            });

        },
        // error : function(errorMsg) {
        //   //请求失败时执行该函数
        //   alert("图表请求数据失败!");
        //   myChart.hideLoading();
        // }
    })

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })
(function() {
    var mydate=$.getUrlParam("param")
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar .chart"));

    var data = [];
    var titlename = ["餐饮行业      ", "电器行业      ", "学校商场      ", "工业企业      ", "居民家庭      ","森林      "];
    var valdata = [9.2,7.4,8.3,5.5,6.7,5.4];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#8B78F6"];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",

                    rich: {
                        lg: {
                            backgroundColor: "#339911",
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: "",
                type: "bar",
                yAxisIndex: 0,
                data:[
                    {
                        name:"w000",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[0],
                    },
                    {
                        name:"w211",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[1],
                    },
                    {
                        name:"w001",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[2],
                    },
                    {
                        name:"w018",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[3],
                    },
                    {
                        name:"w203",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[4],
                    },
                    {
                        name:"w201",
                        url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                        value:valdata[5],
                    },
                ],
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}"
                    }
                }
            },
            // {
            //     name: "框",
            //     type: "bar",
            //     yAxisIndex: 1,
            //     barCategoryGap: 50,
            //     data: [100, 100, 100, 100, 100,100],
            //     barWidth: 15,
            //     itemStyle: {
            //         normal: {
            //             color: "none",
            //             borderColor: "#00c1de",
            //             borderWidth: 3,
            //             barBorderRadius: 15
            //         }
            //     }
            // }
        ]
    }

    var company_id = $.getUrlParam('param');
    var date=$.getUrlParam('param1')
    $.ajax({
        type : "post",
        async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url :  "../../woaini15", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
        data : {company_id:company_id,date:date},
        dataType : "json", //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            //console.log(result.second)
            //alert(result.second.w00000sum)
            valdata.push(result.w00000sum); //挨个取出类别并填入类别数组
            valdata.push(result.w01001sum);
            valdata.push(result.w01018sum);
            valdata.push(result.w21001sum);
            valdata.push(result.w21003sum);
            valdata.push(result.w21011sum);

            // valdata.push(result[i].num); //挨个取出销量并填入销量数组

            myChart.hideLoading(); //隐藏加载动画
            myChart.setOption({ //加载数据图表
                yAxis : [
                    {
                        data: titlename
                    },
                    {
                        data : []
                    }],
                series : [ {
                    // 根据名字对应到相应的系列

                    data : valdata
                } ]
            });



        },
        // error : function(errorMsg) {
        //   //请求失败时执行该函数
        //   alert("图表请求数据失败!");
        //   myChart.hideLoading();
        // }
    })
    myChart.setOption(option)
    window.addEventListener("resize", function() {
            myChart.resize();
        }
    );
})();
// 折线图 优秀作品
(function() {
    var sb= document.getElementById("area").innerText
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        // color: ['pink'],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                data: [
                    "餐饮行业",
                    "电器行业",
                    "学校商场",
                    "工业企业",
                    "居民家庭",
                    "森林",
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "8"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "火情数量",
                type: "bar",
                barWidth: "35%",
                data: [
                    {
                        value:1 ,
                        itemStyle: {
                            color: '#1089E7'
                        }
                    },
                    {
                        value: 0.7,
                        itemStyle: {
                            color: '#F57474'
                        }
                    },
                    {
                        value: 0.8,
                        itemStyle: {
                            color: '#56D0E3'
                        }
                    },
                    {
                        value: 0.5,
                        itemStyle: {
                            color: '#F8B448'
                        }
                    },
                    {
                        value: 0.6,
                        itemStyle: {
                            color: '#8B78F6'
                        }
                    },
                    {
                        value: 0.5,
                        itemStyle: {
                            color: '#8B78F6'
                        }
                    },
                ],
                itemStyle: {
                    barBorderRadius: 0
                }
            }
        ]
    };
    let dat=[];
    var company_id = $.getUrlParam('param');
    var date=$.getUrlParam('param1')
    console.log(date)
    console.log(company_id)
    $.ajax({
        type : "post",
        async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url :  "../../woaini15", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
        data : {company_id:company_id,date:date},
        dataType : "json", //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            // console.log(result)
            dat.push(result.second)
            myChart.hideLoading(); //隐藏加载动画
            myChart.setOption({ //加载数据图表

                series : [
                    {
                        data:[
                            {
                                value:result.Ave_con_w00000,
                                itemStyle: {
                                    color: '#1089e7'
                                }
                            },
                            {
                                value:result.Ave_con_w01001,
                                itemStyle: {
                                    color:'#c7e710'
                                }
                            },
                            {
                                value:result.Ave_con_w01018,
                                itemStyle: {
                                    color: '#6a10e7'
                                }
                            },
                            {
                                value:result.Ave_con_w21001,
                                itemStyle: {
                                    color: '#c710e7'
                                }
                            },
                            {
                                value:result.Ave_con_w21003,
                                itemStyle: {
                                    color: '#10d5e7'
                                }
                            },
                            {
                                value:result.Ave_con_w21011,
                                itemStyle: {
                                    color: '#c7e710'
                                }
                            }
                        ]
                    }
                ]
            });



        },
        // error : function(errorMsg) {
        //   //请求失败时执行该函数
        //   alert("图表请求数据失败!");
        //   myChart.hideLoading();
        // }
    })
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });



    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();

// 点位分布统计模块
/*(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
*/


