/*******************************

脚本功能：九州短剧——解锁VIP
下载地址：https://is.gd/14WvF3
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2023—8-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosshortplay.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sanwubeixin.js

[mitm] 

hostname = iosshortplay.sanwubeixin.cn

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":253392455349000')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/money":\d+/g,'money":8888')
$done({ body });
