/******************************

脚本功能：Widgets小组件——解锁订阅
下载地址：https://is.gd/28dyYS
软件版本：1.4
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hfbyd.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "pending_renewal_info" : [
    {
      "product_id" : "qianxzj_cn",
      "original_transaction_id" : "430001575028097",
      "auto_renew_product_id" : "qianxzj_cn",
      "auto_renew_status" : "1"
    }
  ],
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6453409968,
    "receipt_creation_date" : "2023-10-05 08:02:44 Etc\/GMT",
    "bundle_id" : "com.qian.liu",
    "original_purchase_date" : "2023-10-05 07:02:37 Etc\/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4090440431000",
        "expires_date" : "9999-10-08 07:11:51 Etc\/GMT",
        "expires_date_pst" : "9999-10-08 00:11:51 America\/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001575028097",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001575028097",
        "purchase_date" : "2023-10-05 07:11:51 Etc\/GMT",
        "product_id" : "qianxzj_cn",
        "original_purchase_date_pst" : "2023-10-05 00:11:51 America\/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1696489911000",
        "web_order_line_item_id" : "430000753685643",
        "expires_date_ms" : "4090440431000",
        "purchase_date_pst" : "2023-10-05 00:11:51 America\/Los_Angeles",
        "original_purchase_date" : "2023-10-05 07:11:51 Etc\/GMT"
      }
    ],
    "adam_id" : 6453409968,
    "receipt_creation_date_pst" : "2023-10-05 01:02:44 America\/Los_Angeles",
    "request_date" : "2023-10-05 08:02:45 Etc\/GMT",
    "request_date_pst" : "2023-10-05 01:02:45 America\/Los_Angeles",
    "version_external_identifier" : 859807614,
    "request_date_ms" : "1696492965919",
    "original_purchase_date_pst" : "2023-10-05 00:02:37 America\/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1696489357000",
    "receipt_creation_date_ms" : "1696492964000",
    "original_application_version" : "1",
    "download_id" : 502839885807562232
  },

  "environment" : "Production",
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "9999-10-08 07:11:51 Etc\/GMT",
      "expires_date_pst" : "9999-10-08 00:11:51 America\/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001575028097",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001575028097",
      "purchase_date" : "2023-10-05 07:11:51 Etc\/GMT",
      "product_id" : "qianxzj_cn",
      "original_purchase_date_pst" : "2023-10-05 00:11:51 America\/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21368205",
      "original_purchase_date_ms" : "1696489911000",
      "web_order_line_item_id" : "430000753685643",
      "expires_date_ms" : "4090440431000",
      "purchase_date_pst" : "9999-10-05 00:11:51 America\/Los_Angeles",
      "original_purchase_date" : "2023-10-05 07:11:51 Etc\/GMT"
    }
  ],
  "status" : 0
}
  
$done({body : JSON.stringify(objc)});
