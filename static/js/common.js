/*!
* @project : DataPlane
* @version : 0.1.0
* @author  : yyhuaisha
* @created : ray
* @description: xxx
*/

//~(function(Global, undefined) {

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'), 'vintage');
myChart.showLoading();
//var mapArr = new Array();

// 指定图表的配置项和数据
var geoCoordMap = {
    '上海市': [121.4648, 31.2891],
    '东莞市': [113.8953, 22.901],
    '东营市': [118.7073, 37.5513],
    '中山市': [113.4229, 22.478],
    '临汾市': [111.4783, 36.1615],
    '临沂市': [118.3118, 35.2936],
    '丹东市': [124.541, 40.4242],
    '丽水市': [119.5642, 28.1854],
    '乌鲁木齐市': [87.9236, 43.5883],
    '佛山市': [112.8955, 23.1097],
    '保定市': [115.0488, 39.0948],
    '兰州市': [103.5901, 36.3043],
    '包头市': [110.3467, 41.4899],
    '北京市': [116.4551, 40.2539],
    '北海市': [109.314, 21.6211],
    '南京市': [118.8062, 31.9208],
    '南宁市': [108.479, 23.1152],
    '南昌市': [116.0046, 28.6633],
    '南通市': [121.1023, 32.1625],
    '厦门市': [118.1689, 24.6478],
    '台州市': [121.1353, 28.6688],
    '合肥市': [117.29, 32.0581],
    '呼和浩特市': [111.4124, 40.4901],
    '咸阳市': [108.4131, 34.8706],
    '哈尔滨市': [127.9688, 45.368],
    '唐山市': [118.4766, 39.6826],
    '嘉兴市': [120.9155, 30.6354],
    '大同市': [113.7854, 39.8035],
    '大连市': [122.2229, 39.4409],
    '天津市': [117.4219, 39.4189],
    '太原市': [112.3352, 37.9413],
    '威海市': [121.9482, 37.1393],
    '宁波市': [121.5967, 29.6466],
    '宝鸡市': [107.1826, 34.3433],
    '宿迁市': [118.5535, 33.7775],
    '常州市': [119.4543, 31.5582],
    '广州市': [113.5107, 23.2196],
    '廊坊市': [116.521, 39.0509],
    '延安市': [109.1052, 36.4252],
    '张家口市': [115.1477, 40.8527],
    '徐州市': [117.5208, 34.3268],
    '德州市': [116.6858, 37.2107],
    '惠州市': [114.6204, 23.1647],
    '成都市': [103.9526, 30.7617],
    '扬州市': [119.4653, 32.8162],
    '承德市': [117.5757, 41.4075],
    '拉萨市': [91.1865, 30.1465],
    '无锡市': [120.3442, 31.5527],
    '日照市': [119.2786, 35.5023],
    '昆明市': [102.9199, 25.4663],
    '杭州市': [119.5313, 29.8773],
    '枣庄市': [117.323, 34.8926],
    '柳州市': [109.3799, 24.9774],
    '株洲市': [113.5327, 27.0319],
    '武汉市': [114.3896, 30.6628],
    '汕头市': [117.1692, 23.3405],
    '江门市': [112.6318, 22.1484],
    '沈阳市': [123.1238, 42.1216],
    '沧州市': [116.8286, 38.2104],
    '河源市': [114.917, 23.9722],
    '泉州市': [118.3228, 25.1147],
    '泰安市': [117.0264, 36.0516],
    '泰州市': [120.0586, 32.5525],
    '济南市': [117.1582, 36.8701],
    '济宁市': [116.8286, 35.3375],
    '海口市': [110.3893, 19.8516],
    '淄博市': [118.0371, 36.6064],
    '淮安市': [118.927, 33.4039],
    '深圳市': [114.5435, 22.5439],
    '清远市': [112.9175, 24.3292],
    '温州市': [120.498, 27.8119],
    '渭南市': [109.7864, 35.0299],
    '湖州市': [119.8608, 30.7782],
    '湘潭市': [112.5439, 27.7075],
    '滨州市': [117.8174, 37.4963],
    '潍坊市': [119.0918, 36.524],
    '烟台市': [120.7397, 37.5128],
    '玉溪市': [101.9312, 23.8898],
    '珠海市': [113.7305, 22.1155],
    '盐城市': [120.2234, 33.5577],
    '盘锦市': [121.9482, 41.0449],
    '石家庄市': [114.4995, 38.1006],
    '福州市': [119.4543, 25.9222],
    '秦皇岛市': [119.2126, 40.0232],
    '绍兴市': [120.564, 29.7565],
    '聊城市': [115.9167, 36.4032],
    '肇庆市': [112.1265, 23.5822],
    '舟山市': [122.2559, 30.2234],
    '苏州市': [120.6519, 31.3989],
    '莱芜市': [117.6526, 36.2714],
    '菏泽市': [115.6201, 35.2057],
    '营口市': [122.4316, 40.4297],
    '葫芦岛市': [120.1575, 40.578],
    '衡水市': [115.8838, 37.7161],
    '衢州市': [118.6853, 28.8666],
    '西宁市': [101.4038, 36.8207],
    '西安市': [109.1162, 34.2004],
    '贵阳市': [106.6992, 26.7682],
    '连云港市': [119.1248, 34.552],
    '邢台市': [114.8071, 37.2821],
    '邯郸市': [114.4775, 36.535],
    '郑州市': [113.4668, 34.6234],
    '鄂尔多斯市': [108.9734, 39.2487],
    '重庆市': [107.7539, 30.1904],
    '金华市': [120.0037, 29.1028],
    '铜川市': [109.0393, 35.1947],
    '银川市': [106.3586, 38.1775],
    '镇江市': [119.4763, 31.9702],
    '长春市': [125.8154, 44.2584],
    '长沙市': [113.0823, 28.2568],
    '长治市': [112.8625, 36.4746],
    '阳泉市': [113.4778, 38.0951],
    '青岛市': [120.4651, 36.3373],
    '韶关市': [113.7964, 24.7028],
    '毕节地区': [110.7964, 23.7028],
    '克拉玛依市': [110.7964, 23.7028],
    '三明市': [110.7964, 23.7028],
    'beyond': [100, 100]
};


