(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,r){"use strict";var s=r(26);r.n(s).a},113:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAiElEQVRoQ+3UQRHAIBAEQc4A/i3lGUVBAA4mjQN2um7eZ3/rR298OF5b4XjgpbDCsQWQjgW9vqOwwrEFkI4FdbSQRjq2ANKxoK400kjHFkA6FtSVRhrp2AJIx4K60kgjHVsA6VhQVxpppGMLIB0L6kojjXRsAaRjQV1ppJGOLYB0LKgrjXSd9AHaYZ9hJAcjCgAAAABJRU5ErkJggg=="},114:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAh0lEQVRoQ+3UQRHAIBAEQU4TkqMx7yAAB5PGATtdN/t5v/WjNz4cr61wPPBSWOHYAkjHgl7fUVjh2AJIx4I6WkgjHVsA6VhQVxpppGMLIB0L6kojjXRsAaRjQV1ppJGOLYB0LKgrjTTSsQWQjgV1pZFGOrYA0rGgrjTSSMcWQDoW1JVGuk76AAWzp5UMKQNGAAAAAElFTkSuQmCC"},115:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAhUlEQVRoQ+3UARUAEBQEQQLpH0wAAmiwRgO38/7ca53x0Zs+HK+tcDzwUFjh2AJIx4I+31FY4dgCSMeCOlpIIx1bAOlYUFcaaaRjCyAdC+pKI410bAGkY0FdaaSRji2AdCyoK4000rEFkI4FdaWRRjq2ANKxoK400kjHFkA6FtSVRrpO+gJ9f4oNCjLggwAAAABJRU5ErkJggg=="},116:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAiElEQVRoQ+3UARHAIBAEMd4AHupfTRUVATjYBgfcZn6ed3/rR298OF5b4XjgpbDCsQWQjgW9vqOwwrEFkI4FdbSQRjq2ANKxoK400kjHFkA6FtSVRhrp2AJIx4K60kgjHVsA6VhQVxpppGMLIB0L6kojjXRsAaRjQV1ppJGOLYB0LKgrjXSd9AEru3gBp77L6QAAAABJRU5ErkJggg=="},117:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAg0lEQVRoQ+3UAREAIAzEsOHfHYZAAA5KcMA3t7Vnn/noLR+O11Y4HngUVji2ANKxoM93FFY4tgDSsaCOFtJIxxZAOhbUlUYa6dgCSMeCutJIIx1bAOlYUFcaaaRjCyAdC+pKI410bAGkY0FdaaSRji2AdCyoK4000rEFkI4FdaWRrpO+weCecYFAqE8AAAAASUVORK5CYII="},118:function(t,e,r){"use strict";var s=r(27);r.n(s).a},120:function(t,e,r){"use strict";var s=r(28);r.n(s).a},122:function(t,e,r){"use strict";var s=r(29);r.n(s).a},124:function(t,e,r){"use strict";var s=r(30);r.n(s).a},159:function(t,e,r){t.exports=r.p+"static/img/singer-default.a96a15f.jpg"},160:function(t,e,r){"use strict";r.r(e),r(72);var s=r(70),i=r.n(s),a=(r(48),r(9)),o=r.n(a),n=(r(49),r(10)),c=r.n(n),l=(r(81),r(45)),u=r.n(l),d=r(0),h=(r(83),r(5)),p=Object(h.a)({name:"v-header",data:function(){return{keyword:"",resultCount:0,resultList:[],searchTip:"正在搜索...",tabs:[{path:"new",name:"新歌"},{path:"recommend",name:"推荐"},{path:"local",name:"本地"}]}},computed:{searchCount:function(){return this.$store.state.searchCount}},methods:{search:function(t){t&&""!==t.trim()?(this.$router.push("/search?keyword="+t),this.keyword=""):this.$MessageBox.alert("请输入搜索内容")},input:function(){var t=this,e=this.keyword;e&&""!==e.trim()&&(this.resultCount=0,this.searchTip="正在搜索...",this.api.search(e).then(function(e){200===e.status&&"OK"===e.statusText?(t.resultList=e.data.data[0].RecordDatas,t.resultCount=e.data.data[0].RecordCount,t.resultList.length<=0&&(t.resultCount=0,t.searchTip="暂无结果...")):t.searchTip="搜索出错, 请稍后重试"}).catch(function(e){t.resultCount=0,t.searchTip="网络出现错误或服务不可用"}))}}},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"header"}},[r("div",{staticClass:"header-search"},[r("div",{staticClass:"logo"}),t._v(" "),r("div",{staticClass:"search-form"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"歌手/歌名"},domProps:{value:t.keyword},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},t.input],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.search(t.keyword)}}}),t._v(" "),""!==t.keyword.trim()?r("div",{staticClass:"search-list"},[t.resultCount>0?r("ul",t._l(t.resultList,function(e,s){return r("li",{key:s,on:{click:function(r){t.search(e.HintInfo)}}},[t._v(t._s(e.HintInfo))])})):r("p",[t._v(t._s(t.searchTip))])]):t._e()]),t._v(" "),r("div",{staticClass:"search",on:{click:function(e){t.search(t.keyword)}}})]),t._v(" "),"/search"!==t.$route.path?r("div",{staticClass:"header-tab"},[r("ul",t._l(t.tabs,function(e,s){return r("li",{key:s},[r("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)}))]):r("div",{staticClass:"header-search-result"},[r("div",{staticClass:"goback",on:{click:function(e){t.$router.go(-1)}}}),t._v(" "),r("div",{staticClass:"searchCount"},[t._v("共有\n      "),r("em",[t._v(t._s(t.searchCount))]),t._v("条结果")])])])},[],!1,null,null,null).exports,f=r(7),m=r.n(f),g=r(71),y=r.n(g),v=r(16),A=r.n(v),C=r(25),w=r.n(C),S=r(1),L={name:"play-operate",computed:m()({},Object(S.c)(["paused","showDetail","curPlayIndex"])),methods:{togglePlayState:function(){this.$store.commit("setPaused")},changePlay:function(t){var e=this.curPlayIndex;"next"===t?e++:e--,this.$store.commit("setCurPlayIndex",e),this.$store.dispatch("playSong")}}},x=(r(111),Object(h.a)(L,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"play-operate",class:{"play-detail":t.showDetail}},[r("span",{staticClass:"prev",on:{click:function(e){t.changePlay("prev")}}}),t._v(" "),r("span",{staticClass:"play",class:{pause:t.paused},on:{click:t.togglePlayState}}),t._v(" "),r("span",{staticClass:"next",on:{click:function(e){t.changePlay("next")}}})])},[],!1,null,null,null).exports),I={name:"play-detail",data:function(){return{isShowList:!1,curPlayTime:0,curLrcIndex:0,progress:0,progressSpeed:0,endTime:0,progressTimer:null,rollTimer:null,translateY:0,mode:1,modeTip:"顺序播放",showModeTip:!1,modeSwitch:!1,currentImgSrc:"",isShowColorList:!1,defaultColor:"",activeColor:"",lrcColorList:[{defaultColor:"#b2f5b5",activeColor:"#d1c90e",currentImgSrc:r(113)},{defaultColor:"#c1f3dc",activeColor:"#33a3f5",currentImgSrc:r(114)},{defaultColor:"#a0f533",activeColor:"#f32d2d",currentImgSrc:r(115)},{defaultColor:"#eff366",activeColor:"#21d10e",currentImgSrc:r(116)},{defaultColor:"#efe8b2",activeColor:"#d200d2",currentImgSrc:r(117)}]}},computed:m()({},Object(S.c)(["view","curPlayIndex","songList","audio","isPlayed","showDetail","paused","curPlayImgSrc","curPlayLrcArr","lock","modeType","lrcSwitch"]),Object(S.b)(["curPlayFileName","listTotal"]),{songData:function(){return this.songList[this.curPlayIndex]}}),created:function(){this.init()},watch:{isPlayed:function(t,e){t&&this.initPlay()},paused:function(t,e){var r=this;t?this.clearTimer():(this.progressTimer=setTimeout(function(){r.progressGo()},1e3),this.rollTimer=setTimeout(function(){r.lrcRoll()},100))},curLrcIndex:function(t,e){if(this.$store.commit("setCurLrcIndex",t),this.showDetail){var r=this.$refs.lrcBox,s=r.offsetHeight,i=r.firstChild.offsetHeight,a=Math.floor(s/i);this.translateY=t>=a-1?i*(t-a+1):0}}},methods:{init:function(){var t=1,e=window.localStorage,r=e.currentColorObj,s=e.modeType,i=e.lrcSwitch;r=r?JSON.parse(r):this.lrcColorList[0],s||(s="order"),"loop"===s?t=2:"random"===s&&(t=3),i="false"!==i,this.$store.commit("setModeType",s),this.$store.commit("setLrcSwitch",i),this.$store.commit("setLrcColor",{defaultColor:r.defaultColor,activeColor:r.activeColor}),this.mode=t,this.currentImgSrc=r.currentImgSrc,this.defaultColor=r.defaultColor,this.activeColor=r.activeColor},initPlay:function(){this.progress=0,this.curPlayTime=0,this.audio.currentTime=0,this.endTime=parseInt(this.audio.duration),this.progressSpeed=Number((100/this.endTime).toFixed(2)),this.progressTimer&&this.clearTimer(),this.progressGo(),this.lrcRoll()},progressGo:function(){var t=this;this.curPlayTime++,this.progress+=this.progressSpeed,this.progress<100?this.progressTimer=setTimeout(function(){t.progressGo()},1e3):(this.progress=100,this.curPlayTime=this.endTime,this.dealMode())},lrcRoll:function(){var t=this,e=this.curPlayLrcArr,r=Number(this.audio.currentTime.toFixed(2)),s=!0,i=!1,a=void 0;try{for(var o,n=A()(e.entries());!(s=(o=n.next()).done);s=!0){var c=o.value,l=w()(c,2),u=l[0],d=l[1];if(Number(d.startTime)>=r){0===u?u=1:u===e.length-1&&(u=e.length-1),this.curLrcIndex=u-1;break}this.curLrcIndex=e.length-1}}catch(t){i=!0,a=t}finally{try{!s&&n.return&&n.return()}finally{if(i)throw a}}r<this.endTime&&(this.rollTimer=setTimeout(function(){t.lrcRoll()},100))},updateProgress:function(t){var e=t.offsetX,r=this.$refs.progressBar.offsetWidth;this.progress=Number((e/r*100).toFixed(2)),this.curPlayTime=parseInt((this.endTime*this.progress/100).toFixed(2)),this.audio.currentTime=this.curPlayTime,this.$store.commit("setLock",!0)},switchMode:function(){var t=this;if(!this.modeSwitch){var e="",r=!1;this.mode++,this.modeSwitch=!0,this.showModeTip=!0,this.mode%3==1?(this.modeTip="顺序播放",e="order"):this.mode%3==2?(this.modeTip="循环播放",e="loop",r=!0):(this.modeTip="随机播放",e="random"),this.$store.commit("setLoop",r),this.$store.commit("setModeType",e),window.localStorage.modeType=e,setTimeout(function(){t.modeSwitch=!1,t.showModeTip=!1},3e3)}},dealMode:function(){if(this.$store.commit("setLock",!1),"random"===this.modeType){var t=Math.floor(Math.random()*this.listTotal);this.$store.commit("setCurPlayIndex",t),this.$store.dispatch("playSong")}else"loop"===this.modeType&&this.initPlay()},clearTimer:function(){clearTimeout(this.progressTimer),clearTimeout(this.rollTimer)},playSong:function(t){this.$store.commit("setCurPlayIndex",t),this.$store.dispatch("playSong"),this.isShowList=!1},changeLrcColor:function(t){var e=this.lrcColorList[t];this.currentImgSrc=e.currentImgSrc,this.defaultColor=e.defaultColor,this.activeColor=e.activeColor,this.isShowColorList=!1;var r={currentImgSrc:this.currentImgSrc,defaultColor:this.defaultColor,activeColor:this.activeColor};this.$store.commit("setLrcColor",{defaultColor:this.defaultColor,activeColor:this.activeColor}),window.localStorage.currentColorObj=y()(r)},toggleLrcSwitch:function(t){t=!t,this.$store.commit("setLrcSwitch",t)}},filters:{formatDate:function(t){var e=parseInt(t/60),r=parseInt(t%60);return e<10&&(e="0"+e),r<10&&(r="0"+r),e+":"+r}},components:{"play-operate":x}},P=(r(118),Object(h.a)(I,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"move"}},[t.showDetail?r("div",{staticClass:"playDetail",style:{"background-image":"url("+t.curPlayImgSrc+")"}},[r("div",{staticClass:"playDetail-mark"}),t._v(" "),r("div",{staticClass:"playDetail-top"},[r("div",{staticClass:"goback",on:{click:function(e){t.$store.commit("setShowDetail",!1)}}}),t._v(" "),r("div",{staticClass:"playDetail-title"},[t._v(t._s(t.curPlayFileName))])]),t._v(" "),r("div",{staticClass:"playDetail-center"},[r("div",{ref:"lrcBox",staticClass:"lrc-box",style:{transform:"translateY(-"+t.translateY+"px)",color:t.defaultColor}},t._l(t.curPlayLrcArr,function(e,s){return r("p",{key:s,style:{color:t.curLrcIndex===s?t.activeColor:""},attrs:{startTime:e.startTime}},[t._v("\n          "+t._s(e.curLrc)+"\n        ")])}))]),t._v(" "),r("div",{staticClass:"playDetail-bottom"},[r("div",{staticClass:"lrc-switch"},[r("mt-switch",{attrs:{value:t.lrcSwitch},on:{change:t.toggleLrcSwitch}})],1),t._v(" "),r("div",{staticClass:"lrcColor-box"},[r("div",{staticClass:"cur-lrcColor",style:{backgroundImage:"url("+t.currentImgSrc+")"},on:{click:function(e){t.isShowColorList=!t.isShowColorList}}}),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.isShowColorList?r("div",{staticClass:"color-list"},[r("ul",t._l(t.lrcColorList,function(e,s){return r("li",{key:s,style:{backgroundImage:"url("+e.currentImgSrc+")"},on:{click:function(e){t.changeLrcColor(s)}}})}))]):t._e()])],1),t._v(" "),r("div",{staticClass:"time-wrap"},[r("div",{staticClass:"start-time"},[t._v(t._s(t._f("formatDate")(t.curPlayTime)))]),t._v(" "),r("div",{staticClass:"progress-wrap"},[r("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.updateProgress}}),t._v(" "),r("div",{staticClass:"progress",style:{width:t.progress+"%"}}),t._v(" "),r("div",{ref:"progressDot",staticClass:"progress-dot",style:{"margin-left":t.progress+"%"}})]),t._v(" "),r("div",{staticClass:"end-time"},[t._v(t._s(t._f("formatDate")(t.endTime)))])]),t._v(" "),r("div",{staticClass:"play-operateBox"},[r("div",{staticClass:"listen-mode order-play",class:t.modeType+"-play",on:{click:t.switchMode}},[r("transition",{attrs:{name:"fade"}},[t.showModeTip?r("div",{staticClass:"mode-tip"},[t._v(t._s(t.modeTip))]):t._e()])],1),t._v(" "),r("play-operate"),t._v(" "),r("div",{staticClass:"list-detail"},[r("div",{staticClass:"icon-list",class:{"active-list":t.isShowList},on:{click:function(e){t.isShowList=!t.isShowList}}}),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.isShowList?r("div",{staticClass:"play-list"},[r("ul",t._l(t.songList,function(e,s){return r("li",{key:s,class:{active:t.curPlayIndex===s},on:{click:function(e){t.playSong(s)}}},[t._v("\n                  "+t._s(s+1)+". "+t._s(e.FileName)+"\n                ")])}))]):t._e()])],1)],1)])]):t._e()])},[],!1,null,null,null).exports),_={name:"player",computed:m()({},Object(S.c)(["audioSrc","canPlayed","isPlayed","showDetail","curPlayIndex","curPlayImgSrc","paused","lock","loop","modeType"]),Object(S.b)(["curPlaySingerName","curPlaySongName","curPlayFileName"])),methods:{showPlayDetail:function(){this.$store.commit("setShowDetail",!0)},canplay:function(){if(!this.lock){var t=this.$refs.audio;4===t.readyState?(t.play(),this.$store.commit("setAudio",t),this.$store.commit("setIsPlayed",!0)):this.$Toast({message:"歌曲暂时无法播放, 请稍后重试",duration:3})}},ended:function(){if("order"===this.modeType){var t=this.curPlayIndex;t++,this.$store.commit("setCurPlayIndex",t),this.$store.dispatch("playSong")}}},components:{"play-operate":x,"play-detail":P}},T=(r(120),Object(h.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.canPlayed?r("div",{staticClass:"player"},[r("div",{staticClass:"footer-play",style:{visibility:t.showDetail?"hidden":"visible"}},[r("div",{staticClass:"footer-left",on:{click:t.showPlayDetail}},[r("div",{staticClass:"footer-singer",class:{rotate:t.isPlayed,paused:t.paused}},[r("img",{attrs:{src:t.curPlayImgSrc}})]),t._v(" "),r("div",{staticClass:"footer-playerInfo"},[r("p",{staticClass:"song-name"},[t._v(t._s(t.curPlaySongName))]),t._v(" "),r("p",{staticClass:"singer-name"},[t._v(t._s(t.curPlaySingerName))])])]),t._v(" "),r("div",{staticClass:"footer-right"},[r("play-operate")],1)]),t._v(" "),r("keep-alive",[r("play-detail")],1),t._v(" "),r("div",{staticClass:"audio"},[r("audio",{ref:"audio",attrs:{src:t.audioSrc,loop:t.loop},on:{canplay:t.canplay,ended:t.ended}})])],1):t._e()])},[],!1,null,null,null).exports),k={name:"suspend-lyric",data:function(){return{isDrag:!1,startX:0,startY:0,offsetX:0,offsetY:0}},computed:m()({},Object(S.c)(["canPlayed","curPlayLrcArr","curLrcIndex","lrcColor","lrcSwitch"]),{boundary:function(){return{left:0,right:document.body.offsetWidth-this.$refs.suspendLyric.offsetWidth,top:0,bottom:document.body.offsetHeight-this.$refs.suspendLyric.offsetHeight}},firstLrc:function(){var t=this.curPlayLrcArr,e=this.curLrcIndex;return 0===e?t[0]:(e+1)%2==0?t[e+1]?t[e+1]:m()({},t[e],{index:e+1,curLrc:""}):t[e]},nextLrc:function(){var t=this.curPlayLrcArr,e=this.curLrcIndex;return 0===e||1===e?t[1]:(e+1)%2==1?t[e+1]?t[e+1]:m()({},t[e],{index:e+1,curLrc:""}):t[e]}}),methods:{touchstart:function(t){this.isDrag=!0,this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.offsetX=this.$refs.suspendLyric.offsetLeft,this.offsetY=this.$refs.suspendLyric.offsetTop},touchmove:function(t){var e=t.targetTouches[0].pageX,r=t.targetTouches[0].pageY,s=e-this.startX+this.offsetX,i=r-this.startY+this.offsetY;s<=this.boundary.left?s=this.boundary.left:s>=this.boundary.right&&(s=this.boundary.right),i<=this.boundary.top?i=this.boundary.top:i>=this.boundary.bottom&&(i=this.boundary.bottom),this.$refs.suspendLyric.style.left=s+"px",this.$refs.suspendLyric.style.top=i+"px"},touchend:function(){this.isDrag=!1},close:function(){this.$store.commit("setLrcSwitch",!1)}}},b=(r(122),{name:"app",components:{"v-header":p,"suspend-lyric":Object(h.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[t.canPlayed&&t.lrcSwitch?r("div",{ref:"suspendLyric",attrs:{id:"suspend-lyric"},on:{touchstart:t.touchstart,touchmove:function(e){return e.preventDefault(),t.touchmove(e)},touchend:t.touchend}},[r("span",{staticClass:"close",on:{click:t.close}}),t._v(" "),r("p",{style:{color:t.firstLrc.index===t.curLrcIndex?t.lrcColor.activeColor:t.lrcColor.defaultColor}},[t._v(t._s(t.firstLrc.curLrc))]),t._v(" "),r("p",{style:{color:t.nextLrc.index===t.curLrcIndex?t.lrcColor.activeColor:t.lrcColor.defaultColor}},[t._v(t._s(t.nextLrc.curLrc))])]):t._e()])},[],!1,null,null,null).exports,player:T}}),j=(r(124),Object(h.a)(b,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-header"),this._v(" "),e("keep-alive",[e("router-view")],1),this._v(" "),e("player"),this._v(" "),e("suspend-lyric")],1)},[],!1,null,null,null).exports),R=r(17),$=r.n(R),O=r(18),N=r.n(O),F={new:"/api/new",recommend:"/api/recommend",local:"/api/local",search:"/searchtip",play:"/play",songsearch:"/songsearch"},D={search:function(t){return new $.a(function(e,r){var s={keyword:t};N.a.post(F.search,s).then(function(t){e(t)}).catch(r)})},getList:function(t){return new $.a(function(e,r){N.a.post(F[t]).then(function(t){e(t)}).catch(r)})},getSongInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new $.a(function(r,s){var i={page:e,pagesize:20,keyword:t,platform:"WebFilter",userid:-1,iscorrection:1,privilege_filter:0,filter:2};N.a.get(F.songsearch,{params:i}).then(function(t){r(t)}).catch(s)})},play:function(t){return new $.a(function(e,r){var s={r:"play/getdata",hash:t};N.a.get(F.play,{params:s}).then(function(t){e(t)}).catch(r)})}},E={playSong:function(t){var e=t.commit,s=t.getters;o.a.open("加载中..."),e("setIsPlayed",!1),e("setAudioSrc",""),e("setCurPlayLrcArr",[]),e("setCurPlayImgSrc",r(159)),e("setPaused"),e("setLock",!1),e("setCurLrcIndex",0);var i=s.curPlayFileName;D.getSongInfo(i).then(function(t){if(200===t.status&&"OK"===t.statusText){var e=t.data.data.lists[0].FileHash;a(e)}else c()({message:"播放歌曲失败",duration:3})}).catch(function(t){o.a.close(),c()("网络出现错误或服务暂时不可用")});var a=function(t){D.play(t).then(function(t){if(200===t.status&&"OK"===t.statusText){var r=t.data.data;if(!r.play_url)return c()({message:"暂无播放来源",duration:3}),void o.a.close("加载中...");var s=r.play_url,i=r.img,a=r.lyrics;o.a.close(),e("setCanPlayed",!0),e("setAudioSrc",s),e("setCurPlayLrcArr",a),e("setCurPlayImgSrc",i)}else c()({message:"播放歌曲失败",duration:3})}).catch(function(t){o.a.close(),c()("网络出现错误或服务暂时不可用")})}}},Q={setView:function(t,e){t.view=e},setSongList:function(t,e){t.songList=e},setSearchCount:function(t,e){t.searchCount=e},setShowDetail:function(t,e){t.showDetail=e},setAudio:function(t,e){t.audio=e},setAudioSrc:function(t,e){t.audioSrc=e},setIsPlayed:function(t,e){t.isPlayed=e},setCanPlayed:function(t,e){t.canPlayed=e},setPaused:function(t){t.audioSrc?(t.paused=!t.paused,t.paused?t.audio.pause():t.audio.play()):t.paused=!1},setCurPlayIndex:function(t,e){var r=t.songList.length;e<0?e=r-1:e>=r&&(e=0),t.curPlayIndex=e},setCurPlayImgSrc:function(t,e){t.curPlayImgSrc=e},setCurPlayLrcArr:function(t,e){if(0!==e.length){var r=e.replace(/\n/g,"").split("[").slice(1),s=[],i=!0,a=!1,o=void 0;try{for(var n,c=A()(r.entries());!(i=(n=c.next()).done);i=!0){var l=n.value,u=w()(l,2),d=u[0],h=u[1],p=h.split("]")[0].replace(".",":").split(":"),f={index:d,startTime:(60*Number(p[0])+Number(p[1])+Number(p[2])/1e3).toFixed(2),curLrc:h.split("]")[1]};s.push(f)}}catch(t){a=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(a)throw o}}t.curPlayLrcArr=s}},setLock:function(t,e){t.lock=e},setLoop:function(t,e){t.loop=e},setModeType:function(t,e){t.modeType=e},setCurLrcIndex:function(t,e){t.curLrcIndex=e},setLrcColor:function(t,e){t.lrcColor=e},setLrcSwitch:function(t,e){t.lrcSwitch=e,window.localStorage.lrcSwitch=e}};d.default.use(S.a);var V=new S.a.Store({state:{view:"",songList:[],searchCount:0,showDetail:!1,audio:null,audioSrc:null,isPlayed:!1,canPlayed:!1,paused:!1,curPlayIndex:-1,curPlayImgSrc:"",curPlayLrcArr:[],lock:!1,loop:!1,modeType:"order",curLrcIndex:0,lrcSwitch:!1,lrcColor:{defaultColor:"#b2f5b5",activeColor:"#d1c90e"}},getters:{listTotal:function(t){return t.songList.length},curPlayFileName:function(t){return t.curPlayIndex<0?"":t.songList[t.curPlayIndex].FileName},curPlaySongName:function(t){return t.curPlayIndex<0?"":t.songList[t.curPlayIndex].SongName},curPlaySingerName:function(t){return t.curPlayIndex<0?"":t.songList[t.curPlayIndex].SingerName}},actions:E,mutations:Q}),Y=r(46);d.default.use(Y.a);var U=new Y.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/new"},{path:"/*",component:function(){return r.e(1).then(r.bind(null,170))}}]});(function(){var t=window.navigator.appVersion.match(/iphone/gi),e=window.devicePixelRatio,r=1/(e=t?e>=3&&(!e||e>=3)?3:e>=2&&(!e||e>=2)?2:1:1),s=document.documentElement,i=document.querySelector("meta[name='viewport']");i||((i=document.createElement("meta")).setAttribute("name","viewport"),document.querySelector("head").appendChild(i));var a=function(){var t=s.getBoundingClientRect().width;t/e>540&&(t=540*e);var a=t/10;i.setAttribute("content","initial-scale="+r+",maximum-scale="+r+", minimum-scale="+r+",user-scalable=no"),s.setAttribute("data-dpr",e),s.style.fontSize=a+"px"};window.addEventListener("resize",a,!1),document.addEventListener("DOMContentLoaded",a,!1)})(),d.default.prototype.api=D,d.default.component(u.a.name,u.a),d.default.prototype.$Toast=c.a,d.default.prototype.$Indicator=o.a,d.default.prototype.$MessageBox=i.a,d.default.config.productionTip=!1;var B=new d.default({el:"#app",store:V,router:U,template:"<App/>",components:{App:j}});window.vm=B},24:function(t,e,r){},26:function(t,e,r){},27:function(t,e,r){},28:function(t,e,r){},29:function(t,e,r){},30:function(t,e,r){},83:function(t,e,r){"use strict";var s=r(24);r.n(s).a}},[[160,3,2]]]);