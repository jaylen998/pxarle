am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


var chart = am4core.create("chartdiv3", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.margin(4,4,4,4);
series.maxFontSize = am4core.percent(30);

series.data =[{'tag': '景點 ', 'weights': 180},
{'tag': '步道 ', 'weights': 188},
{'tag': '宜蘭 ', 'weights': 0},
{'tag': '園區 ', 'weights': 42},
{'tag': '公園 ', 'weights': 69},
{'tag': '小朋友 ', 'weights': 1},
{'tag': '花蓮 ', 'weights': 62},
{'tag': '台中 ', 'weights': 37},
{'tag': '台南 ', 'weights': 10},
{'tag': '櫻花 ', 'weights': 50},
{'tag': '桃園 ', 'weights': 84},
{'tag': '建築 ', 'weights': 19},
{'tag': '台東 ', 'weights': 78},
{'tag': '打卡 ', 'weights': 38},
{'tag': '溜滑梯 ', 'weights': 12},
{'tag': '嘉義 ', 'weights': 15},
{'tag': '藝術 ', 'weights': 9},
{'tag': '溫泉 ', 'weights': 12},
{'tag': '旅遊 ', 'weights': 75},
{'tag': '營區 ', 'weights': 16},
{'tag': '彩繪 ', 'weights': 77},
{'tag': '車站 ', 'weights': 37},
{'tag': '親子 ', 'weights': 46},
{'tag': '新竹 ', 'weights': 80},
{'tag': '墾丁 ', 'weights': 26},
{'tag': '落羽松 ', 'weights': 28},
{'tag': '登山 ', 'weights': 78},
{'tag': '捷運 ', 'weights': 52},
{'tag': '農場 ', 'weights': 67},
{'tag': '賞櫻 ', 'weights': 49},
{'tag': '玩水 ', 'weights': 86},
{'tag': '秘境 ', 'weights': 64},
{'tag': '觀景 ', 'weights': 89},
{'tag': '一日遊 ', 'weights': 9},
{'tag': '新北市 ', 'weights': 34},
{'tag': '金門 ', 'weights': 79},
{'tag': '礁溪 ', 'weights': 73},
{'tag': '戶外 ', 'weights': 44},
{'tag': '吊橋 ', 'weights': 0},
{'tag': '開心 ', 'weights': 84},
{'tag': '沙灘 ', 'weights': 70},
{'tag': '觀光工廠 ', 'weights': 25},
{'tag': '社區 ', 'weights': 74},
{'tag': '文創 ', 'weights': 90},
{'tag': '帳篷 ', 'weights': 84},
{'tag': '日式 ', 'weights': 16},
{'tag': '彰化 ', 'weights': 48},
{'tag': '行程 ', 'weights': 18},
{'tag': '雲林 ', 'weights': 20},
{'tag': '廣場 ', 'weights': 69},
{'tag': 'ig ', 'weights': 6},
{'tag': '日月潭 ', 'weights': 47},
{'tag': '原住民 ', 'weights': 17},
{'tag': '陽明山 ', 'weights': 90},
{'tag': '繡球花 ', 'weights': 45},
{'tag': '旅行 ', 'weights': 84},
{'tag': '鐵道 ', 'weights': 26},
{'tag': '美景 ', 'weights': 8},
{'tag': '舒適 ', 'weights': 48},
{'tag': '夕陽 ', 'weights': 77},
{'tag': '涼亭 ', 'weights': 82},
{'tag': '阿里山 ', 'weights': 48},
{'tag': '觀光 ', 'weights': 98},
{'tag': '小琉球 ', 'weights': 50},
{'tag': '部落 ', 'weights': 44},
{'tag': '台北市 ', 'weights': 83},
{'tag': '隧道 ', 'weights': 30},
{'tag': '花海 ', 'weights': 13},
{'tag': '台南市 ', 'weights': 1},
{'tag': '夢幻 ', 'weights': 69},
{'tag': '沙坑 ', 'weights': 33},
{'tag': '燈會 ', 'weights': 45},
{'tag': '夜市 ', 'weights': 93},
{'tag': '風格 ', 'weights': 63},
{'tag': '市集 ', 'weights': 70},
{'tag': '傳統 ', 'weights': 64},
{'tag': '古道 ', 'weights': 97},
{'tag': '火車站 ', 'weights': 2},
{'tag': '漁港 ', 'weights': 41},
{'tag': '碼頭 ', 'weights': 68},
{'tag': '雲海 ', 'weights': 76},
{'tag': '森林 ', 'weights': 94},
{'tag': '草皮 ', 'weights': 57},
{'tag': '台中市 ', 'weights': 97},
{'tag': '接駁車 ', 'weights': 100},
{'tag': '季節 ', 'weights': 5},
{'tag': '竹子湖 ', 'weights': 47},
{'tag': '海邊 ', 'weights': 12},
{'tag': '樂園 ', 'weights': 9},
{'tag': '茶園 ', 'weights': 77},
{'tag': '眷村 ', 'weights': 14},
{'tag': '古蹟 ', 'weights': 58},
{'tag': '海芋 ', 'weights': 73},
{'tag': '草莓 ', 'weights': 85},
{'tag': '宜蘭縣 ', 'weights': 30},
{'tag': '清境 ', 'weights': 5},
{'tag': '中壢 ', 'weights': 79},
{'tag': '城堡 ', 'weights': 83},
{'tag': '桐花 ', 'weights': 48},
{'tag': '熱氣球 ', 'weights': 44},
{'tag': '夜景 ', 'weights': 18},
{'tag': '后里 ', 'weights': 53},
{'tag': '恆春 ', 'weights': 44},
{'tag': '桃園市 ', 'weights': 13},
{'tag': '梅花 ', 'weights': 97},
{'tag': '螢火蟲 ', 'weights': 12},
{'tag': '休閒 ', 'weights': 11},
{'tag': '燈塔 ', 'weights': 86},
{'tag': '小旅行 ', 'weights': 41},
{'tag': '古厝 ', 'weights': 31},
{'tag': '板橋 ', 'weights': 19},
{'tag': '庭園 ', 'weights': 86},
{'tag': '好美 ', 'weights': 53},
{'tag': '小木屋 ', 'weights': 1},
{'tag': '北海岸 ', 'weights': 30},
{'tag': '花燈 ', 'weights': 74},
{'tag': '客家 ', 'weights': 69},
{'tag': '自行車 ', 'weights': 80},
{'tag': '彩虹 ', 'weights': 96},
{'tag': '羅東 ', 'weights': 81},
{'tag': '合歡山 ', 'weights': 54},
{'tag': '南竿 ', 'weights': 96},
{'tag': '黃金 ', 'weights': 92},
{'tag': '九份 ', 'weights': 4},
{'tag': '戲水 ', 'weights': 4},
{'tag': '莊園 ', 'weights': 54},
{'tag': '金針花 ', 'weights': 70},
{'tag': '造景 ', 'weights': 5},
{'tag': '日出 ', 'weights': 44},
{'tag': '走走 ', 'weights': 63},
{'tag': '花況 ', 'weights': 32},
{'tag': '百岳 ', 'weights': 83},
{'tag': '蘭嶼 ', 'weights': 26},
{'tag': '南庄 ', 'weights': 8},
{'tag': '美術館 ', 'weights': 47},
{'tag': '花蓮市 ', 'weights': 72},
{'tag': '嘉義市 ', 'weights': 12},
{'tag': '遊樂 ', 'weights': 44},
{'tag': '南投縣 ', 'weights': 61},
{'tag': '101 ', 'weights': 42},
{'tag': '棧道 ', 'weights': 95},
{'tag': '華山 ', 'weights': 26},
{'tag': '苗栗縣 ', 'weights': 52},
{'tag': '天空步道 ', 'weights': 97},
{'tag': '攀爬 ', 'weights': 92},
{'tag': '山頂 ', 'weights': 9},
{'tag': '花蓮縣 ', 'weights': 90},
{'tag': '山莊 ', 'weights': 36},
{'tag': '紫藤花 ', 'weights': 78},
{'tag': '北投 ', 'weights': 16},
{'tag': '巧克力 ', 'weights': 19},
{'tag': '復古 ', 'weights': 39},
{'tag': 'villa ', 'weights': 56},
{'tag': '小米 ', 'weights': 85},
{'tag': '大溪 ', 'weights': 63},
{'tag': '腳踏車 ', 'weights': 22},
{'tag': '水池 ', 'weights': 45},
{'tag': '貨櫃屋 ', 'weights': 93},
{'tag': '北門 ', 'weights': 54},
{'tag': '列車 ', 'weights': 75},
{'tag': '阿醜 ', 'weights': 77},
{'tag': '三峽 ', 'weights': 90},
{'tag': '自行車道 ', 'weights': 95},
{'tag': '特色 ', 'weights': 51},
{'tag': '麻糬 ', 'weights': 43},
{'tag': '運動 ', 'weights': 80},
{'tag': '綠島 ', 'weights': 63},
{'tag': '林口 ', 'weights': 19},
{'tag': '音樂 ', 'weights': 14}];

series.dataFields.word = "tag";
series.dataFields.value = "weights";

series.colors = new am4core.ColorSet();
series.colors.passOptions = {}; // makes it loop

//series.labelsContainer.rotation = 45;
series.angles = [0,-90];
series.fontWeight = "700"

setInterval(function () {
  series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
 }, 10000)

}); // end am4core.ready()
