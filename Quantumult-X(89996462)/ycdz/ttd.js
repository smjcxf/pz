/******************************

脚本功能：天天豆+解锁VIP
下载地址：https://is.gd/9UZZnc
软件版本：3.0.14
脚本作者：彭于晏💞
更新时间：2023-8-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/bluediary-d0778\.du\.r\.appspot\.com\/users\/me\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ttd.js

[mitm] 

hostname = bluediary-d0778.du.r.appspot.com



*******************************/


var body = $response.body.replace(/expires_at":".*?"/g,'expires_at":"2099-09-04T10:52:35.618177"')
$done({ body });
