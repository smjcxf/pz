/******************************

脚本功能：记乎——解锁VIP
下载地址：https://is.gd/M1pfGl
软件版本：3.4.7
脚本作者：彭于晏💞
更新时间：2023-9-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.geefoo\.cn\/v2\/account\/userinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jihu.js

[mitm]

hostname = api.geefoo.cn

*************************************/


var body = JSON.parse($response.body);

body.vip.expired_at = 4093235012;

$done({ body: JSON.stringify(body) });