var errorAjax = function (url,status, errorMsg) {
    $.ajax({
	    type: "get",
	    async: false,
	    url: "/ajax/error.ashx",
	    data: { "time": formatDate(new Date()), "model": url, "para": status, "message": errorMsg },
	    dataType: "json",
	    success: function (result) {
	        //console.log("错误信息回传成功！");
	    },
	    error: function (errorMsg) {
	        //console.log("错误信息回传失败！");
	    }
	});
};
$.ajax({//动态数据获取
    type: "get",
    async: false, //同步执行
    url: "/data/map.json",
    dataType: "json",
    success: function (result) {
        geoCoordMap = result;
    },
    error: function (errorMsg) {
        console.log("error");
    }
});

var vm = avalon.define({
    $id: "map",
    //datatitle: [],
    datamap: [],
    datacity: [],
    datalen: 0
});
var dataResult = [];
var series = [];
var curDate = Date.parse(new Date());
var dataValue = 20;
var dataIncrease = 0;
var totleNum = true;
var seriesNull = [{ "name": "", "type": "lines", "zlevel": 3 }];
var dataStrNull = [];
var datamapNull = [["充值", [[{ "name": "beyond" }, { "name": "beyond" }, { "value": "0" }, { "time": "" }]]], ["提现", [[{ "name": "beyond" }, { "name": "beyond" }, { "value": "0" }, { "time": "" }]]], ["融资通过的申请", [[{ "name": "beyond" }, { "name": "beyond" }, { "value": "0" }, { "time": "" }]]], ["信用支付", [[{ "name": "beyond" }, { "name": "beyond" }, { "value": "0" }, { "time": "" }]]]];
var color = ['#ff8106', '#53c697', '#5d97fe', '#e06484'];

