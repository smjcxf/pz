/*******************************

脚本功能：时光短剧-解锁会员
下载地址：https://t.cn/A68Th9n1
软件版本：20.3
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/apidj.meetboxs.com\/api\/v1\/user\/account\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/meetboxs.js

[mitm] 

hostname = apidj.meetboxs.com

*******************************/

var body = $response.body.replace(/vipEnabled":\w+/g,'vipEnabled":true')
.replace(/nickName":".*?"/g,'nickName":"彭于晏Crack"')
$done({ body });

