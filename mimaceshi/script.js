document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为
  var passwordInput = document.getElementById('password');
  var enteredPassword = passwordInput.value;
  var correctPassword = '199'; // 这里设置正确的密码

  if (enteredPassword === correctPassword) {
    // 密码正确，显示数据
    var dataContainer = document.getElementById('dataContainer');
    dataContainer.style.display = 'block';
    // 假设您已经从服务器或其他地方获取了JSON数据
    var jsonData = {

"spider": "https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/07044.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/18.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/XBiubiuLA2.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/XBiubiuLA3.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/XBiubiuLA4.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/custom_spider.jar.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/qj0720_spider.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/bc0630.jar",	
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/bc0701.jar",		
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/pyy0706clearjingjian.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/pyy07061553clear.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/pyy07061553clear_2.jar",	
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/ts0621.jar",		
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/ts0630.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/ts0709.jar",
"spider":"https://agit.ai/cjh198488/CJH/raw/branch/master/JAR/0718.jar",

"lives": [ 
    { 
        "name": "直播", 
        "type": 0, 
        "playerType": 1, 
        "url": "http://tt.iitvba.com/tv.txt", //"epg": "http://epg.51zmt.top:8000/api/diyp/?ch={name}&date={date}", 
        "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
    {
      "group": "redirect",
      "channels": [
        {
          "name": "live",
          "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
          "urls": [
            "proxy://do=live&type=txt&ext=http://home.jundie.top:81/ray/tvlive.txt"
          ]
        }
      ]
    }
  ],

"sites":[
        

    {
      "key": "*美少女资源",
      "name": "*🔞美少女资源",
      "type": 0,
      "api": "https://www.msnii.com/api/xml.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "*淫水机资源",
      "name": "*🔞淫水机资源",
      "type": 0,
      "api": "https://www.xrbsp.com/api/xml.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "*香奶儿资源",
      "name": "*🔞香奶儿资源",
      "type": 0,
      "api": "https://www.gdlsp.com/api/xml.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "*白嫖资源",
      "name": "*🔞白嫖资源",
      "type": 0,
      "api": "https://www.kxgav.com/api/xml.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "*乐播资源",
      "name": "*🔞乐播资源",
      "type": 1,
      "api": "https://lbapi9.com/api.php/provide/vod/",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "老鸭2",
      "name": "*🔞老鸭2",
      "type": 1,
      "api": "https://lbapi9.com/api.php/provide/vod/",
      "playUrl": "json:https://player.77lehuo.com/aliplayer/?url=",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "*博天堂",
      "name": "*🔞博天堂",
      "type": 0,
      "api": "http://bttcj.com/inc/sapi.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "*环亚资源",
      "name": "*🔞环亚资源",
      "type": 0,
      "api": "http://wmcj8.com/inc/sapi.php",
      "searchable": 0,
      "quickSearch": 0
    },
    {
      "key": "(18+)天堂福利",
      "name": "🔞天堂福利",
      "type": 0,
      "api": "https://bttcj.com/inc/sapi.php",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "KpgxdyE",
      "name": "🔞黄AV资源(已修复)",
      "type": 0,
      "api": "https://www.pgxdy.com/api/xml.php",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    }
        ],

"parses":[
 {"name":"解析聚合","type":3,"url":"Demo"},
{"name":"Json并发","type":2,"url":"Parallel"},
{"name":"Json轮询","type":2,"url":"Sequence"},
{"name":"未知","type":1,"url":"http://106.52.218.221:88/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix1","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}}],"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu","bilibili","renrenmi"],"ijk":[{"group":"软解码","options":[{"category":1,"name":"opensles","value":"0"},{"category":1,"name":"overlay-format","value":"842225234"},{"category":1,"name":"framedrop","value":"1"},{"category":1,"name":"soundtouch","value":"1"},{"category":1,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-range-support","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":1,"name":"skip_loop_filter","value":"48"},{"category":1,"name":"reconnect","value":"1"},{"category":1,"name":"enable-accurate-seek","value":"0"},{"category":1,"name":"mediacodec","value":"0"},{"category":1,"name":"mediacodec-auto-rotate","value":"0"},{"category":1,"name":"mediacodec-handle-resolution-change","value":"0"},{"category":1,"name":"mediacodec-hevc","value":"0"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},{"group":"硬解码","options":[{"category":1,"name":"opensles","value":"0"},{"category":1,"name":"overlay-format","value":"842225234"},{"category":1,"name":"framedrop","value":"1"},{"category":1,"name":"soundtouch","value":"1"},{"category":1,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-range-support","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":1,"name":"skip_loop_filter","value":"48"},{"category":1,"name":"reconnect","value":"1"},{"category":1,"name":"enable-accurate-seek","value":"0"},{"category":1,"name":"mediacodec","value":"1"},{"category":1,"name":"mediacodec-auto-rotate","value":"1"},{"category":1,"name":"mediacodec-handle-resolution-change","value":"1"},{"category":1,"name":"mediacodec-hevc","value":"1"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"搬运工","type":0,"url":"https://43.142.151.188/?url=","ext":{"flag":["qiyi","youku","mgtv","qq","sohu","bilibili","xigua","1905"]}},
{"name":"293","type":1,"url":"http://47.98.234.2:7768/api.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"nxflv","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"yemu","type":0,"url":"https://www.yemu.xyz/?url="},
{"name":"gai","type":0,"url":"https://www.gai4.com/?url="},
{"name":"普通","type":0,"url":"https://jhpc.021huaying.com/api.php?url="},
{"name":"盘古解析","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"龙虾","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dalvik/2.1.0"}}},
{"name":"Web解析","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"爱豆解析","type":0,"url":"https://jx.aidouer.net/?url="},
{"name":"冰豆解析","type":0,"url":"https://bd.jx.cn/?url="},
{"name":"2","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","youku","mgtv","qq","letv","wasu","sohu","bilibili","xigua","1905"]}},
{"name":"random1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"ok1","type":0,"url":"https://okjx.cc/?url="},
{"name":"ok2","type":0,"url":"https://api.okjx.cc:3389/jx.php?url="},
{"name":"久久","type":0,"url":"http://42.193.18.62:9999/analysis.php?v="},
{"name":"虾米","type":1,"url":"https://jx.xmflv.com/?url="},
{"name":"9","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url="},
{"name":"11","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url="},
{"name":"19","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=QQ172598364&url="},
{"name":"左岸","type":1,"url":"https://good-vip.mmiyue.com/zhenbuka2/api/svip/HaShrcJUHwtH7TDdgUzHaWvJ1lWUZWiK.php?url="},
{"name":"云you解析","type":1,"url":"https://ax.jx.cn/api.php?url="},
{"name":"云you解析2","type":1,"url":"https://maoyingshi.cc/api.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"江湖","type":1,"url":"https://jhjx.kuanjv.com/newky/?url=","ext":{"flag":["qiyi","youku","mgtv","qq","sohu","bilibili","xigua","1905"]}},
{"name":"随便2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"16","type":1,"url":"https://jhjx.kuanjv.com/newky/?url="},
{"name":"18","type":1,"url":"http://jx.hlele.vip/api/?url="},
{"name":"293","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"random2","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"线路m9","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1931000&key=gktuvyzABEORSYZ135&url="},
{"name":"线路NX","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"Web解析","type":0,"url":"https://chaxun.truechat365.com/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","iqiyi","奇艺"]}},
{"name":"leduo","type":1,"url":"https://api.ldjx.cc/wp-api/getvodurl.php?token=1001&vid=","ext":{"flag":["leduo"]}},
{"name":"renrenmi2","type":1,"url":"https://a.dxzj88.com/jxrrm/jiami.php?url=","ext":{"flag":["renrenmi"]}},
{"name":"renrenmi3","type":1,"url":"https://sz.dxzj88.com/jxrjrm/jiaomi.php?url=","ext":{"flag":["renrenmi"]}},
{"name":"Pro2","type":1,"url":"https://vip.rongxingvr.top/api/?type=ys&key=JJEZkZIhzkA4cUtBfR&url=","ext":{"flag":["ltnb","rx","qiyi","爱奇艺","qq","奇艺","sohu","letv","youku","优酷","mgtv","芒果"]}},
{"name":"2","type":1,"url":"https://jx.mczdyw.com/xg.php?url=","ext":{"flag":["mgtv","芒果"]}},
{"name":"3","type":1,"url":"https://www.aiaine.com/api/?key=kVqmG5dAQ5dZTcECw8&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"4","type":1,"url":"https://svip.rongxingvr.top/api/?key=niBgMGXVdCQhsmeEBK&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"8","type":1,"url":"https://app.iminna.com/jx/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"飓风影院2","type":1,"url":"https://vvip.funsline.cn/api/?key=3xWfEoDf4V9p9Y20CR&url=","ext":{"flag":["ziqie","youku","优酷","qiyi","爱奇艺","奇艺","mgtv","芒果","qq","腾讯"]}},
{"name":"我爱电影网","type":1,"url":"https://jhpc.manduhu.com/j1217.php?url=","ext":{"flag":["qiyi","爱奇艺","奇艺","mgtv","芒果","youku","优酷","pptv","PPTV"]}},
{"name":"江湖解析","type":1,"url":"http://103.40.240.46/jh/?url=","ext":{"flag":["renrenmi","qq","腾讯","youku","优酷","mgtv","芒果","xigua","西瓜"]}},
{"name":"王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"欢雨","type":1,"url":"http://www.youhuifuligou.com/json/?id=7&url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","letv","乐视","xigua","西瓜"]}},
{"name":"hfyrw","type":1,"url":"https://json.hfyrw.com/mao.go?url=","ext":{"flag":["ltnb","renrenmi"]}},
{"name":"aiaine02","type":1,"url":"https://vip.aiaine.com/api/?key=8FN8gNAySnvJiMllxZ&url=","ext":{"flag":["ltnb","renrenmi","xfyun","miaoparty","miaoparty2","miaoparty3","longteng","xueren"]}},
{"name":"五一解析","type":1,"url":"https://json.5lp.net/json.php?url=","ext":{"flag":["ltnb","renrenmi","rx","rongxing"]}},
{"name":"RongXingVR","type":1,"url":"https://vip.rongxingvr.top/api/?key=JJEZkZIhzkA4cUtBfR&url=","ext":{"flag":["renrenmi","rx","rongxing","mgtv","芒果","bilibili","哔哩哔哩","哔哩"]}},
{"name":"jx36","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=9105801&key=huwxFGILMOQSTUZ679&url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果"]}},
{"name":"J13","type":1,"url":"https://languangyingshiziyuan.1080zy.top/longtengzy.php/?url=","ext":{"flag":["ltnb"]}},
{"name":"Wuduzy","type":1,"url":"https://aa.xkys.tv/json.php?url=","ext":{"flag":["wuduzy"]}},
{"name":"LTRX","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["rx"]}},
{"name":"喵派对资源3","type":1,"url":"https://vip.aiaine.com/api/?key=fOWaGgFU45zlIjvbHI&url=","ext":{"flag":["ltnb","renrenmi"]}},
{"name":"喵派对资源2","type":1,"url":"https://svip.iremind.me/api/?key=A5Db8HF8c8FSIOR6R1&url=","ext":{"flag":["renrenmi","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","sohu"]}},
{"name":"leduotv","type":1,"url":"https://api.leduotv.com/wp-api/getvodurl.php?vid=","ext":{"flag":["leduo"]}},
{"name":"random3","type":1,"url":"http://81.71.48.249:4433/iphone/100.php?url="},
{"name":"OJBK","type":0,"url":"https://jmwl.qd234.cn/v/?v=","ext":{"flag":["ltnb","renrenmi","rx","xfyun","muxm3u8","xigua","xueren","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩","pptv","PPTV","sohu","letv"]}},
{"name":"M117","type":0,"url":"http://1.117.152.239:39000/?url="},
{"name":"zui","type":0,"url":"https://jx.zui.cm/?url=","ext":{"flag":["ltnb"]}},
{"name":"parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"xuerenweb","type":0,"url":"https://s.2tu.uk/?url=","ext":{"flag":["xueren"]}},
{"name":"xuerenweb2","type":0,"url":"https://xrm3u8.qd234.cn/?url=","ext":{"flag":["xueren"]}},
{"name":"美剧虫","type":0,"url":"https://jx.daiguaji.com/?url=","ext":{"flag":["zijian"]}},
{"name":"miao","type":0,"url":"https://jx.58g8.com/1/?url=","ext":{"flag":["miaoparty"]}},
{"name":"web1","type":0,"url":"https://www.nxflv.com/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺","sohu","letv"]}},
{"name":"万能解析","type":0,"url":"https://vip.legendwhb.cn/m3u8.php?url=","ext":{"flag":["ltnb","renrenmi","qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","bilibili","哔哩哔哩","哔哩"]}},
{"name":"ltnb04","type":0,"url":"https://vip.bljiex.com/?v=","ext":{"flag":["ltnb"]}},
{"name":"ltnb02","type":0,"url":"https://jx.zui.cm/?url=","ext":{"flag":["ltnb"]}},
{"name":"CL4K01","type":0,"url":"https://ys.ling00.cn/CL4K/?url=","ext":{"flag":["CL4K","qq","腾讯"]}},
{"name":"CL4K02","type":0,"url":"https://app.okmedcos.com/4k/?url=","ext":{"flag":["CL4K","qq","腾讯","pptv","PPTV"]}},
{"name":"盘古","type":0,"url":"https://www.m3u8.tv.cdn.8old.cn/jx.php?url="},
{"name":"左岸","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905","优播线路","腾播线路"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"太空","type":1,"url":"http://124.222.68.182/jiexi/4kJX.php/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","CL4K","renrenmi","ltnb","bilibili","1905","xigua"]}},
{"name":"随便1","type":1,"url":"http://cl.yjhan.com:8090/home/api?type=ys&uid=821518&key=aghlmnyBFIJMPRX489&url="},
{"name":"①秒播","type":1,"url":"https://jx.hfyrw.com/mao.go?url="},
{"name":"②秒播","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"③秒播","url":"http://81.71.48.249:4456/jsonc/293shipin.php?url=","type":1,"i":"77","ext":{"flag":["qiyi","爱奇艺","奇艺","qq","腾讯","youku","优酷","pptv","PPTV","letv","乐视","bilibili","哔哩哔哩","哔哩","mgtv","芒果"]}},
{"name":"④秒播","type":1,"url":"http://106.55.234.91:4433/?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"⑤秒播","type":1,"url":"http://81.71.48.249:4456/jsonc/longxia.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"⑦秒播","type":1,"url":"https://app.okmedcos.com/4k/?url="},
{"name":"⑧秒播","type":1,"url":"https://jie.1z1.cc/api/?key=HdMmTMfyf1uTOQUL0b&url="},
{"name":"Pro","type":1,"url":"http://api.vip123kan.vip/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"解析GGTV","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"解析parwix","type":0,"url":"https://jx.bozrc.com:4433/player/?url="},
{"name":"解析parwix2","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"解析OKjx综合","type":0,"url":"https://okjx.cc/?url="},
{"name":"解析秒播","type":1,"url":"https://www.hfyrw.com/json.php?url="},
{"name":"解析293","type":1,"url":"http://47.98.234.2:7768/api.php?url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"],"header":{"User-Agent":"Dart/2.14 (dart:io)"}}},
{"name":"解析必成","type":1,"url":" https://jisu.rongxingvr.top/api/?key=rCMmoKD0H0ShJ00u2f&url=","ext":{"flag":["qq","qiyi","youku","pptv","le","sohu","bilibili","xigua","1905"]}},
{"name":"解析人迷","type":0,"url":"https://jx.blbo.cc:4433/?url="},
{"name":"解析第一","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"解析最先","type":0,"url":"https://jx.zui.cm/?url=","ext":{"flag":["ltnb"]}},
{"name":"解析王牌","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"解析诺讯","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"解析乐多","type":1,"url":"https://api.ldjx.cc/wp-api/getvodurl.php?token=1001&vid=","ext":{"flag":["leduo"]}},
{"name":"解析知识","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"解析虾米","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"GGTV快速","type":1,"url":"https://play.fuqizhishi.com/mov/API.php?appkey=QQ172598364&url="},
{"name":"云you秒解","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"乐多","type":1,"url":"https://api.ldjx.cc/wp-api/getvodurl.php?token=1001&vid=","ext":{"flag":["leduo"]}},
{"name":"诺讯解析①","type":0,"url":"https://www.nxflv.com/?url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺","sohu","letv"]}},
{"name":"诺讯解析②","type":1,"url":"https://vip.nxflv.com/home/api?uid=701203&key=bltuyCEFKLTX013679&url="},
{"name":"OKjx综合","type":0,"url":"https://okjx.cc/?url="},
{"name":"星辰解析","type":1,"url":"https://svip.spchat.top/api/?type=ys&key=bKemW41JnxmQb4l67h&url=","ext":{"flag":["youku","优酷","mgtv","芒果","qq","腾讯","qiyi","爱奇艺","qq","奇艺"]}},
{"name":"秒播解析","type":1,"url":"https://www.hfyrw.com/json.php?url="},
{"name":"必成解析","type":1,"url":" https://jisu.rongxingvr.top/api/?key=rCMmoKD0H0ShJ00u2f&url=","ext":{"flag":["qq","qiyi","youku","pptv","le","sohu","bilibili","xigua","1905"]}},
{"name":"parwix1解析","type":0,"url":"https://jx.parwix.com:4433/player/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"parwix2解析","type":0,"url":"https://jx.parwix.com:4433/player/analysis.php?v=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","letv","乐视","pptv","PPTV","sohu","bilibili","哔哩哔哩","哔哩"]}},
{"name":"人迷解析","type":0,"url":"https://jx.blbo.cc:4433/?url="},
{"name":"m3u8tv解析","type":0,"url":"https://jx.m3u8.tv/jiexi/?url="},
{"name":"第一解析","type":1,"url":"http://27.124.4.42:4567/jhjson/ceshi.php?url=","ext":{"flag":["qiyi","qq","letv","sohu","youku","mgtv","bilibili","wasu","xigua","1905"]}},
{"name":"最先解析","type":0,"url":"https://jx.zui.cm/?url=","ext":{"flag":["ltnb"]}},
{"name":"王牌解析","type":1,"url":"https://za.kuanjv.com/?url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","mgtv","芒果","搜狐","sohu","letv","乐视","bilibili","哔哩哔哩","哔哩","xigua","西瓜"]}},
{"name":"知识解析","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=xiongdimenbieguaiwodingbuzhulegailekey07201538&url="},
{"name":"虾米解析","type":0,"url":"https://jx.xmflv.com/?url="},
{"name":"腾讯直解","type":0,"url":"https://vip.52jiexi.top/?url="},
{"name":"523","type":0,"url":"https://go.yh0523.cn/y.cy?url="},
{"name":"1717","type":0,"url":"https://www.1717yun.com/1717yun/?url="},
{"name":"1717云","type":0,"url":"https://www.1717yun.com/jiexi/?url="},
{"name":"4K解析","type":0,"url":"https://jx.4kdv.com/?url="},
{"name":"BL解析","type":0,"url":"https://vip.bljiex.com/?v="},
{"name":"CHok","type":0,"url":"https://www.gai4.com/?url="},
{"name":"秒解","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=QQ172598364&url="},
{"name":"旋风","type":1,"url":"https://svip.iepig.com:4443/api/?key=SicQs2pG0Cw7BnWV9a&url=","ext":{"flag":["xfyun"]}},
{"name":"左岸3","type":1,"url":"http://110.42.2.115:880/analysis/json/?uid=2100&my=fgjnoqstLMRUZ03489&url=","ext":{"flag":["qq","qiyi","mgtv","youku","letv","sohu","xigua","1905"]}},
{"name":"fuqi","type":1,"url":"https://play.fuqizhishi.com/maotv/API.php?appkey=QQ172598364&url="},
{"name":"江湖","type":1,"url":"http://103.40.240.46/jh/?url=","ext":{"flag":["renrenmi","qq","腾讯","youku","优酷","mgtv","芒果","xigua","西瓜"]}},
{"name":"QQYI","type":1,"url":"http://home.jundie.top:666/jiexi.php?url="},
{"name":"zui","type":0,"url":"https://jx.zui.cm/?url=","ext":{"flag":["renrenmi"]}},
{"name":"nfjx","type":1,"url":"https://www.nfjx.xyz/home/api?type=ys&uid=5767995&key=ijkmovxDEHIJPQRW69&url="},
{"name":"欢雨","type":1,"url":"http://www.youhuifuligou.com/json/?id=7&url=","ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","letv","乐视","xigua","西瓜"]}}

  ],

"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu","bilibili","renrenmi"],

"ijk":[
{"group":"软解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"0"},
{"category":4,"name":"mediacodec-auto-rotate","value":"0"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},
{"category":4,"name":"mediacodec-hevc","value":"0"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]},
{"group":"硬解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"1"},
{"category":4,"name":"mediacodec-auto-rotate","value":"1"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},
{"category":4,"name":"mediacodec-hevc","value":"1"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]}
],

"ads":["mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]
};
    // 将JSON数据转换为字符串并显示
    dataContainer.textContent = JSON.stringify(jsonData, null, 2);
  } else {
    // 密码错误，提示用户
    alert('密码错误，请重试！');
    passwordInput.value = ''; // 清空输入框
  }
});