function unique(arr) {//过滤器
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[JSON.stringify(elem[0].name)]/* && !hash[JSON.stringify(elem[1].name)]*//* && !hash[JSON.stringify(elem[3].time)]*/) {
            result.push(elem);
            hash[JSON.stringify(elem[0].name)] = true;
            //hash[JSON.stringify(elem[1].name)] = true;
            //hash[JSON.stringify(elem[3].time)] = true;
            //console.log("-----arr: "+JSON.stringify(elem));
        }
        result.filter(function (item) {
            if (item[0].name === "") {
                elem[0].name = "beyond";
                elem[1].name = "beyond";
            };
        });
    }
    return result;
}
/*function getArrayItems(tempArr, num) {
  var data_title;
  var returnArrStr = new Array();
  for (var i = 0; i < tempArr.length; i++) {
    var Str = new Array();
    for (var j = 0; j < num; j++) {
        dataStrNull = [[{"name":"beyond"},{"name":"beyond"},{"value":0},{"time":""}]];
        if(tempArr[i].dataStr.length > 0) {
            //console.log("----tempArr[i].dataStr.length: "+tempArr[i].dataStr.length);
            var arrIndex = Math.floor(Math.random() * tempArr[i].dataStr.length);//随机数
            data_title = tempArr[i].title;
            Str[j] = tempArr[i].dataStr[arrIndex];
            //console.log("-----arrIndex: "+arrIndex);
            //console.log("-----: "+i+": "+JSON.stringify(tempArr[i]));
            tempArr[i].dataStr.splice(arrIndex, 1);//从数组中删除数据
            if(tempArr[i].dataStr.length < 1) {tempArr[i].dataStr = dataStrNull}
        } else {tempArr[i].dataStr = dataStrNull}

        //console.log(".....tempArr["+i+"].dataStr: "+JSON.stringify(tempArr[i].dataStr));
    }
    returnArrStr[i] = {"title":data_title,"dataStr": Str};
            //console.log("returnArrStr["+i+"]: "+JSON.stringify(returnArrStr[i]));
  }
  
  for(var i = 0; i < returnArrStr.length; i++) {
    if (returnArrStr[i].dataStr != "" && returnArrStr[i].dataStr != undefined && returnArrStr[i].dataStr != "undefined") {
        for(var j = 0; j < returnArrStr[i].dataStr.length; j++) {
            returnArrStr[i].dataStr[j][1].value = "60";
        }
        vm.datatitle[i] = "'"+ returnArrStr[i].title +"'";
        vm.datamap[i] = [returnArrStr[i].title,returnArrStr[i].dataStr];
        vm.datalen = vm.datalen + returnArrStr[i].dataStr.length;
    } else {
        vm.datatitle = [];
        vm.datamap = [];
        //console.log("----vm.datamap"+vm.datamap);
    }
  }
}*/
function getArrayItems(tempArr) {
    vm.datamap = datamapNull;
    dataIncrease = 0;
    curDate = Date.parse(new Date()) / 1000;//当前时间，秒

    if (tempArr != "" && tempArr != undefined) {
        for (var i = 0; i < tempArr.length; i++) {
            //var Str = []];
            if (tempArr[i].dataStr != "" && tempArr[i].dataStr != undefined && tempArr[i].dataStr != "undefined") {
                //dataStrNull = [[{"name":"beyond"},{"name":"beyond"},{"time":""}]];
                for (var j = 0; j < tempArr[i].dataStr.length; j++) {
                    var dataDate = tempArr[i].dataStr[j][3].time;
                    if (dataDate != "" && dataDate != undefined && dataDate != 0) {
                        var dataDateMS = Date.parse(dataDate) / 1000;
                    }

                    if (dataDateMS == (curDate - 900)) {
                        vm.datamap[i] = [tempArr[i].title, tempArr[i].dataStr];
                        if (tempArr[i].dataStr[j][2].value != "" && tempArr[i].dataStr[j][2].value != undefined) {
                            dataIncrease = parseInt(dataIncrease) + parseInt(tempArr[i].dataStr[j][2].value);
                        }
                    } else {
                        vm.datamap[i] = datamapNull[i];
                    }
                }
            } else {
                vm.datamap[i] = datamapNull[i];
            }
        }
    }
}

