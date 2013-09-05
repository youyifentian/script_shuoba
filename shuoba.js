// ==UserScript==
// @name    说吧通话助手
// @author  有一份田
// @description 突破"说吧"会员和积分限制,自由畅打电话,自由呼叫
// @namespace   http://userscripts.org/scripts/show/177289
// @updateURL   https://userscripts.org/scripts/source/177289.meta.js
// @downloadURL https://userscripts.org/scripts/source/177289.user.js
// @icon    http://duoluohua.com/myapp/script/shuoba/images/icon_48.png
// @license GPL version 3
// @encoding    utf-8
// @include https://www.10086china.com/
// @include https://www.10086china.com/index*
// @include http://www.10086china.com/
// @include http://www.10086china.com/index*
// @run-at  document-end
// @version 1.0.0
// ==/UserScript==



/*
 * === 说明 ===
 *@作者:有一份田
 *@官网:http://duoluohua.com/download/
 *@Email:youyifentian@gmail.com
 *@Git:http://git.oschina.net/youyifentian
 *@转载重用请保留此信息
 *@最后修改时间:2013.09.06
 *
 *
 */
 // ===使用声明====
 
var statement='  声明:该脚本严禁用于任何商业通途,仅个人供学习、交流、研究、测试使用,\
切勿用其损害他人或公司利益,本脚本从安装使用开始,其产生的任何行为均由安装使用者本人负责,\
与原作者无任何关系,任何使用者一旦安装本脚本即认为其了解并同意本声明。';

 if(!window.localStorage["yyft_shuoba_isconsent"]){
    alert(statement);
    window.localStorage["yyft_shuoba_isconsent"]=1;
 }
 // ====/使用声明====
 
var version="1.0.0";




//以下为自定义信息,仅会在用户没有登录和绑定信息时显示

//主叫电话(可选,并不会显示)
var myPhone="";

//用户头像地址(可选)
var myPicUrl="";

//用户昵称(可选)
var myName="";

