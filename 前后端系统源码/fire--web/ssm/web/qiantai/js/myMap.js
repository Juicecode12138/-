
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var option = {

    tooltip: {
      trigger: 'item',
    },
    visualMap: {

      type: 'piecewise',
      left: 10,
      top: 10,

      text: ['单位（个）'],


      showLabel: true,
      calculable: true,
      realtime: false,
      pieces: [{ gt: 18 }, { gt: 13, lte: 17 }, { gt: 8, lte: 12 }, { gt: 4, lte:7 }, { gte:0,lte: 4 }],
      inRange: {
        color: ['#C4EAFF', '#7FC9FF', '#413aff', '#ed4845', '#ec2b24',],
      },
    },
    series: [
      {
        name: '污染企业数量',
        type: 'map',
        map: 'china',
        roam: true,
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: '北京', value: 20 },
          { name: '天津', value: 0 },
          { name: '上海', value: 0 },
          { name: '重庆', value: 0 },
          { name: '河北', value: 0 },
          { name: '河南', value: 6},
          { name: '云南', value: 0 },
          { name: '辽宁', value: 0},
          { name: '黑龙江', value: 0 },
          { name: '湖南', value: 0 },
          { name: '安徽', value: 0 },
          { name: '山东', value: 0 },
          { name: '新疆', value: 0 },
          { name: '江苏', value: 0 },
          { name: '浙江', value: 0},
          { name: '江西', value: 0 },
          { name: '湖北', value: 0},
          { name: '广西', value: 0 },
          { name: '甘肃', value: 0 },
          { name: '山西', value: 0 },
          { name: '内蒙古', value: 0 },
          { name: '陕西', value: 0 },
          { name: '吉林', value: 0 },
          { name: '福建', value: 0 },
          { name: '贵州', value: 0 },
          { name: '广东', value: 0},
          { name: '青海', value: 0 },
          { name: '西藏', value: 0 },
          { name: '四川', value: 0 },
          { name: '宁夏', value: 0 },
          { name: '海南', value: 0 },
          { name: '台湾', value: 0 },
        ],
      },
    ],
  };


  myChart.on('click', function(params) {//设置点击事件
    var province = params.name;//获取选中省市的省市名称
    switch(province) {
      case '新疆':
        location.href = 'map-web/xinjiang.html';//测试效果：选中新疆并触发点击事件后跳转到百度首页
        break;
      case '西藏':
        location.href = 'map-web/xizang.html';
        break;
      case '云南':
        location.href = 'map-web/yunnan.html';
        break;
      case '广西':
        location.href = 'map-web/guangxi.html';
        break;
      case '广东':
        location.href = 'map-web/guangdong.html';
        break;
      case '海南':
        location.href = 'map-web/hainan.html';
        break;
      case '澳门':
        location.href = 'map-web/aomen.html';
        break;
      case '香港':
        location.href = 'map-web/xianggang.html';
        break;
      case '台湾':
        location.href = 'map-web/taiwan.html';
        break;
      case '福建':
        location.href = 'map-web/fujian.html';
        break;
      case '浙江':
        location.href = 'map-web/zhejiang.html';
        break;
      case '上海':
        location.href = 'map-web/shanghai.html';
        break;
      case '江苏':
        location.href = 'map-web/jiangsu.html';
        break;
      case '山东':
        location.href = 'map-web/shandong.html';
        break;
      case '天津':
        location.href = 'map-web/tianjin.html';
        break;
      case '北京':
        location.href = 'map-web/beijing.html';
        break;
      case '辽宁':
        location.href = 'map-web/liaoning.html';
        break;
      case '吉林':
        location.href = 'map-web/jilin.html';
        break;
      case '黑龙江':
        location.href = 'map-web/heilongjiang.html';
        break;
      case '内蒙古':
        location.href = 'map-web/neimenggu.html';
        break;
      case '宁夏':
        location.href = 'map-web/ningxia.html';
        break;
      case '青海':
        location.href = 'map-web/qinghai.html';
        break;
      case '甘肃':
        location.href = 'map-web/gansu.html';
        break;
      case '四川':
        location.href = 'map-web/sichuan.html';
        break;
      case '重庆':
        location.href = 'map-web/chongqing.html';
        break;
      case '贵州':
        location.href = 'map-web/guizhou.html';
        break;
      case '湖南':
        location.href = 'map-web/hunan.html';
        break;
      case '湖北':
        location.href = 'map-web/hubei.html';
        break;
      case '河南':
        location.href = 'map-web/henan.html';
        break;
      case '陕西':
        location.href = 'map-web/shanxi1.html';
        break;
      case '山西':
        location.href = 'map-web/shanxi.html';
        break;
      case '河北':
        location.href = 'map-web/hebei.html';
        break;
      case '安徽':
        location.href = 'map-web/anhui.html';
        break;
      case '江西':
        location.href = 'map-web/jiangxi.html';
        break;
      default:
        break;
    }
  });



  $.ajax({
    type : "post",
    async : true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
    url :  "../woaini7", //请求发送到Controller处，路径我上面写好了的，直接拼的，你自己按照你的写
    data : {},
    dataType : "json", //返回数据形式为json
    success : function(result) {
      //请求成功时执行该函数内容，result即为服务器返回的json对象
     // console.log(result)

      myChart.hideLoading(); //隐藏加载动画
      myChart.setOption({ //加载数据图表
        series: [
          {
            data: [
              { name: '北京', value: result.A18 },
              { name: '天津', value: result.A24 },
              { name: '上海', value: 0 },
              { name: '重庆', value: result.A16 },
              { name: '河北', value: result.A26 },
              { name: '河南', value: 0 },
              { name: '云南', value: result.A17 },
              { name: '辽宁', value: result.A8 },
              { name: '黑龙江', value: result.A28},
              { name: '湖南', value: result.A27},
              { name: '安徽', value: result.A29},
              { name: '山东', value: result.A6 },
              { name: '新疆', value: result.A19 },
              { name: '江苏', value: result.A11 },
              { name: '浙江', value: result.A10 },
              { name: '江西', value:result.A12 },
              { name: '湖北', value: result.A21 },
              { name: '广西', value: result.A22 },
              { name: '甘肃', value: result.A23 },
              { name: '山西', value: result.A4 },
              { name: '内蒙古', value: result.A30 },
              { name: '陕西', value: result.A25},
              { name: '吉林', value: result.A5 },
              { name: '福建', value: result.A2 },
              { name: '贵州', value: result.A7 },
              { name: '广东', value: result.A1 },
              { name: '青海', value: result.A15 },
              { name: '西藏', value: result.A13 },
              { name: '四川', value: result.A14 },
              { name: '宁夏', value: result.A9 },
              { name: '海南', value: result.A20 },
              { name: '台湾', value: result.A3 }

            ]
      }
      ]}
      );



    }
  })


  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
