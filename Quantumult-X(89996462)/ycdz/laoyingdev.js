/******************************

脚本功能：美容修颜相机——解锁VIP
下载地址：https://is.gd/Kt1NIb
软件版本：1.3
脚本作者：彭于晏💞
更新时间：2025-3-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/beauty.laoyingdev.com\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/laoyingdev.js

[mitm] 

hostname = beauty.laoyingdev.com

*******************************/

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888')
.replace(/vip_period_type":\d/g,'vip_period_type":1')
$done({ body });

