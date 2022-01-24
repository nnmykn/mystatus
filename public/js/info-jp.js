const information=document.getElementById("information");
const infoArray=[];

infoArray.ホスト名=location.host;
infoArray.アクセスURL=location.href;
infoArray.プロトコル情報=location.protocol;
infoArray.ブラウザコードネーム=location.appCodeName;
infoArray.ブラウザ名=navigator.appName;
infoArray.言語=navigator.language;
infoArray.ブラウザプラットフォーム=navigator.platform;
infoArray.ユーザーエージェント=navigator.userAgent;
infoArray.リファラー=document.referrer;
infoArray.スクリーンの幅=screen.width;
infoArray.スクリーンの高さ=screen.height;
infoArray.スクリーンの色深度=screen.colorDepth+"bit";
infoArray.ブラウザのビューポートの幅 = window.innerWidth;
infoArray.ブラウザのビューポートの高さ = window.innerHeight;
infoArray.デバイスピクセル比 = window.devicePixelRatio;
infoArray.タッチ操作可能 = navigator.pointerEnabled;
infoArray.最大同時タッチ数 = navigator.maxTouchPoints;
    
for(key in infoArray){
    information.innerHTML+=("<div><span>"+"<b>"+key+"</b>"+": "+infoArray[key]+"</span></div>");
}
