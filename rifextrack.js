window.YQ=window.YQ||{},YQ.configs=YQ.configs||{},YQ.configs.browserCheck=!1,function(b,a){"use strict";function d(a,b){this[l]=a,this[i]=b}function c(a){this[n]=a}function f(a,b,c){this[o]=a,this[j]=b,this[m]=c}function h(g,j){if(!(this instanceof h))return new h(g,j).getResult();var m=g||(b&&b.navigator&&b.navigator.userAgent?b.navigator.userAgent:""),t=j?p.extend(q,j):q,o=new d,v=new c,w=new f,x=new k,y=new u;return this.getBrowser=function(){return e.rgx.call(o,m,t.browser),o.major=p.major(o.version),o},this.getCPU=function(){return e.rgx.call(v,m,t.cpu),v},this.getDevice=function(){return e.rgx.call(w,m,t.device),w},this.getEngine=function(){return e.rgx.call(x,m,t.engine),x},this.getOS=function(){return e.rgx.call(y,m,t.os),y},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return m},this.setUA=function(a){return m=a,o=new d,v=new c,w=new f,x=new k,y=new u,this},this}var j="model",l="name",m="type",o="vendor",i="version",n="architecture",p={extend:function(a,b){var c,d={};for(c in a)d[c]=b[c]&&0==b[c].length%2?b[c].concat(a[c]):a[c];return d},has:function(a,b){return"string"==typeof a&&-1!==b.toLowerCase().indexOf(a.toLowerCase())},lowerize:function(a){return a.toLowerCase()},major:function(b){return"string"==typeof b?b.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},e={rgx:function(b,e){for(var f,g,h,j,k,m=0;m<e.length&&!j;){for(var p=e[m],l=e[m+1],d=f=0;d<p.length&&!j;)if(j=p[d++].exec(b))for(g=0;g<l.length;g++)k=j[++f],typeof(h=l[g])=="object"&&0<h.length?2==h.length?typeof h[1]=="function"?this[h[0]]=h[1].call(this,k):this[h[0]]=h[1]:3==h.length?typeof h[1]!="function"||h[1].exec&&h[1].test?this[h[0]]=k?k.replace(h[1],h[2]):a:this[h[0]]=k?h[1].call(this,k,h[2]):a:4==h.length&&(this[h[0]]=k?h[3].call(this,k.replace(h[1],h[2])):a):this[h]=k||a;m+=2}},str:function(b,c){for(var d in c)if(typeof c[d]=="object"&&0<c[d].length){for(var e=0;e<c[d].length;e++)if(p.has(c[d][e],b))return"?"===d?a:d;}else if(p.has(c[d],b))return"?"===d?a:d;return b}},g={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},q={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/(opios)[\/\s]+([\w\.]+)/i],[["name","Opera Mini"],"version"],[/\s(opr)\/([\w\.]+)/i],[["name","Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],[/(yabrowser)\/([\w\.]+)/i],[["name","Yandex"],"version"],[/(puffin)\/([\w\.]+)/i],[["name","Puffin"],"version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i,/(ucbrowser)\/([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(micromessenger)\/([\w\.]+)/i],[["name","WeChat"],"version"],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/xiaomi\/miuibrowser\/([\w\.]+)/i],["version",["name","MIUI Browser"]],[/;fbav\/([\w\.]+);/i],["version",["name","Facebook"]],[/(headlesschrome) ([\w\.]+)/i],["version",["name","Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[["name",/(.+)/,"$1 WebView"],"version"],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],["version",["name","Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],["name","version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/(coast)\/([\w\.]+)/i],[["name","Opera Coast"],"version"],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",e.str,g.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",e.str,g.device.amazon.model],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type","mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",e.str,g.device.sprint.vendor],["model",e.str,g.device.sprint.model],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/(nexus\s6p)/i],["model",["vendor","Huawei"],["type","mobile"]],[/(microsoft);\s(lumia[\s\w]+)/i],["vendor","model",["type","mobile"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[["vendor",p.trim],["model",p.trim],["type","smarttv"]],[/hbbtv.+maple;(\d+)/i],[["model",/^/,"SmartTV"],["vendor","Samsung"],["type","smarttv"]],[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/smart-tv.+(samsung)/i],["vendor",["type","smarttv"],"model"],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],["vendor","model",["type","mobile"]],[/crkey/i],[["model","Chromecast"],["vendor","Google"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+;\s(pixel c)\s/i],["model",["vendor","Google"],["type","tablet"]],[/android.+;\s(pixel xl|pixel)\s/i],["model",["vendor","Google"],["type","mobile"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/android.+a000(1)\s+build/i],["model",["vendor","OnePlus"],["type","mobile"]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[["type",p.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",e.str,g.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",e.str,g.os.windows.version]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(haiku)\s(\w+)/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],["name","version"]]},k=d,u=d;h.VERSION="0.7.12",h.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:"name",VERSION:"version"},h.OS={NAME:"name",VERSION:"version"},b.UAParser=h;var r,s=b.jQuery||b.Zepto;void 0!==s&&(r=new h,s.ua=r.getResult(),s.ua.get=function(){return r.getUA()},s.ua.set=function(a){r.setUA(a);var b,c=r.getResult();for(b in c)s.ua[b]=c[b]})}("object"==typeof window?window:this),function(a){a.update_i18n={en:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},"zh-cn":{__content1:"\u4F60\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u6211\u4EEC\u63A8\u8350\u4F60\u4F7F\u7528\uFF1A",__content2:"IE10\u3001Firefox31\u3001Safari4\u3001Chrome41\u3001Opera30\u4EE5\u4E0A\u6216\u5176\u4ED6Webkit\u5185\u6838\u6D4F\u89C8\u5668\uFF0C\u4EE5\u83B7\u5F97\u6700\u597D\u7684\u4F7F\u7528\u4F53\u9A8C\u3002",__seoTitle:"\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E"},"zh-hk":{__content1:"\u4F60\u7684\u700F\u89BD\u5668\u7248\u672C\u904E\u4F4E\uFF0C\u6211\u5011\u63A8\u85A6\u4F60\u4F7F\u7528\uFF1A",__content2:"IE10\u3001Firefox31\u3001Safari4\u3001Chrome41\u3001Opera30\u4EE5\u4E0A\u6216\u5176\u4ED6webkit\u5167\u6838\u700F\u89BD\u5668\uFF0C\u4EE5\u7372\u5F97\u6700\u597D\u7684\u4F7F\u7528\u9AD4\u9A57\u3002",__seoTitle:"\u6D41\u89BD\u5668\u7248\u672C\u904E\u4F4E"},ja:{__content1:"\u30B7\u30B9\u30C6\u30E0\u304C\u53E4\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30D6\u30E9\u30A6\u30B6\u3092\u691C\u77E5\u3057\u307E\u3057\u305F\u3002\u4E0B\u8A18\u3059\u308B\u30A6\u30A7\u30D6\u30D6\u30E9\u30A6\u30B6\u306E\u3054\u4F7F\u7528\u3092\u63A8\u5968\u3057\u307E\u3059\uFF1A",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ \u4EE5\u964D\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u53C8\u306F\u6700\u65B0\u306E webkit \u30D6\u30E9\u30A6\u30B6\u3067\u3088\u308A\u5FEB\u9069\u306B\u3054\u4F7F\u7528\u9802\u3051\u307E\u3059\u3002",__seoTitle:"\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u30D6\u30E9\u30A6\u30B6"},ko:{__content1:"\uC774\uC804 \uBC84\uC804\uC758 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC2DC\uC2A4\uD15C \uD655\uC778\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD558\uB2E8\uC758 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC0AC\uC6A9\uD558\uC2DC\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4 :",__content2:"\uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC 10, \uD30C\uC774\uC5B4 \uD3ED\uC2A4 31, \uC0AC\uD30C\uB9AC 4, \uD06C\uB86C 41, \uC624\uD398\uB77C 30+ \uC774\uC0C1\uC758 \uBC84\uC804, \uB610\uB294 \uB2E4\uB978 \uCD5C\uC2E0\uC758 \uC6F9 \uBE0C\uB77C\uC6B0\uC800\uB97C \uD1B5\uD574 \uCD5C\uB300\uD55C\uC758 \uACBD\uD5D8\uC744 \uC811\uD558\uC138\uC694.",__seoTitle:"\uC774\uC804 \uBC84\uC804\uC758 \uBE0C\uB77C\uC6B0\uC800"},fi:{__content1:"J\xE4rjestelm\xE4 on havainnut vanhentuneen selaimen. Suosittelemme k\xE4ytt\xE4m\xE4\xE4n seuraavia web-selaimia:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30 + -versio tai jokin muu ajan tasalla oleva web-selain, parhaan mahdollisen k\xE4ytt\xF6kokemuksen takaamiseksi.",__seoTitle:"Vanhentunut selain"},pl:{__content1:"System wykry\u0142, \u017Ce korzystasz ze starej przegl\u0105darki. Rekomendujemy korzystanie z jednej z tych przegl\u0105darek:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ i wersje nowsze, dla wi\u0119kszej wygody.",__seoTitle:"Przestarza\u0142a przegl\u0105darka"},tr:{__content1:"Sistem eski bir taray\u0131c\u0131 oldu\u011Funu tespit etti. A\u015Fa\u011F\u0131daki web taray\u0131c\u0131lar\u0131n\u0131 kullanman\u0131z \xF6nerilir:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30 + s\xFCr\xFCm\xFCnden veya di\u011Fer en g\xFCncel web taray\u0131c\u0131lar\u0131ndan yararlan\u0131n.",__seoTitle:"Eski Taray\u0131c\u0131"},cs:{__content1:"Syst\xE9m zjistil, \u017Ee pou\u017E\xEDv\xE1te zastaral\xFD prohl\xED\u017Ee\u010D. Doporu\u010Dujeme pou\u017Eit n\u011Bkter\xFD z n\xE1sleduj\xEDc\xEDch webov\xFDch prohl\xED\u017Ee\u010D\u016F:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30 a vy\u0161\u0161\xED verze nebo jin\xE9 aktu\xE1ln\xED webkit prohl\xED\u017Ee\u010De pro nejlep\u0161\xED mo\u017En\xE9 vyu\u017Eit\xED.",__seoTitle:"Zastaral\xFD prohl\xED\u017Ee\u010D"},it:{__content1:"Il sistema ha rilevato un browser obsoleto. Si raccomanda l'utilizzo di uno dei seguenti browser web:",__content2:"Internet Explorer 10, Opera 30, Firefox 31, Chrome 41, Safari 4 o versioni pi\xF9 recenti. In alternativa \xE8 possibile utilizzare anche altri browser aggiornati all'ultima versione per una miglior esperienza possibile.",__seoTitle:"Browser obsoleto"},de:{__content1:"Unser System hat identifiziert, dass es einen veralteten Browser ist. Es wird empfohlen, die folgenden Browser zu verwenden:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ und h\xF6her, oder die andere aktualisierte Webkit-Browser f\xFCr die beste Erfahrung.",__seoTitle:"Veralteter Browser"},es:{__content1:"\xBFEst\xE1 utilizando un explorador antiguo? Le recomendamos uno de estos:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30 y superiores, o alg\xFAn otro que est\xE9 actualizado para una mejor experiencia.",__seoTitle:"Explorador Antiguo"},fr:{__content1:"Notre syst\xE8me d\xE9tecte que vous utilisez un navigateur obsol\xE8te. Il est recommand\xE9 d'utiliser les suivants :",__content2:"IE10, Firefox 31, Safari4, Chrome41, Opera30+ versions sup\xE9rieures ou autres navigateurs \xE0 jours pour la meilleure exp\xE9rience possible.",__seoTitle:"Navigateur Obsol\xE8te"},ru:{__content1:"\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B\u0430 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30 +  \u0438\u043B\u0438 \u0432\u044B\u0448\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.",__seoTitle:"\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440"},pt:{__content1:"O sistema detecta que \xE9 um navegador desatualizado. Recomenda-se usar os seguintes navegadores:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ e vers\xF5es superiores, ou outros navegadores (webkits) atualizados para obter a melhor experi\xEAncia poss\xEDvel.",__seoTitle:"Navegador Desatualizado"},nl:{__content1:"Systeem heeft een verouderde browser gedetecteerd. Het is aangeraden een van de volgende browsers te gebruiken:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ of nieuwere versie, of andere up-to-date webkit browsers voor de beste ervaring.",__seoTitle:"Verouderde Browser"},uk:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},hu:{__content1:"A rendszer jelz\xE9se szerint elavult vezi\xF3j\xFA b\xF6ng\xE9sz\u0151t haszn\xE1l. Az al\xE1bbi b\xF6ng\xE9sz\u0151t aj\xE1nljuk:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ vagy frissebb verzi\xF3t, illetve egy\xE9b naprak\xE9sz webkit b\xF6ng\xE9sz\u0151t, mely a legjobb b\xF6ng\xE9sz\xE9si \xE9lm\xE9nyt garant\xE1lja.",__seoTitle:"Elavult b\xF6ng\xE9sz\u0151"},sv:{__content1:"Systemet har detekterat att du anv\xE4nder en gammal webbl\xE4sare. F\xF6ljande webbl\xE4sare rekommenderas:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ eller h\xF6gre; alternativt kan du anv\xE4nda n\xE5gon annan ny webkit-baserad webbl\xE4sare.",__seoTitle:"Gammal webbl\xE4sare"},kk:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},el:{__content1:"\u03A4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BD\u03C4\u03BF\u03C0\u03AF\u03B6\u03B5\u03B9 \u03CC\u03C4\u03B9 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03B1\u03BB\u03B9\u03CC. \u03A3\u03C5\u03BD\u03B9\u03C3\u03C4\u03AC\u03C4\u03B1\u03B9 \u03BD\u03B1 \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B1 \u03B1\u03BA\u03CC\u03BB\u03BF\u03C5\u03B8\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ \u03C0\u03B1\u03C1\u03B1\u03C0\u03AC\u03BD\u03C9 \u03AD\u03BA\u03B4\u03BF\u03C3\u03B7 \u03AE \u03AC\u03BB\u03BB\u03B1 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B1 \u03C0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2 webkit \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B7 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B5\u03BC\u03C0\u03B5\u03B9\u03C1\u03AF\u03B1.",__seoTitle:"\u039C\u03B7 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03C9\u03BC\u03AD\u03BD\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03B7\u03C2"},th:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},bg:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},sk:{__content1:"N\xE1\u0161 syst\xE9m zistil, ze pou\u017E\xEDvate zastaral\xFD webov\xFD prehliada\u010D. Odpor\xFA\u010Dame pou\u017Ei\u0165 niektor\xFD z n\xE1sleduj\xFAcich webov\xFDch prehliada\u010Dov:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ a vy\u0161\u0161ie verzie alebo in\xFD aktu\xE1lny webkit prehliada\u010D pre \u010Do najlep\u0161\xED z\xE1\u017Eitok z pou\u017E\xEDvania.",__seoTitle:"Zastaral\xFD prehliada\u010D"},lt:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},ro:{__content1:"Sistemul a detectat un browser invechit. Este recomandat sa utilizezi urmatoarele browsere:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ sau mai noi, sau alte browsere actualizate pentru o mai buna experienta de utilizare.",__seoTitle:"Browser invechit"},no:{__content1:"Systemet har oppdaget at du bruker en utdatert nettleser. Det er anbefalt \xE5 bruke f\xF8lgende nettlesere:",__content2:"Internet Explorer 10, Firefox 3.1, Safari 4, Chrome 4.1, Opera 30 eller nyere, eller andre nyere nettlesere for best opplevelse.",__seoTitle:"Utdatert nettleser"},sq:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"},sl:{__content1:"Uporabljate nepodprt brskalnik. Priporo\u010Dam, da uporabljate slede\u010De brskalnike:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ ali vi\u0161je verzije, za najbolj\u0161o uporabni\u0161ko izku\u0161njo.",__seoTitle:"Zastarel brskalnik"},sr:{__content1:"System detects it's an outdated browser. It is recommended using the following web browsers:",__content2:"IE10, Firefox31, Safari4, Chrome41, Opera30+ above version, or other up-to-date webkit browsers for the best possible experience.",__seoTitle:"Outdated Browser"}}}(window,document),function(b,f){var g=[],a=[],e={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(b,c,d){a.push({name:b,fn:c,options:d})},addAsyncTest:function(b){a.push({name:null,fn:b})}},h=function(){};h.prototype=e,h=new h;var i,j,k,l,p=f.documentElement,o="svg"===p.nodeName.toLowerCase(),q=e._config.usePrefixes?["","-webkit-","-moz-","-o-","-ms-",""]:["",""];e._prefixes=q,h.addTest("csscalc",function(){var a=function(a){return"function"==typeof f.createElement?o?f.createElementNS.call(f,"http://www.w3.org/2000/svg",a):f.createElement.apply(f,arguments):f.createElement(a)}("a");return a.style.cssText="width:"+q.join("calc(10px);width:"),!!a.style.length}),function(){var b,c,d,f,j,k,l;for(l in a)if(a.hasOwnProperty(l)){if(b=[],(c=a[l]).name&&(b.push(c.name.toLowerCase()),c.options&&c.options.aliases&&c.options.aliases.length))for(d=0;d<c.options.aliases.length;d++)b.push(c.options.aliases[d].toLowerCase());for(f="function"==typeof c.fn?c.fn():c.fn,j=0;j<b.length;j++)1===(k=b[j].split(".")).length?h[k[0]]=f:(!h[k[0]]||h[k[0]]instanceof Boolean||(h[k[0]]=new Boolean(h[k[0]])),h[k[0]][k[1]]=f),g.push((f?"":"no-")+k.join("-"))}}(),i=g,k=p.className,l=h._config.classPrefix||"",o&&(k=k.baseVal),h._config.enableJSClass&&(j=new RegExp("(^|\\s)"+l+"no-js(\\s|$)"),k=k.replace(j,"$1"+l+"js$2")),h._config.enableClasses&&(k+=" "+l+i.join(" "+l),o?p.className.baseVal=k:p.className=k),delete e.addTest,delete e.addAsyncTest;for(var m=0;m<h._q.length;m++)h._q[m]();b._Modernizr=h}(window,document),function(a,b){function c(){this.ua=new a.UAParser,this.browserInfo=this.ua.getBrowser(),this.deviceInfo=this.ua.getDevice(),this.browserCheck=!0,a.YQ&&a.YQ.configs&&void 0!==a.YQ.configs.browserCheck&&(this.browserCheck=a.YQ.configs.browserCheck),this.init()}c.prototype={init:function(){this.browserCheck&&this.unSupport()&&this.lowVersionBrowserHandle()},unSupport:function(){var a=this.isMobile(),b=this.isTablet(),c=this.isWebView();if(a||b){if(this.browserCheck&&c)return!1;if(!_Modernizr.csscalc)return!0}else if(this.lowBrowserIE(this.browserInfo)||this.lowBrowserRange(this.browserInfo,"Firefox","31")||this.lowBrowserRange(this.browserInfo,"Chrome","41")||this.lowBrowserRange(this.browserInfo,"Opera","30")||this.lowBrowserRange(this.browserInfo,"Safari","6"))return!0;return!1},isMobile:function(){return"mobile"===this.deviceInfo.type||"smarttv"===this.deviceInfo.type||"wearable"===this.deviceInfo.type||"embedded"===this.deviceInfo.type},isTablet:function(){return"tablet"===this.deviceInfo.type},isWebView:function(){var b=a.location.search.substr(1).match(/(^|&)from=([^&]*)(&|$)/),c=!1;return null!=b&&"app"===unescape(b[2])&&(c=!0),c},lowBrowserIE:function(a){return"IE5"===a.name||"IE6"===a.name||"IE7"===a.name||"IE8"===a.name||"IE9"===a.name||"IE"===a.name&&10>a.major},lowBrowserRange:function(a,b,c){if(!_Modernizr.csscalc)return!0;b=b.replace(/\s/g,"").toLowerCase(),c=parseFloat(c);var d=a.name.replace(/\s/g,"").toLowerCase(),e=parseFloat(a.major);return d===b&&e<c},updateHtmlTpl:function(a,b){return"<style>body>*{display:none!important}</style><div class=\"yq-brower-update\"><div class=\"yq-lowbrower-container\"><div class=\"yq-tips-baby\"><i></i></div><div class=\"yq-lbtips-content\"><a href=\"javascript:void(0)\" class=\"yq-lbtips-logo\"></a><div class=\"yq-lbtips-text\"><p>"+a+"</p><p>"+b+"</p></div><div class=\"yq-lbtips-download\"><div class=\"icon\"><i class=\"chrome\"></i><span>Chrome</span></div><div class=\"icon\"><i class=\"ie11\"></i><span>IE11</span></div></div></div></div></div>"},lowVersionBrowserHandle:function(){var a=b.getElementsByTagName("html")[0].getAttribute("lang"),c=update_i18n[a]||update_i18n.en,d=c.__content1,e=c.__content2,f=c.__seoTitle,g=this.updateHtmlTpl(d,e);b.body.innerHTML=g,b.title=f+" | 17TRACK"}},a.YQBrowserCheck=new c}(window,document),window.YQ=window.YQ||{},YQ.UI={byId:function(a){return a&&a.tagName?a:document.getElementById(a)},byClass:function(a,b){if(b.getElementsByClass)return(b||document).getElementsByClass(a);for(var c=[],d=new RegExp("(^| )"+a+"( |$)"),e=this.byTagName("*",b),f=0;f<e.length;f++)d.test(e[f].className)&&c.push(e[f]);return c},byName:function(a){return document.getElementsByName(a)},byTagName:function(a,b){return(b||document).getElementsByTagName(a)},hasClass:function(a,b){return a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))},addClass:function(a,b){this.hasClass(a,b)||(a.className+=" "+b)},removeClass:function(a,b){var c;this.hasClass(a,b)&&(c=new RegExp("(\\s|^)"+b+"(\\s|$)"),a.className=a.className.replace(c," "))},offset:function(a){for(var b=a.offsetLeft,c=a.offsetTop,d=a.offsetParent;null!==d;)b+=d.offsetLeft,c+=d.offsetTop,d=d.offsetParent;return{left:b,top:c}},winSize:function(){var a,b;return window.innerWidth?(a=window.innerWidth,b=window.innerHeight):document.body&&document.body.clientWidth&&(a=document.body.clientWidth,b=document.body.clientHeight),document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight&&(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight),{width:a,height:b}},scrollLeft:function(){return document.documentElement.scrollLeft||document.body.scrollLeft},followPos:function(b,e,f,g){var h=this.offset(b),i=this.scrollLeft(),j=h.left,k=j+b.offsetWidth,a=j-i,l=a+b.offsetWidth,d=this.winSize().width,c="right"===g?0<=l-e?k-e+1:Math.max(k-d,0):e<=d-a-20?j:d-e-20+i;return{oLeft:c,oTop:h.top+b.offsetHeight+10}},addEvent:function(a,b,c){a.addEventListener?a["on"+b]=c:a.attachEvent("on"+b,function(){c.call(a)})}},YQ.FN={getClientLang:function(){return navigator.browserLanguage||navigator.language||"en"},doTrackAppend:function(g){var e=g.YQ_ContainerId,j=g.YQ_Num.toString().replace(/(^\s*)|(\s*$)/g,""),i=g.YQ_Fc||0,k=g.YQ_Sc||0,o=g.YQ_Lang||YQ.FN.getClientLang(),n=g.YQ_Height||YQ.ExtCall.maxHeight,q=g.YQ_RmAD||!1,a=g.YQ_RmHeader||!1,l=g.YQ_RmLink,d=g.YQ_RK,c=g.YQ_Query;if(!this.isSupport(o))return!1;for(var r,s="trackIframe-"+Math.floor(1e6*Math.random()),t={apitype:1,uheight:n,nums:j,fc:i,sc:k,iframeId:s,rmad:q,rmh:a,rml:l,rk:d,query:c},p=this.urlEncode(t),f=YQ.ExtCall.url+"/"+o+"/track"+p,h=document.getElementById(e);h.firstChild;)h.removeChild(h.firstChild);return YQ.UI.byId(e)&&((r=document.createElement("iframe")).setAttribute("src",f),r.setAttribute("id",s),r.setAttribute("width","100%"),r.setAttribute("height",310),r.setAttribute("frameBorder",0),r.style.border="1px solid #e0e0e0",r.style.boxShadow="0 0px 1px 0 rgba(0,0,0,.12)",r.style.minWidth="260px",r.style.maxHeight=YQ.ExtCall.maxHeight+"px",YQ.UI.byId(e).style.display="block",YQ.UI.byId(e).appendChild(r)),s},doTrackBox:function(j){var e,q,v,x=j.YQ_Lang||YQ.FN.getClientLang(),r=j.YQ_Num.toString().replace(/(^\s*)|(\s*$)/g,""),n=j.YQ_Fc||0,s=j.YQ_Sc||0,a=j.YQ_Width||322,z=j.YQ_Height||YQ.ExtCall.maxHeight,d=j.apiType,c=j.YQ_RmAD||!1,u=j.YQ_RmHeader||!1,m=j.YQ_RmLink,w=j.YQ_RK,p=j.YQ_Direction,f=j.YQ_Query;if(!this.isSupport(x))return!1;var h=YQ.UI.winSize().width;h-40<a&&(a=h-40),q=(e=YQ.UI.followPos(j.follow,a,z,p)).oTop,v=e.oLeft;var b,A="trackIframe-"+Math.floor(1e6*Math.random()),g=this.urlEncode({apitype:d,uheight:z,nums:r,fc:n,sc:s,close:1,iframeId:A,rmad:c,rmh:u,rml:m,rk:w,query:f}),y=YQ.ExtCall.url+"/"+x+"/track?timestamp="+new Date().getTime()+g;return(b=document.createElement("iframe")).setAttribute("id",A),b.setAttribute("width",a),b.setAttribute("height",310),b.setAttribute("frameBorder",0),b.setAttribute("class","jcTrackIframe"),b.style.position="absolute",b.style.left=v+"px",b.style.top=q+"px",b.style.zIndex=99999,b.style.background="#fff",b.style.border="1px solid #e0e0e0",b.style.boxShadow="0 0px 1px 0 rgba(0,0,0,.12)",b.style.minWidth="260px",b.style.maxHeight=YQ.ExtCall.maxHeight+"px",b.setAttribute("src",y),document.body.appendChild(b),A},isSupport:function(a){if(YQBrowserCheck.unSupport()){var b=a&&update_i18n[a]||update_i18n.en;return b.__content1,b.__content2,(alert(b.__content1+"\n"+b.__content2),!1)}return!0},getSubdomain:function(){try{var a="",b=document.domain,c=b.split(".");if(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(b)||"localhost"===b)return b;var d=[];for(d.unshift(c.pop());c.length;)d.unshift(c.pop()),a=d.join(".");return a||document.domain}catch(a){return document.domain}},urlEncode:function(a,b){if("[object Object]"!==Object.prototype.toString.call(a))return"";var c=[];for(d in a){if("query"===d)break;(a[d]||0===a[d]||!1===a[d])&&c.push(d+"="+(null==b||b?encodeURIComponent(a[d]):a[d]))}var d,e=a.query||{utm_medium:"Referral",utm_source:this.getSubdomain()},f=[],g="";for(d in e)void 0!==e[d]&&f.push(d+"="+(null==b||b?encodeURIComponent(e[d]):e[d]));return 0<f.length&&(g+="?",g+=f.join("&")),g+"#"+c.join("&")},emitLifecycle:function(a,b){var c=YQ.ExtCall.instances[a],d=["onLoad","onLoaded","onClose","onClosed"];if(0<=d.indexOf(b)&&c&&c[b]&&"function"==typeof c[b]){var e,f={};for(e in c)c.hasOwnProperty(e)&&0>d.indexOf(e)&&(f[e]=c[e]);f.iframeId=a,c[b](f)}},onLifecycle:function(a,b){var c,d=YQ.ExtCall.instances;for(c in d)d.hasOwnProperty(c)&&!YQ.UI.byId(c)&&delete d[c];d[a]=b}},function(a,g,h){h.configs&&h.configs.env;for(var b,c=["enogy-dchome.com","renogy.cn"],j=!(h.ExtCall={url:"https://extcall.17track.net",minHeight:488,maxHeight:800,instances:{}}),d=0;d<c.length;d++)b=c[d],-1<location.host.indexOf(b)&&(j=!0);window.YQV5={trackSingle:function(a){a.YQ_RmLink=j;var b=h.FN.doTrackAppend(a);h.FN.onLifecycle(b,a)},trackMulti:function(a){a.YQ_RmLink=j;var b,c,d,e,f=h.UI.byId(a.YQ_ContainerId);f&&(b=a.YQ_Width||"100%",c=a.YQ_Height||h.ExtCall.minHeight,d=a.YQ_Lang?h.ExtCall.url+"/"+a.YQ_Lang+"/multiline":h.ExtCall.url+"/multiline",d+="#apitype=2",a.YQ_RmAD&&(d+="&rmad=true"),a.YQ_RmHeader&&(d+="&rmh=true"),a.YQ_RmLink&&(d+="&rml=true"),a.YQ_RK&&(d+="&rk="+a.YQ_RK),(e=document.createElement("iframe")).setAttribute("src",d),e.setAttribute("width",b),e.setAttribute("height",c),e.setAttribute("frameBorder",0),e.style.minHeight="356px",e.style.maxHeight=h.ExtCall.maxHeight+"px",f.appendChild(e))},trackSingleF1:function(b){b.YQ_RmLink=j;var k=h.UI.byId(b.YQ_ElementId);k&&h.UI.addEvent(k,"click",function(){var f=b.YQ_Width,e=b.YQ_Height,j=b.YQ_Lang||h.FN.getClientLang(),i=b.YQ_Num.replace(/\s+/g,""),o=b.YQ_Fc||0,p=b.YQ_Sc||0,n=b.YQ_RmAD||!1,q=b.YQ_RmHeader||!1,a=b.YQ_RmLink,l=b.YQ_RK,d=b.YQ_Direction,c=b.YQ_Query,r=h.UI.byClass("jcTrackIframe",g)[0];r&&r.parentNode.removeChild(r);var m=h.FN.doTrackBox({YQ_Width:f,YQ_Height:e,YQ_Lang:j,YQ_Num:i,YQ_Fc:o,YQ_Sc:p,follow:k,apiType:3,YQ_RmAD:n,YQ_RmHeader:q,YQ_RmLink:a,YQ_RK:l,YQ_Direction:d,YQ_Query:c});h.FN.onLifecycle(m,b)})},trackSingleF2:function(b){b.YQ_RmLink=j;var e,k,q,v,x,y,z,A,B,C,D,E,F,G,H=h.UI.byId(b.YQ_ElementId);H&&(e=b.YQ_Width,k=b.YQ_Height,q=b.YQ_Lang||h.FN.getClientLang(),v=b.YQ_Num,x=b.YQ_Fc||0,y=b.YQ_Sc||0,z=b.YQ_RmAD||!1,A=b.YQ_RmHeader||!1,B=b.YQ_RmLink,C=b.YQ_RK,D=b.YQ_Direction,E=b.YQ_Query,(F=h.UI.byClass("jcTrackIframe",g)[0])&&F.parentNode.removeChild(F),G=h.FN.doTrackBox({YQ_Width:e,YQ_Height:k,YQ_Lang:q,YQ_Num:v,YQ_Fc:x,YQ_Sc:y,follow:H,apiType:4,YQ_RmAD:z,YQ_RmHeader:A,YQ_RmLink:B,YQ_RK:C,YQ_Direction:D,YQ_Query:E}),h.FN.onLifecycle(G,b))},removeTrackIframe:function(){var a=h.UI.byClass("jcTrackIframe",g)[0];a&&a.parentNode.removeChild(a)}},window.yqtrack_v4=function(a){window.YQV5.trackSingle({YQ_ContainerId:a.container.id,YQ_Height:a.height,YQ_Lang:a.lng,YQ_Width:a.width,YQ_Num:a.num,YQ_Fc:a.et||0})},a.onmessage=function(a){var b,c,d;a.origin&&a.origin.match(/^http[s]?:\/\/extcall.17track.net/i)&&(c=a.data&&(a.data.iframeId||a.data.closeIframe)||"",a.data&&a.data.setHeight&&a.data.setHeight.iframeId&&(d=a.data.setHeight.msg,trackIframe=document.getElementById(a.data.setHeight.iframeId),trackIframe?trackIframe.setAttribute("height",d):console.log("No trackIframe",trackIframe)),a.data&&(a.data.close||a.data.closeIframe)&&(h.FN.emitLifecycle(c,"onClose"),(b=document.getElementById(c))&&document.body.removeChild(b),h.FN.emitLifecycle(c,"onClosed")),a.data&&a.data.loaded&&h.FN.emitLifecycle(c,"onLoaded"))}}(window,document,YQ);function doTrack(){var a=document.getElementById("YQNum").value;return""===a?void alert("Enter your number."):void YQV5.trackSingle({YQ_ContainerId:"YQContainer",YQ_Height:560,YQ_Fc:"0",YQ_Lang:"en",YQ_Num:a})}var input=document.getElementById("YQNum");input.addEventListener("keyup",function(a){13===a.keyCode&&(a.preventDefault(),document.getElementById("1").click())});
let text = "rifextrack.com";let result = text.link("https://www.rifextrack.com");document.getElementById("r").innerHTML = result;