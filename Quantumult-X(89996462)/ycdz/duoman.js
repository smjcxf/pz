/*************************************

项目名称：多漫——解锁VIP
下载地址：https://is.gd/A3rDeO
软件版本：2.4
脚本作者：彭于晏💞
更新时间：2023-9-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]

^http:\/\/duoman\.flyingeffect\.com\/info\/user\/userInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/duoman.js

[mitm]

hostname = duoman.flyingeffect.com

*************************************/


var body = JSON.parse($response.body);

body.data.vip_end_time = "2099-12-31 23:01:42";
body.data.level = 1;
body.data.is_vip = 1;

$done({ body: JSON.stringify(body) });
