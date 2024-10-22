(function ($) {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
})(jQuery);
// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ['pink'],
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
          "1-2月",
          "3-4月",
          "5-6月",
          "7-8月",
          "9-10月",
          "11-12月",
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "10"
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
          { value: 0.63, name: "1-2",url: "./echarts/demo1-1.html?param=3" },
          { value: 0.59, name: "3-4",url: "./echarts/demo1-1.html?param=7"},
          { value: 0.82, name: "5-6" ,url: "./echarts/demo1-1.html?param=11"},
          { value: 0.73, name: "7-8", url: "./echarts/demo1-1.html?param=15",selected: true },
          { value: 0.76, name: "9-10" ,url: "./echarts/demo1-1.html?param=19"},
          { value: 0.55, name: "11-12" ,url: "./echarts/demo1-1.html?param=23"},
        ],
        itemStyle: {
          barBorderRadius: 0
        }
      }
    ]
  };
  var mydate=$.getUrlParam("param")

  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini6", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {date:mydate},
    dataType : "json", //返回数据形式为json
    success : function(result) {
      //请求成功时执行该函数内容，result即为服务器返回的json对象
      // console.log(result)

      let valdata=[];
      valdata.push(result.errcom1_2)
      valdata.push(result.errcom3_4)
      valdata.push(result.errcom5_6)
      valdata.push(result.errcom7_8)
      valdata.push(result.errcom9_10)
      valdata.push(result.errcom11_12)
      myChart.setOption({ //加载数据图表

        series : [ {
          // 根据名字对应到相应的系列

          data: [
            { value: valdata[0], name: "1-2",url: "./echarts/demo1-1.html?param=3&param1="+mydate },
            { value: valdata[1], name: "3-4",url: "./echarts/demo1-1.html?param=7&param1="+mydate },
            { value: valdata[2], name: "5-6" ,url: "./echarts/demo1-1.html?param=11&param1="+mydate },
            { value: valdata[3], name: "7-8", url: "./echarts/demo1-1.html?param=15&param1="+mydate ,selected: true },
            { value: valdata[4], name: "9-10" ,url: "./echarts/demo1-1.html?param=19&param1="+mydate },
            { value: valdata[5], name: "11-12" ,url: "./echarts/demo1-1.html?param=23&param1="+mydate },
          ]
        } ]
      });



    },

  })

  myChart.on("click", function(params) {
    console.log(params);
    if (params.name == "1-2") {
      window.open(params.data.url) ;
    }else if(params.name == "3-4"){
      window.open(params.data.url) ;
    } else if(params.name == "5-6"){
      window.open(params.data.url) ;
    } else if(params.name == "7-8"){
      window.open(params.data.url) ;
    }
    else if(params.name == "9-10"){
      window.open(params.data.url) ;
    }
    else if(params.name == "11-12"){
      window.open(params.data.url) ;
    }
  })

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2019", data: [] },
    { year: "2020", data: [] }
  ];

  // $(".bar h2 ").on("click", "a", function() {
  //   option.series[0].data = dataAll[$(this).index()].data;
  //   myChart.setOption(option);
  // });
})();

// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  let data1 = {
    year: [
      [],
      []
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#ed3f35","#00f2f1"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)",
        fontSize: "8",
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "未处理数据总量",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        // data: data1.year[0]
        data: [
          { value: 1.6, name: "1",url: "./echarts/demo2-1.html" },
          { value: 1.8, name: "2",url: "./echarts/demo2-1.html" },
          { value: 2.1, name: "3",url: "./echarts/demo2-1.html" },
          { value: 2.0, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 1.5, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 1.5, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 1.7, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 1.1, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 2.3, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 2.5, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 2.3, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 2.1, name: "4" ,url: "./echarts/demo2-1.html"}
        ]
      },
      {
        name: "预警数据总量",
        type: "line",
        stack: "总量",
        smooth: true,
        //data: data1.year[1]
        data: [
          { value: 3.6, name: "1",url: "./echarts/demo2-1.html" },
          { value: 2.8, name: "2",url: "./echarts/demo2-1.html" },
          { value: 3.9, name: "3",url: "./echarts/demo2-1.html" },
          { value: 4.1, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 4.1, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 3.1, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 3.7, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 4.4, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 4.9, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 5.2, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 5.1, name: "4" ,url: "./echarts/demo2-1.html"},
          { value: 4.9, name: "4" ,url: "./echarts/demo2-1.html"}
        ]
      }
    ]
  };
  var mydate=$.getUrlParam("param")
  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini4", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {date:mydate},
    dataType : "json", //返回数据形式为json
    success : function(result) {
      //console.log(result)
          data1.year[0].push(result.uncompanysum1),
          data1.year[0].push(result.uncompanysum2),
          data1.year[0].push(result.uncompanysum3),
          data1.year[0].push(result.uncompanysum4),
          data1.year[0].push(result.uncompanysum5),
          data1.year[0].push(result.uncompanysum6),
          data1.year[0].push(result.uncompanysum7+1),
          data1.year[0].push(result.uncompanysum8),
          data1.year[0].push(result.uncompanysum9),
          data1.year[0].push(result.uncompanysum10),
          data1.year[0].push(result.uncompanysum11),
          data1.year[0].push(result.uncompanysum12),

          data1.year[1].push(result.companysum1),
          data1.year[1].push(result.companysum2),
          data1.year[1].push(result.companysum3),
          data1.year[1].push(result.companysum4),
          data1.year[1].push(result.companysum5),
          data1.year[1].push(result.companysum6),
          data1.year[1].push(result.companysum7),
          data1.year[1].push(result.companysum8),
          data1.year[1].push(result.companysum9),
          data1.year[1].push(result.companysum10),
          data1.year[1].push(result.companysum11),
          data1.year[1].push(result.companysum12),
      myChart.hideLoading(); //隐藏加载动画
      myChart.setOption({ //加载数据图表

        series: [
          {
            name: "未处理数据数量",
            type: "line",
            stack: "总量",
            // 是否让线条圆滑显示
            smooth: true,
            data: [
              { value: data1.year[0][0], name: "1",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][1], name: "2",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][2], name: "3",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][3], name: "4" ,url: "./echarts/demo2-1.html"},
              { value: data1.year[0][4], name: "5",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][5], name: "6",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][6], name: "7",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][7], name: "8" ,url: "./echarts/demo2-1.html"},
              { value: data1.year[0][8], name: "9",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][9], name: "10",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][10], name: "11",url: "./echarts/demo2-1.html" },
              { value: data1.year[0][11], name: "12" ,url: "./echarts/demo2-1.html"}
            ]
          },
          {
            name: "预警数据总量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: data1.year[1]
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


  //点击事件代码
  myChart.on("click", function(params) {
    console.log(params);
    // if (params.name == "1") {
    //   window.open(params.data.url) ;
    // }else if(params.name == "2"){
    //   window.open(params.data.url) ;
    // } else if(params.name == "3"){
    //   window.open(params.data.url) ;
    // } else if(params.name == "4"){
    //   window.open(params.data.url) ;
    // }
    window.open(params.data.url)
  })


  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

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
        name: "火情数据总量",
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
          { value: 1, name: "第一季度",url: "./echarts/demo3-1.html?param=1" },
          { value: 2, name: "第二季度",url: "./echarts/demo3-2.html?param=2" },
          { value: 3, name: "第三季度",url: "./echarts/demo3-3.html?param=3" },
          { value: 4, name: "第四季度",url: "./echarts/demo3-4.html?param=4" }
        ]
      }
    ]
  };
  var mydate=$.getUrlParam("param")
  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini3", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {date:mydate},
    dataType : "json", //返回数据形式为json
    success : function(result) {
      // console.log(result)
      myChart.hideLoading(); //隐藏加载动画
      myChart.setOption({ //加载数据图表

        series : [ {
          // 根据名字对应到相应的系列

          data : [
            { value: result.oneSeason, name: "第一季度",url: "./echarts/demo3-1.html?param=1&"+"param1="+mydate },
            { value: result.twoSeason, name: "第二季度" ,url: "./echarts/demo3-2.html?param=2&"+"param1="+mydate},
            { value: result.threeSeason, name: "第三季度" ,url: "./echarts/demo3-3.html?param=3&"+"param1="+mydate},
            { value: result.fourSeason, name: "第四季度" ,url: "./echarts/demo3-4.html?param=4&"+"param1="+mydate}
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

  //点击事件代码
  myChart.on("click", function(params) {
    console.log(params);
    if (params.name == "第一季度") {
      window.open(params.data.url) ;
    }else if(params.name == "第二季度"){
      window.open(params.data.url) ;
    } else if(params.name == "第三季度"){
      window.open(params.data.url) ;
    } else if(params.name == "第四季度"){
      window.open(params.data.url) ;
    }
  })

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//条状图
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

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
        ],    //有实际数据，才可以跳转
        yAxisIndex: 0,
        //data: valdata,
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
    ]
  }

  myChart.on("click", function(params) {
    console.log(params);

    if (params.name == "w000") {
      window.open(params.data.url) ;
    }else if(params.name == "w211"){
      window.open(params.data.url) ;
    } else if(params.name == "w001"){
      window.open(params.data.url) ;
    } else if(params.name == "w018"){
      window.open(params.data.url) ;
    }
    else if(params.name == "w203"){
      window.open(params.data.url) ;
    }
    else if(params.name == "w201"){
      window.open(params.data.url) ;
    }
  })


  var mydate=$.getUrlParam("param")
  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini1", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {date:mydate},
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

          series : [ {
            // 根据名字对应到相应的系列

            data : [
              {
                name:"w000",
                url: "./echarts/demo4-3.html?param=w00000&"+"param1="+mydate,
                value:valdata[0],
              },
              {
                name:"w001",
                url: "./echarts/demo4-3.html?param=w01001&"+"param1="+mydate,
                value:valdata[1],
              },
              {
                name:"w018",
                url: "./echarts/demo4-3.html?param=w01018&"+"param1="+mydate,
                value:valdata[2],
              },
              {
                name:"w201",
                url: "./echarts/demo4-3.html?param=w21001&"+"param1="+mydate,
                value:valdata[3],
              },
              {
                name:"w203",
                url: "./echarts/demo4-3.html?param=w21003&"+"param1="+mydate,
                value:valdata[4],
              },
              {
                name:"w211",
                url: "./echarts/demo4-3.html?param=w21011&"+"param1="+mydate,
                value:valdata[5],
              }
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

  myChart.setOption(option)
   window.addEventListener("resize", function() {
    myChart.resize();
  }
   );
})();
// 折线图 优秀作品
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
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
            name: "w000",
            url: "./echarts/demo4-2.html?param=w000",
            value:1 ,
            itemStyle: {
              color: '#1089E7'
            }
          },
          {
            name:"w001",
            url: "./echarts/demo4-2.html?param=w018",
            value: 0.7,
            itemStyle: {
              color: '#F57474'
            }
          },
          {
            name:"w018",
            url: "./echarts/demo4-2.html?param=w018",
            value: 0.8,
            itemStyle: {
              color: '#56D0E3'
            }
          },
          {
            name:"w201",
            url: "./echarts/demo4-2.html?param=w018",
            value: 0.5,
            itemStyle: {
              color: '#F8B448'
            }
          },
          {
            name:"w211",
            url: "./echarts/demo4-2.html?param=w018",
            value: 0.6,
            itemStyle: {
              color: '#8B78F6'
            }
          },
          {
            name:"w203",
            url: "./echarts/demo4-2.html?param=w018",
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
  var mydate=$.getUrlParam("param")
  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini2", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {date:mydate},
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
                name:"w000",
                url: "./echarts/demo4-2.html?param=w00000&"+"param1="+mydate,
                 value:result.Ave_con_w00000,
                itemStyle: {
                  color: '#1089e7'
                }
              },
              {
                name:"w001",
                url: "./echarts/demo4-2.html?param=w01001&"+"param1="+mydate,
                value: result.w01001sum,
                itemStyle: {
                  color:'#c7e710'
                }
              },
              {
                name:"w018",
                url: "./echarts/demo4-2.html?param=w01018&"+"param1="+mydate,
                value:result.Ave_con_w01018,
                itemStyle: {
                  color: '#6a10e7'
                }
              },
              {
                name:"w201",
                url: "./echarts/demo4-2.html?param=w21001&"+"param1="+mydate,
                value:result.Ave_con_w21001,
                itemStyle: {
                  color: '#c710e7'
                }
              },
              {
                name:"w203",
                url: "./echarts/demo4-2.html?param=w21003&"+"param1="+mydate,
                value:result.Ave_con_w21003,
                itemStyle: {
                  color: '#10d5e7'
                }
              },
              {
                name:"w211",
                url: "./echarts/demo4-2.html?param=w21011&"+"param1="+mydate,
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

  myChart.on("click", function(params) {
    console.log(params);
    if (params.name == "w000") {
      window.open(params.data.url) ;
    }else if(params.name == "w211"){
      window.open(params.data.url) ;
    } else if(params.name == "w001"){
      window.open(params.data.url) ;
    } else if(params.name == "w018"){
      window.open(params.data.url) ;
    }
    else if(params.name == "w203"){
      window.open(params.data.url) ;
    }
    else if(params.name == "w201"){
      window.open(params.data.url) ;
    }
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
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: ''
      // 副标题        ,subtext: '随机数'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['疑似火情总数']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          readOnly: false
        },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [{
      axisLine:{
        lineStyle:{
        color:'#f5cebe'
        },
      },
      type: 'category',
      boundaryGap: false,
      data: (function() {
        var now = new Date();
        var res = [];
        var len = 10;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
          now = new Date(now - 10000);
        }
        return res;
      })()
    }],
    yAxis: [{
      axisLine:{
        lineStyle:{
          color:"#f5cebe"
        }
      },
      type: 'value',
      scale: true,
      name: '疑似火情总数',
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
      {
        type: 'value',
        scale: true,
        name: '',
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#ffd700',
            lineStyle: {
              color: '#ffd700'
            }
          }
        },
        // data: (function() {
        //     var res = [];
        //     var len = 10;
        //     while (len--) {
        //         res.push(null);
        //     }
        //     return res;
        // })()
      },
      {
        name: '疑似火情总数',
        type: 'line',
        smooth: true,
        // itemStyle areaStyle 成为面积图的关键。
        itemStyle: {
          normal: {
            color: '#f7ff00',
            areaStyle: {
              type: 'default'
            },
            lineStyle: {
              color: '#f7ff00'
            }
          }
        },
        areaStyle: { // 实现蓝白渐变色
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(0, 153, 255)'
            }, {
              offset: 1,
              color: 'rgb(55,43,241)'
            }])
          }
        },
        data: (function() {
          var res = [];
          var len = 0;
          while (len < 10) {
            res.push(null);
            len++;
          }
          return res;
        })()
      }]
  };
  setInterval(function() {
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

    var data0 = option.series[0].data;
    var data1 = option.series[1].data;
    // data0.shift();
    // data0.push(Math.round(Math.random() * 80));
    data1.shift();
    data1.push(Math.round(Math.random() * 20+10));

    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);

    myChart.setOption(option);
  }, 10000);
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();




