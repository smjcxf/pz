/******************************

脚本功能：题材库——解锁VIP权限
下载地址：微信小程序
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2024-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/miniapp\.guniuniu\.com\/api\/app\/user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/guniuniu.js

[mitm] 

hostname = miniapp.guniuniu.com

*******************************/

var body = $response.body.replace(/vipNotifyStatus":\d/g,'vipNotifyStatus":1')
.replace(/vipType":"\d"/g,'vipType":"1"')
.replace(/vipTime":\w+/g,'vipTime":"9999-10-20 11:30:33"')
$done({ body });

