/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-01-25
 *
 * 


\B\u\d\g\e\t\ \F\l\o\w\ \终\身订\阅\

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoBudgetFlow.js

2、打开软件 > 右下角设置 > 「解锁完整版」 > 点击「恢复购买」

3、如果加载不出来，请使用全局代理模式

4、解锁成功理论上有消息弹窗，成功后即可关闭脚本。[🚨🚨🚨无效请关掉软件进程后，先打开脚本，再进软件进行解锁]

5、⚠️⚠️⚠️解锁脚本不可共存，请逐一使用并关闭。


[mitm]
hostname = api.revenuecat.com

[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/bf.js
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/bf.js

********************************/
