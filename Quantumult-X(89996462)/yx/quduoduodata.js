/*******************************

脚本名称: 我的水世界重生——解锁支付
下载地址：微信小程序
使用说明:点击充值进入客服充值页面 返回既充值成功
软件版本：9.99.9
脚本作者：彭于晏💞
更新时间：2023-9-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/qddzf.quduoduodata.top url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/quduoduodata.js

[mitm] 

hostname = qddzf.quduoduodata.top

*******************************/

var body = $response.body.replace(/payStatus":\d/g,'payStatus":1')
$done({ body });