function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second;
}
var mapAjax = function () {



    var d = new Date(curDate);
    $.ajax({//动态数据获取
        type: "get",
        async: false, //同步执行
        url: "/ajax/map.ashx",
        data: { "date": formatDate(new Date(d)), "interval": 30 },
        dataType: "json",
        success: function (result) {
            dataResult = [];
            for (var i = 0; i < result.length; i++) {
                dataResult.push({ title: result[i].title, dataStr: unique(result[i].dataStr) });
            }

            myChart.hideLoading();
        },
        error: function (errorMsg) {
            myChart.hideLoading();
            //var Msg = "地图数据请求失败！";
            errorAjax(this.url, errorMsg.status, errorMsg.statusText);
        }
    });
    $.ajax({
        type: "get",
        async: false, //同步执行
        url: "/ajax/mapCity.ashx",
        dataType: "json",
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                //vm.datacity.push({title: result[i].title, dataStr: result[i].dataStr});
                if (result[i].dataStr[0].name === "") result[i].dataStr[0].name = "beyond"
                vm.datacity[i] = [result[i].title, result[i].dataStr];
            }
        },
        error: function (errorMsg) {
            //console.log("当日发送点地图数据请求失败！");
            errorAjax(this.url, errorMsg.status, errorMsg.statusText);
        }
    });
};
//mapAjax();
var timeTicket = setInterval(function () {
    //mapAjax();
}, 900000);


var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var mapEach = function () {
    series = [];


    getArrayItems(dataResult);



    vm.datamap.forEach(function (item, i) {
        series.push({//迁移运动线条
            name: item[0],
            type: 'lines',
            zlevel: 3,
            effect: {
                show: true,
                period: 0.8,
                trailLength: 0.5,
                color: color[i],
                shadowBlur: 3,
                symbolSize: 2.3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2,
                }
            },
            label: {
                show: false
            },
            data: convertData(item[1])
        },
        {//城市原点及名称1
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                scale: 0,
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                //console.log("----g:   "+ JSON.stringify(dataItem));
                if (dataItem[1].name != "") {
                    //console.log("----geoCoordMap[dataItem[1].name]:"+ dataItem[1].name);
                    return {
                        name: dataItem[1].name,
                        value: (geoCoordMap[dataItem[1].name] || "").concat(dataValue)
                    };
                }
            })
        },
        {//城市原点及名称2
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                scale: 25,
                brushType: 'stroke'//波纹的填充方式
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: (geoCoordMap[dataItem[0].name] || "").concat(dataValue)
                };
            })
        });
    });
    vm.datacity.forEach(function (item, i) {
        series.push({//当日发送点地图数据
            name: item,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
                scale: 0
            },
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                if (dataItem.name != "") {
                    return {
                        name: dataItem.name,
                        value: (geoCoordMap[dataItem.name] || "").concat(dataValue)
                    };
                }
            })
        });
    });
};
mapEach();
var mapTicket = function () {
    myChart.clear();
    mapEach();
    option.series = series;
    if (series == null || series.length == 0) {
        option.series = seriesNull;
    }
    myChart.setOption(option);
}
setTimeout(setInterval(mapTicket, 1000), 3000);

var option = {
    backgroundColor: 'transparent',
    /*title : {
        left: 'center',
        top:'5%',
        textStyle : {
            color: '#fff',
        }
    },*/
    tooltip: {
        show: false,
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: '8%',
        bottom: 50,
        align: 'left',
        itemWidth: 10,
        itemHeight: 10,
        data: ['充值', '提现', '融资通过的申请', '信用支付'],
        //data: [vm.datatitle],
        textStyle: {
            color: '#666',
            fontSize: 12
        },
        selectedMode: 'multiple'
    },
    geo: {
        map: 'china',
        scaleLimit: {
            min: 1.02,
            max: 1.02
        },
        left: '22%',
        top: "15%",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#d1dce2',
                opacity: 0.6,
                borderColor: '#527187'
            },
            emphasis: {
                areaColor: '#89acc8',
                opacity: 0.6,
            }
        }
    },
    series: series
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//柱状图-当日融资渠道项目(自定义)

