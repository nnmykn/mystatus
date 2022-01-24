const information=document.getElementById("information");
const infoArray=[];

const API_URL = 'https://api.ipify.org/?format=json'
const res = await fetch(API_URL)
const data = await res.json()
console.log(data.ip)

infoArray.グローバルIP=data.ip;
infoArray.ホスト=location.host;
infoArray.ホスト名=location.hostname;
infoArray.ポート番号=location.port;
infoArray.URL=location.href;
infoArray.プロトコル情報=location.protocol;
infoArray.サーチ情報=location.search;
infoArray.ハッシュ=location.hash;
infoArray.ページURLのパス=location.pathname;
infoArray.ブラウザのコードネーム=location.appCodeName;
infoArray.ブラウザ名=navigator.appName;
infoArray.ブラウザのバージョン=navigator.appVersion;
infoArray.ブラウザの使用言語=navigator.language;
infoArray.ブラウザのプラットフォーム=navigator.platform;
infoArray.ブラウザのユーザーエージェント=navigator.userAgent;
infoArray.リファラー=document.referrer;
infoArray.ドメイン=document.domain;
infoArray.スクリーンの幅=screen.width;
infoArray.スクリーンの高さ=screen.height;
infoArray.スクリーンの色深度=screen.colorDepth+"bit";
infoArray.ブラウザのビューポートの幅 = window.innerWidth;
infoArray.ブラウザのビューポートの高さ = window.innerHeight;
infoArray.デバイスピクセル比 = window.devicePixelRatio;
infoArray.タッチ操作可能 = navigator.pointerEnabled;
infoArray.最大同時タッチ数 = navigator.maxTouchPoints;

for(key in infoArray){
  information.innerHTML+=(key+":"+infoArray[key]+"<br>");
}
