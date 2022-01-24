const information=document.getElementById("information");
const infoArray=[];

infoArray.Host=location.host;
infoArray.AccessURL=location.href;
infoArray.ProtocolInformation=location.protocol;
infoArray.BrowserCodename=location.appCodeName;
infoArray.BrowserName=navigator.appName;
infoArray.browserLang=navigator.language;
infoArray.BrowserPlatform=navigator.platform;
infoArray.UserAgent=navigator.userAgent;
infoArray.Referrer=document.referrer;
infoArray.ScreenWidth=screen.width;
infoArray.ScreenHeight=screen.height;
infoArray.ScreenColorDepth=screen.colorDepth+"bit";
infoArray.browsersViewport_Width = window.innerWidth;
infoArray.browsersViewport_Height = window.innerHeight;
infoArray.DevicePixelRatio = window.devicePixelRatio;
infoArray.PointerEnabled = navigator.pointerEnabled;
infoArray.MaxTouchPoints = navigator.maxTouchPoints;
    
for(key in infoArray){
    information.innerHTML+=("<div><span>"+"<b>"+key+"</b>"+": "+infoArray[key]+"</span></div>");
}

setTimeout(function () {
    location.reload();
}, 20000);