(function(){
    var callBtn=document.getElementById("callimg"),infoBox=document.getElementsByClassName("called_status_display");
    if(!callBtn || !infoBox.length)return;
    var userInfo=infoBox[0],imgurl=userInfo.childNodes[0].src,html="";
    html='<img width="36px" height="38px" alt="'+myName+'" src="'+(myPicUrl || imgurl)+'"><br>'+myName;
    if(imgurl=='https://www.10086china.com/images/called_status_icon_qq.png')userInfo.innerHTML=html;
    callBtn.onclick=call;
})();
function call() {
    var _0xd5aex12 = window[_0xf88e[3]][_0xf88e[2]];
    var _0xd5aex13 = _0xd5aex12[_0xf88e[6]]()[_0xf88e[5]](_0xf88e[4]);
    var _0xd5aex14;
    var _0xd5aex15 = $(_0xf88e[7])[_0xf88e[0]]();
    if (_0xd5aex13 != -1) {
        _0xd5aex14 = (_0xd5aex12[_0xf88e[8]](/chrome\/[\d]+/gi)).toString();
        if (parseInt(_0xd5aex14[_0xf88e[9]](7)) < 26) {
            var _0xd5aex16 = fzxwin[_0xf88e[14]][_0xf88e[13]](fzxwin[_0xf88e[12]][_0xf88e[11]](_0xf88e[10]));
            if (!_0xd5aex16) {
                return false;
            };
            fzxwin[_0xf88e[18]][_0xf88e[17]]({
                parentclass: _0xf88e[15],
                title: _0xf88e[16],
                content: _0xd5aex16,
                width: 388,
                height: 228,
                ok: true,
                no: true,
                onOk: _0xd5aex15
            });
            return false;
        };
    } else {
        var _0xd5aex16 = fzxwin[_0xf88e[14]][_0xf88e[13]](fzxwin[_0xf88e[12]][_0xf88e[11]](_0xf88e[19]));
        if (!_0xd5aex16) {
            return false;
        };
        fzxwin[_0xf88e[18]][_0xf88e[17]]({
            parentclass: _0xf88e[15],
            title: _0xf88e[16],
            content: _0xd5aex16,
            width: 388,
            height: 228,
            ok: true,
            no: true,
            onOk: _0xd5aex15
        });
        return false;
    };
    phone = $(_0xf88e[20])[_0xf88e[0]]();
    var _0xd5aex17 = $(_0xf88e[21])[_0xf88e[0]]();
    if (_0xf88e[22] == phone) {
        $(_0xf88e[20])[_0xf88e[23]]();
        return false;
    };
    if (!chkPone[_0xf88e[24]](phone)) {
        var _0xd5aex16 = fzxwin[_0xf88e[14]][_0xf88e[13]](fzxwin[_0xf88e[12]][_0xf88e[11]](_0xf88e[25]));
        if (!_0xd5aex16) {
            return false;
        };
        fzxwin[_0xf88e[18]][_0xf88e[17]]({
            title: _0xf88e[16],
            content: _0xd5aex16,
            width: 348,
            height: 165,
            ok: true,
            no: false
        });
        return false;
    };
    var _0xd5aex18 = $(_0xf88e[26])[_0xf88e[0]]();
    var _0xd5aex19 = _0xf88e[27] + phone + _0xf88e[28] + _0xd5aex17;
    $[_0xf88e[68]](_0xd5aex18, _0xd5aex19,
    function(_0xd5aex1a) {
        var _0xd5aex1b = eval(_0xf88e[29] + _0xd5aex1a + _0xf88e[30]);
        if ("Fuckyou"== _0xd5aex1b[_0xf88e[31]]) {
            //Fuck me
        } else {
            var _0xd5aex1d = $(_0xf88e[40])[_0xf88e[0]]();
            var _0xd5aex17 = $(_0xf88e[21])[_0xf88e[0]]();
            var _0xd5aex1e = _0xf88e[41] + phone + _0xf88e[28] + _0xd5aex17;
            var _0xd5aex1f = 1;//已绑定phone
            var _0xd5aex20 = 1;//已绑定QQ
            var _0xd5aex21 = 123456;//测试ID或者phone,主叫phone
            var _0xd5aex22 = _0xf88e[24];//test字符串
            var _0xd5aex23 = phone;//被叫phone
            $[_0xf88e[68]](_0xd5aex1d, _0xd5aex1e,
            function(_0xd5aex1a) {
                var _0xd5aex24 = eval(_0xf88e[29] + _0xd5aex1a + _0xf88e[30]);
                if (0 == _0xd5aex24[_0xf88e[31]]) {
                    if (_0xf88e[22] != _0xd5aex24[_0xf88e[34]][_0xf88e[42]]) {
                        _0xd5aex1f = 1;
                        _0xd5aex22 = _0xf88e[43];
                        _0xd5aex21 = _0xd5aex24[_0xf88e[34]][_0xf88e[42]];
                    } else {
                        _0xd5aex20 = 1;
                    };
                    if (_0xf88e[22] != _0xd5aex24[_0xf88e[34]][_0xf88e[44]]) {
                        _0xd5aex23 = _0xd5aex24[_0xf88e[34]][_0xf88e[44]];
                    };
                };
                _0xd5aex1f = 1;//是否有主叫phone或者已登录绑定等
                _0xd5aex22 = _0xf88e[43];//是否登录注册绑定等
                _0xd5aex21 = _0xd5aex21 || myPhone;//主叫phone
                _0xd5aex20 = 1;
                //_0xd5aex23= _0xd5aex23 || "被您呼叫的电话";//被叫phone

                secondTime_1 = 0;
                secondTime_2 = 0;
                secondTime_3 = 10800;
                $(_0xf88e[46])[_0xf88e[45]](_0xd5aex23);
                $(_0xf88e[50])[_0xf88e[49]](_0xf88e[47], imgurl + _0xf88e[48]);
                $(_0xf88e[52])[_0xf88e[45]](_0xf88e[51]);
                $(_0xf88e[54])[_0xf88e[49]](_0xf88e[53], true);
                $(_0xf88e[54])[_0xf88e[58]](_0xf88e[57])[_0xf88e[56]](_0xf88e[55]);
                $(_0xf88e[60])[_0xf88e[59]]();
                lwStartVoip(_0xd5aex21, phone, {
                    userclass: _0xd5aex22,
                    media_ok: function() {
                        $(_0xf88e[60])[_0xf88e[61]]();
                        $(_0xf88e[52])[_0xf88e[45]](_0xf88e[62]);
                        $(_0xf88e[54])[_0xf88e[63]](_0xf88e[53]);
                        $(_0xf88e[54])[_0xf88e[58]](_0xf88e[55])[_0xf88e[56]](_0xf88e[57]);
                        unload = 1;
                        window[_0xf88e[64]] = onbeforeunload_handler;
                        window[_0xf88e[65]] = onunload_handler;
                        var _0xd5aex25 = $(_0xf88e[66])[_0xf88e[0]]();
                        var _0xd5aex26 = _0xf88e[27] + _0xd5aex21 + _0xf88e[67] + phone;
                        $[_0xf88e[68]](_0xd5aex25, _0xd5aex26,
                        function(_0xd5aex1a) {
                            var _0xd5aex26 = eval(_0xf88e[29] + _0xd5aex1a + _0xf88e[30]);
                        });
                    },
                    media_fail: function() {
                        $(_0xf88e[60])[_0xf88e[61]]();
                        back_index();
                        var _0xd5aex16 = fzxwin[_0xf88e[14]][_0xf88e[13]](fzxwin[_0xf88e[12]][_0xf88e[11]](_0xf88e[69]));
                        if (!_0xd5aex16) {
                            return false;
                        };
                        fzxwin[_0xf88e[18]][_0xf88e[17]]({
                            title: _0xf88e[16],
                            content: _0xd5aex16,
                            width: 348,
                            height: 165,
                            ok: true,
                            no: false
                        });
                        return false;
                    },
                    ringing: function() {
                        $(_0xf88e[50])[_0xf88e[49]](_0xf88e[47], imgurl + _0xf88e[70]);
                    },
                    talking: function() {
                        $(_0xf88e[50])[_0xf88e[49]](_0xf88e[47], imgurl + _0xf88e[71]);
                        window[_0xf88e[72]](InterValObj_2);
                        secondTime_2 = 0;
                        $(_0xf88e[52])[_0xf88e[45]](_0xf88e[83]);
                        window[_0xf88e[72]](InterValObj);
                        $(document)[_0xf88e[75]](function() {
                            InterValObj = window[_0xf88e[74]](_0xd5aex2a, 1000);
                        });
                        function _0xd5aex2a() {
                            time_str_1 = JiShi(secondTime_1, 1);
                            $(_0xf88e[52])[_0xf88e[45]](time_str_1);
                        };
                    },
                    peerhangup: function() {
                        var _0xd5aex2b = JiShi(secondTime_1, 0);
                        $(_0xf88e[52])[_0xf88e[45]](_0xd5aex2b);
                        share_calltime = secondTime_1;
                        window[_0xf88e[72]](InterValObj);
                        window[_0xf88e[72]](InterValObj_2);
                        window[_0xf88e[72]](InterValObj_3);
                        secondTime_1 = 0;
                        secondTime_2 = 0;
                        secondTime_3 = 10800;
                        $(_0xf88e[52])[_0xf88e[45]](_0xf88e[84]);
                        window[_0xf88e[72]](InterValObj_back);
                        $(document)[_0xf88e[75]](function() {
                            InterValObj_back = window[_0xf88e[74]](back_index, 2000);
                        });
                    }
                });
                $(_0xf88e[85])[_0xf88e[61]]();
                $(_0xf88e[86])[_0xf88e[61]]();
                $(_0xf88e[87])[_0xf88e[59]]();
            });
        };
    });
};

function loadJs(js){
    var oHead=document.getElementsByTagName('HEAD')[0],
        oScript= document.createElement("script"); 
    oScript.type = "text/javascript"; 
    oScript.text =js;
    oHead.appendChild( oScript);    
}
function googleAnalytics(){
    var js="var _gaq = _gaq || [];";
    js+="_gaq.push(['_setAccount', 'UA-43822303-1']);";
    js+="_gaq.push(['_trackPageview']);";
    js+="function googleAnalytics(){";
    js+="   var ga = document.createElement('script');ga.type = 'text/javascript';";
    js+="   ga.async = true;ga.src = 'https://ssl.google-analytics.com/ga.js';";
    js+="   var s = document.getElementsByTagName('script')[0];";
    js+="   s.parentNode.insertBefore(ga, s)";
    js+="}";
    js+="googleAnalytics();";
    js+="_gaq.push(['_trackEvent','shuobahelper',String(new Date().getTime())]);";
    loadJs(js);
}
googleAnalytics();