var maxPeakVal = 0;
function id(x) {
    if (typeof x == "string") return document.getElementById(x);
    return x;
}
function histogramFn(peak_val, cur_val, li_id, li_name) {
    peak_val = parseInt(peak_val);
    cur_val = parseInt(cur_val);
    console.log("-------724--maxPeakVal: "+maxPeakVal+" peak_val: "+peak_val+" cur_val: "+cur_val);

    var liId = id(li_id);
    var barBox = liId.getElementsByTagName('div')[0], liSp = liId.getElementsByTagName('span')[0];
    var bar = barBox.getElementsByTagName('a')[0], barBy = barBox.getElementsByTagName('a')[1], barP = barBox.getElementsByTagName('p')[0];

    var barBoxW = barBox.offsetWidth;
    var str_cur = parseFloat(cur_val).toLocaleString();

    if (maxPeakVal < peak_val && peak_val > cur_val || maxPeakVal < peak_val && peak_val == cur_val) { maxPeakVal = peak_val; }
    else if (maxPeakVal < peak_val && peak_val < cur_val || maxPeakVal == peak_val && peak_val < cur_val) { maxPeakVal = cur_val; }

    if (str_cur == undefined) {
        liSp.innerText = " ";
    } else {
        liSp.innerText = li_name;
    }
    if (str_cur == 0 || str_cur == "" || str_cur == undefined) {
        barP.innerText = 0;
    } else {
        barP.innerText = str_cur;
    }
    if (peak_val > cur_val) {//比较 峰值/当前值
        bar.style.width = cur_val / maxPeakVal * barBoxW + "px";
        barBy.style.left = cur_val / maxPeakVal * barBoxW + "px";
        barBy.style.width = 0;
        bar.title = cur_val + "元";
        barBy.title = cur_val - peak_val + "元";
    } else if (peak_val < cur_val) {
        bar.style.width = peak_val / maxPeakVal * barBoxW + "px";
        barBy.style.left = peak_val / maxPeakVal * barBoxW + "px";
        //barBy.style.width = (maxPeakVal - cur_val) / maxPeakVal * barBoxW + "px";
        barBy.style.width = (cur_val - peak_val) / maxPeakVal * barBoxW + "px";
        bar.title = peak_val + "元";
        barBy.title = cur_val - peak_val + "元";
    } else {
        bar.style.width = peak_val / maxPeakVal * barBoxW + "px";
        barBy.style.left = peak_val / maxPeakVal * barBoxW + "px";
        barBy.style.width = (cur_val - peak_val) / maxPeakVal * barBoxW + "px";
        bar.title = peak_val + "元";
        barBy.title = cur_val - peak_val + "元";
        if (parseInt(bar.style.width) < 1) { bar.style.width = 1 + "px" }
    }
    if (parseInt(bar.style.width) < 1) { bar.style.width = 1 + "px" }
    return maxPeakVal;
}


var doAjax3 = function () {
    $.ajax({//动态数据获取
        type: "get",
        async: false, //同步执行
        url: "/data/histogram.json",
        dataType: "json",
        success: function (result) {
            $("#capital_histogram1 > h2").text(result[0].title);
            $("#capital_histogram2 > h2").text(result[1].title);
            var dataStr3 = result[0].dataStr;
            var dataStr4 = result[1].dataStr;
            var curValAll1 = [], curValAll2 = [];
            var peakValAll1 = [], peakValAll2 = [];

            //峰值排序，并选择最大峰值
            for (var index in dataStr3) {
                curValAll1[index] = dataStr3[index].cur_val;
                peakValAll1[index] = dataStr3[index].peak_val;
            };
            for (var index in dataStr4) {
                curValAll2[index] = dataStr4[index].cur_val;
                peakValAll2[index] = dataStr4[index].peak_val;
            };
            curValAll1 = curValAll1.sort(function (a, b) {
                return b - a;
            });
            peakValAll1 = peakValAll1.sort(function (a, b) {
                return b - a;
            });
            curValAll2 = curValAll2.sort(function (a, b) {
                return b - a;
            });
            peakValAll2 = peakValAll2.sort(function (a, b) {
                return b - a;
            });

            //当前值排序
            function sortByKey(array, key) {
                return array.sort(function (a, b) {
                    var x = parseInt(a[key]); var y = parseInt(b[key]);
                    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
                });
            }
            dataStr3 = sortByKey(dataStr3, 'cur_val');
            dataStr4 = sortByKey(dataStr4, 'cur_val');

            for (var i = 0, j = 1; i < dataStr3.length; i++, j++) {
                histogramFn(peakValAll1, dataStr3[i].cur_val, "histogram_li" + j, dataStr3[i].name);
            }
            if (dataStr3.length < 1) { $("#histogram_li1").height(0); }
            if (dataStr3.length < 2) { $("#histogram_li2").height(0); }
            if (dataStr3.length < 3) { $("#histogram_li3").height(0); }

            maxPeakVal = 0;
            for (var i = 0, j = 4; i < dataStr4.length; i++, j++) {
                //histogramFn(peakValAll2, dataStr4[i].cur_val, "histogram_li" + j, dataStr4[i].name);
            }
            if (dataStr4.length < 1) { $("#histogram_li4").height(0); }
            if (dataStr4.length < 2) { $("#histogram_li5").height(0); }
            if (dataStr4.length < 3) { $("#histogram_li6").height(0); }
            maxPeakVal = 0;
        },
        error: function (errorMsg) {
            console.log("当日融资渠道项目数据请求失败！");
        }
    });
};
doAjax3();
var timeTicket = setInterval(function () {
    //doAjax3();
}, 5000);

