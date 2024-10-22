(function() {
var map = new BMapGL.Map("main1");
// 创建地图实例
// 通过方法方式设置地图允许的最大最小级别
map.setMinZoom(4);  //最小级别
map.setMaxZoom(9); //最大级别
var point = new BMapGL.Point(105.403119,38.028658);
// 创建点坐标
map.centerAndZoom(point, 5);
// 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);
//开启鼠标滚轮缩放
map.setMapStyleV2({
    styleId: 'dc2a5bc5d3b39158c6eb7be7e0883a32'
});
// map.setMapType(BMAP_EARTH_MAP);//变为3d地图
/*  var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
  map.addControl(scaleCtrl);*/
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);
var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
map.addControl(cityCtrl);
//添加标注
var point = new BMapGL.Point(116.404, 39.915);
var marker = new BMapGL.Marker(point);        // 创建标注
map.addOverlay(marker);                     // 将标注添加到地图中
var myIcon = new BMapGL.Icon("markers.png", new BMapGL.Size(23, 25), {
    // 指定定位位置。
    // 当标注显示在地图上时，其所指向的地理位置距离图标左上
    // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
    // 图标中央下端的尖角位置。
    anchor: new BMapGL.Size(10, 25),
    // 设置图片偏移。
    // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
    // 需要指定大图的偏移位置，此做法与css sprites技术类似。
    imageOffset: new BMapGL.Size(0, 0 - 25)   // 设置图片偏移
});
// 创建标注对象并添加到地图

//背景轮廓/省/市/区

/*

  var bd = new BMapGL.Boundary();
  bd.get('北京市', function (rs) {
    // console.log('外轮廓：', rs.boundaries[0])
    // console.log('内镂空：', rs.boundaries[1])
    var hole = new BMapGL.Polygon(rs.boundaries, {
      fillColor: 'pink',  //填充颜色
      fillOpacity: 0.2
    });
    map.addOverlay(hole);
  });
*/

var bd = new BMapGL.Boundary();
bd.get('重庆市', function (rs) {
    // console.log('外轮廓：', rs.boundaries[0])
    // console.log('内镂空：', rs.boundaries[1])
    var hole = new BMapGL.Polygon(rs.boundaries, {
        fillColor: 'blue',
        fillOpacity: 0.2
    });
    map.addOverlay(hole);
});

var bd = new BMapGL.Boundary();
bd.get('云南省', function (rs) {

    // console.log('外轮廓：', rs.boundaries[0])
    // console.log('内镂空：', rs.boundaries[1])
    var hole = new BMapGL.Polygon(rs.boundaries, {
        fillColor: 'blue',
        fillOpacity: 0.2
    });
    map.addOverlay(hole);
});

var bd = new BMapGL.Boundary();
bd.get('四川省', function (rs) {
    // console.log('外轮廓：', rs.boundaries[0])
    // console.log('内镂空：', rs.boundaries[1])
    var hole = new BMapGL.Polygon(rs.boundaries, {
        fillColor: 'blue',
        fillOpacity: 0.2
    });
    map.addOverlay(hole);
});
//高度标记
/*  var map = new BMapGL.Map('main1', {
    style: {
      styleJson: styleJson2
    }
  });*/
/*  map.centerAndZoom(new BMapGL.Point(116.404, 39.925), 9);
  map.enableScrollWheelZoom(true);
  map.setTilt(50);*/

var bd1 = new BMapGL.Boundary();
bd1.get('北京市', function (rs) {
    let count = rs.boundaries.length;
    for (let i = 0; i < count; i++) {
        let path = [];
        let str = rs.boundaries[i].replace(' ', '');
        let points = str.split(';');
        for (let j = 0; j < points.length; j++) {
            let lng = points[j].split(',')[0];
            let lat = points[j].split(',')[1];
            path.push(new BMapGL.Point(lng, lat));
        }
        let prism = new BMapGL.Prism(path, 0, {   //第二个参数修改高度
            topFillColor: '#5679ea',
            topFillOpacity: 0.6,
            sideFillColor: '#5679ea',
            sideFillOpacity: 0.9
        });
        map.addOverlay(prism);

        // 绑定鼠标事件
        var events = ['dblclick', 'mouseover', 'mouseout'];
        for (let i = 0; i < events.length; i++) {
            prism.addEventListener(events[i], e => {
                switch (events[i]) {
                    case 'dblclick':
                        window.open('map-web/beijing.html')
                        break;
                    case 'mouseover':
                        e.target.setTopFillColor('#475fab');
                        e.target.setTopFillOpacity(1);
                        break;
                    case 'mouseout':
                        e.target.setTopFillColor('#5679ea');
                        e.target.setTopFillOpacity(0.5);
                        break;
                }
            });
        }
    }
});
//给标注添加信息
var marker = new BMapGL.Marker(point);  // 创建标注
map.addOverlay(marker);              // 将标注添加到地图中
var opts = {
    width : 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : "故宫博物院" , // 信息窗口标题
    message:"这里是故宫"
}
var infoWindow = new BMapGL.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
marker.addEventListener("click", function(){
    map.openInfoWindow(infoWindow, point); //开启信息窗口
});

//点击事件，获取点击并跳转网页
/*  map.addEventListener('click', function(e) {
    // alert('click!')
    window.open('https://www.baidu.com/')
  });*/

// --- 添加行政区划 ---
var dist = new BMapGL.DistrictLayer({
    name: '(天津市)',
    kind: 1,
    fillColor: '#618bf8',
    fillOpacity: 1,
    strokeColor: '#daeafa',
    viewport: true
});
map.addDistrictLayer(dist);

// --- 行政区划添加鼠标事件 ---
dist.addEventListener('mouseover', function (e) {
    e.currentTarget.setFillColor('#9169db');
});
dist.addEventListener('mouseout', function (e) {
    e.currentTarget.setFillColor(e.currentTarget.style.fillColor);
    /*    map.addEventListener('dblclick', function(e) {
          // alert('click!')
          window.open('https://www.baidu.com/')
        });*/
});

//省级行政区划分

var proname = '山东省';
var prokind = 1;
var dist = null;

// --- 添加行政区 ---
function addDis(proname, prokind) {
    map.removeDistrictLayer(dist);
    dist = new BMapGL.DistrictLayer({
        name: '(' + proname + ')',
        kind: prokind,
        fillColor: '#618bf8',
        strokeColor: '#daeafa',
        viewport: true
    });
    map.addDistrictLayer(dist);
}
addDis(proname, prokind);

})();