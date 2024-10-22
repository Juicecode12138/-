var data = [
    {name: '辽阳', value: 200}
];
var geoCoordMap = {
    '辽阳':[123.172451205,41.2733392656]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
//加载百度地图
$(document).ready(function () {
    //设置echarts
    var myChart = echarts.init(document.getElementById('bmap'));

    option = {
        // backgroundColor: '#404a59',
        title: {
            text: '辽阳市地图',
            subtext: '',
            sublink: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
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



        bmap: {
            center: [123.172451205, 41.2733392656],
            zoom: 11,
            roam: true,
            mapStyle: {
                styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "on"
                        }
                    }
                ]
            }
        },

    };
    myChart.setOption(option);

    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
});