//页面底部-具体数据
/*function capitalDataFn(div_id, name, capital_val, i) {
    var divId = id(div_id);
    var tag_li = divId.getElementsByTagName('li')[i];
    var tag_sp1 = tag_li.getElementsByTagName('span')[0];
    var tag_b = tag_li.getElementsByTagName('b')[0];

    var capital_str = parseFloat(capital_val).toLocaleString();
    if (capital_str == undefined) {
      tag_b.innerText = " ";
    } else{
      tag_b.innerText = capital_str;
    }

    tag_sp1.innerText = name;
}*/

var cVm = avalon.define({
    $id: "capital",
    datacapital: [],
    capitalVal: []
});

var runScroller = function () {
    var capital0Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital1Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital2Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital3Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital4Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital5Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital6Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital7Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    var capital8Scroller = Scroller.getNewInstance({
        width: 80,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    capital0Scroller.appendTo($("#capital_data li:eq('0') > div")[0]);
    capital1Scroller.appendTo($("#capital_data li:eq('1') > div")[0]);
    capital2Scroller.appendTo($("#capital_data li:eq('2') > div")[0]);
    capital3Scroller.appendTo($("#capital_data li:eq('3') > div")[0]);
    capital4Scroller.appendTo($("#capital_data li:eq('4') > div")[0]);
    capital5Scroller.appendTo($("#capital_data li:eq('5') > div")[0]);
    capital6Scroller.appendTo($("#capital_data li:eq('6') > div")[0]);
    capital7Scroller.appendTo($("#capital_data li:eq('7') > div")[0]);
    capital8Scroller.appendTo($("#capital_data li:eq('8') > div")[0]);

    var todayScroller = Scroller.getNewInstance({
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    todayScroller.appendTo(document.getElementById("todayTotal"));
    todayScroller.setStyle({
        margin: "0"
    });
    var historyScroller = Scroller.getNewInstance({
        width: 250,
        amount: 80,
        interval: 700,
        separatorType: Scroller.SEPARATOR.THOUSAND,
        separator: ","
    });
    historyScroller.appendTo(document.getElementById("historyTotal"));
	var cVmVal = [];
    for (var i = 0; i < 9;i++) {
    	cVmVal[i] = parseFloat(cVm.capitalVal[i] / 10000);
    	if (cVmVal[i] > 1) {cVmVal[i] = Math.round(cVmVal[i]);}
    	else if(cVmVal[i]==0){cVmVal[i] = 0;} 
    	else {cVmVal[i] = 1;}
    }
    var cVmVal9 = parseFloat(cVm.capitalVal[9]) + parseFloat(dataIncrease);
    if (cVmVal9 > 1) {cVmVal9 = Math.round(cVmVal9);} else if(cVmVal9==0){cVmVal9 = 0;} else {cVmVal9 = 1;}
    var cVmVal10 = parseFloat(cVm.capitalVal[10] / 10000) + parseFloat(dataIncrease / 10000);
    if (cVmVal10 > 1) {cVmVal10 = Math.round(cVmVal10);} else if(cVmVal10==0){cVmVal10 = 0;} else {cVmVal10 = 1;}

    todayScroller.scrollTo(cVmVal9);
    historyScroller.scrollTo(cVmVal10);
    capital0Scroller.scrollTo(cVmVal[1]);
    capital1Scroller.scrollTo(cVmVal[2]);
    capital2Scroller.scrollTo(cVmVal[3]);
    capital3Scroller.scrollTo(cVmVal[4]);
    capital4Scroller.scrollTo(cVmVal[5]);
    capital5Scroller.scrollTo(cVmVal[6]);
    capital6Scroller.scrollTo(cVmVal[7]);
    capital7Scroller.scrollTo(cVmVal[8]);
    setInterval(function () {
        todayScroller.scrollTo(cVmVal9);
        historyScroller.scrollTo(cVmVal10);
        capital0Scroller.scrollTo(cVmVal[0]);
        capital1Scroller.scrollTo(cVmVal[1]);
        capital2Scroller.scrollTo(cVmVal[2]);
        capital3Scroller.scrollTo(cVmVal[3]);
        capital4Scroller.scrollTo(cVmVal[4]);
        capital5Scroller.scrollTo(cVmVal[5]);
        capital6Scroller.scrollTo(cVmVal[6]);
        capital7Scroller.scrollTo(cVmVal[7]);
        capital8Scroller.scrollTo(cVmVal[8]);
    }, 1000);
};

var runLineChart = function () {
    //折线统计图-资产池留存资金
    var lineChart1 = echarts.init(document.getElementById('capital_line1'));
    var seriesLineXData = new Array();
    var seriesLineYData = new Array();
    var seriesTitle;
    var doAjax1 = function () {
        $.ajax({//动态数据获取
            type: "get",
            async: false, //同步执行
            url: "/ajax/lineChart1.ashx",
            dataType: "json",
            success: function (result) {
                var dataStr = result.dataStr;
                for (var i = 0; i < dataStr.length; i++) {
                    seriesLineXData[i] = dataStr[i].day;
                    seriesLineYData[i] = dataStr[i].capital / 10000;
                }
                //seriesTitle = result.lineChart1[0].title;
                document.getElementById("capital_line1_title").innerText = result.title;
                lineChart1.setOption(lineoption1);
            },
            error: function (errorMsg) {
                //console.log("资产池留存资金数据请求失败！");
                errorAjax(this.url, errorMsg.status, errorMsg.statusText);
            }
        });
    };
    var lineoption1 = {
        title: {
            show: false,
            /*text: seriesTitle,
            textStyle: {
                color: '#fff',
                fontWeight: 'lighter',
                fontSize: 22
            },
            left: '16px',
            borderColor: '#ff7e00',*/
            //borderWidth: 3
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['资产池留存资金', ]
        },
        grid: {
            left: '16px',
            right: '34px',
            bottom: '16px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                splitLine: { show: false },
                axisLabel: { show: true, textStyle: { color: '#fff' } },
                axisLine: { lineStyle: { color: '#86cbf5' } },
                axisTick: { lineStyle: { color: '#86cbf5' } },
                //data : ['1','3','5','7','9','11','13','15','17','19','21']
                data: seriesLineXData
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: { show: true, lineStyle: { color: '#86cbf5', opacity: 0.3 } },
                axisLabel: { show: true, textStyle: { color: '#fff' } },
                axisLine: { lineStyle: { color: '#86cbf5' } },
                axisTick: { lineStyle: { color: '#86cbf5' } }
            }
        ],
        series: [
            {
                name: '留存资金总额',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { color: '#bbefff' } },
                lineStyle: { normal: { color: '#86cbf5' } },
                areaStyle: { normal: { color: '#8ed4ff', opacity: 0.5 } },
                //data:[68000, 75000, 90000, 70000, 75000, 70000, 65000, 75000, 80000, 72000, 65000]
                data: seriesLineYData
            }
        ]
    };
    //doAjax1();
    var timeTicket = setInterval(function () {
        //doAjax1();
        lineChart1.setOption(lineoption1);
    }, 900000);

    //折线统计图-交易金额
    var lineChart2 = echarts.init(document.getElementById('capital_line2'));
    var seriesLineXData1 = new Array();
    var seriesLineYData1 = new Array();
    var seriesLineYData2 = new Array();
    var seriesTitle2;
    var doAjax2 = function () {
        $.ajax({//动态数据获取
            type: "get",
            async: false, //同步执行
            url: "/ajax/lineChart2.ashx",
            dataType: "json",
            success: function (result) {
                var dataStr2 = result.dataStr;
                for (var i = 0; i < dataStr2.length; i++) {
                    seriesLineXData1[i] = dataStr2[i].day;
                    seriesLineYData1[i] = dataStr2[i].recharge_cap / 10000;
                    seriesLineYData2[i] = dataStr2[i].withdraw_cap / 10000;
                }
                //seriesTitle2 = result.lineChart2[0].title;
                document.getElementById("capital_line2_title").innerText = result.title;
                lineChart2.setOption(lineoption2);
            },
            error: function (errorMsg) {
                //console.log("交易金额数据请求失败！");
                errorAjax(this.url, errorMsg.status, errorMsg.statusText);
            }
        });
    };


    var lineoption2 = {
        title: {
            show: false,
            /*text: seriesTitle2,
            textStyle: {
                color: '#fff',
                fontWeight: 'lighter',
                fontSize: 22
            },
            left: '16px',
            borderColor: '#ff7e00',*/
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            align: 'left',
            itemGap: 12,
            itemWidth: 8,
            itemHeight: 8,
            right: '100px',
            top: '0px',
            orient: 'horizontal',
            textStyle: { color: '#fff', fontSize: 10 },
            data: [
                { name: '充值', icon: 'rect' },
                { name: '提现', icon: 'rect' }
            ]
        },
        grid: {
            left: '16px',
            right: '34px',
            bottom: '16px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                nameTextStyle: { color: '#fff' },
                splitLine: { show: true, lineStyle: { color: '#bee5ff', opacity: 0.3 } },
                axisLabel: { show: true, textStyle: { color: '#fff' } },
                axisLine: { lineStyle: { color: '#86cbf5', opacity: 0.3 } },
                axisTick: { show: false },
                //data : ['1','3','5','7','9','11','13','15','17','19','21']
                data: seriesLineXData1
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: { show: true, lineStyle: { color: '#bee5ff', opacity: 0.3 } },
                axisLine: { lineStyle: { color: '#86cbf5', opacity: 0.3 } },
                axisTick: { show: false },
                axisLabel: { show: true, textStyle: { color: '#fff' } },
            }
        ],
        series: [
            {
                name: '充值',
                type: 'line',
                itemStyle: { normal: { color: '#4ac492' } },
                lineStyle: { normal: { color: '#4ac492' } },
                areaStyle: { normal: { color: '#4ac492', opacity: 0.5 } },
                //data:[90000, 88000, 85000, 75000, 78000, 68000, 64000, 62000, 58000, 59000, 52000]
                data: seriesLineYData1
            },
            {
                name: '提现',
                type: 'line',
                itemStyle: { normal: { color: '#53abec' } },
                lineStyle: { normal: { color: '#53abec' } },
                areaStyle: { normal: { color: '#53abec', opacity: 0.5 } },
                //data:[50000, 58000, 62000, 68000, 75000, 70000, 66000, 70000, 80000, 95000, 96000]
                data: seriesLineYData2
            }
        ]
    };
    //doAjax2();
    var timeTicket = setInterval(function () {
        //doAjax2();
        lineChart2.setOption(lineoption2);
    }, 900000);
}


var doAjax4 = function () {
    $.ajax({//动态数据获取
        type: "get",
        async: false, //同步执行
        url: "/ajax/capital_data.ashx",
        dataType: "json",
        success: function (result) {
            //var dataStr4 = result.capital_data;
            cVm.datacapital = result.capital_data;
            for (var i = 0; i < result.capital_data.length; i++) {
                cVm.capitalVal[i] = result.capital_data[i].capital_val
                if (i < 9) {
                    $("#capital_data li").eq(i).children("span:eq(0)").text(result.capital_data[i].name);
                    $("#capital_data li").eq(i).children("span:eq(1)").text("万元");
                }
            }
            if (totleNum) {
                runScroller();
                runLineChart();
                totleNum = false;
            }
        },
        error: function (errorMsg) {
            //console.log("当日融资渠道项目数据请求失败！");
            errorAjax(this.url, errorMsg.status, errorMsg.statusText);
        }
    });
};
//doAjax4();
var timeTicket = setInterval(function () {
    //doAjax4();
}, 5000);

avalon.scan();
//})(window, undefined);
