/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-11-09
 *
 * 


\s\t\e\a\m\ \e\p\i\c\ \喜\加\一\

仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：

1、⚠️ 配置文件 [task_local] 标签添加

0 0 11 * * ? https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoXiJiaYi.js, tag=🕹XiaoMao_喜加一, img-url=https://raw.githubusercontent.com/Toperlock/Quantumult/main/icon/Doraemon/Doraemon-1092.png, enabled=true



单独脚本地址：
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoXiJiaYi.js

********************************/

function Env(name) {
  // 判断当前环境是否为 Loon
  const isLoon = typeof $loon !== "undefined";
  // 判断当前环境是否为 Surge
  const isSurge = typeof $httpClient !== "undefined" && !isLoon;
  // 判断当前环境是否为 QuantumultX
  const isQX = typeof $task !== "undefined";

  // 定义 read 方法，用于读取数据
  const read = (key) => {
    if (isLoon || isSurge) return $persistentStore.read(key);
    if (isQX) return $prefs.valueForKey(key);
  };

  // 定义 write 方法，用于写入数据
  const write = (key, value) => {
    if (isLoon || isSurge) return $persistentStore.write(key, value);
    if (isQX) return $prefs.setValueForKey(key, value);
  };

  // 定义 notify 方法，用于发送通知
  const notify = (title = "XiaoMao", subtitle = "", message = "", url = "",url2 = url) => {
    if (isLoon) $notification.post(title, subtitle, message, url);
    if (isSurge) $notification.post(title, subtitle, message, { url });
    if (isQX) $notify(title, subtitle, message, { "open-url": url, "media-url": url2 });
  };

  // 定义 get 方法，用于发送 GET 请求
  const get = (url, callback) => {
    if (isLoon || isSurge) $httpClient.get(url, callback);
    if (isQX) {
      url.method = `GET`;
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 post 方法，用于发送 POST 请求
  const post = (url, callback) => {
    if (isLoon || isSurge) $httpClient.post(url, callback);
    if (isQX) {
      url.method = `POST`;
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 put 方法，用于发送 PUT 请求
  const put = (url, callback) => {
    if (isLoon || isSurge) $httpClient.put(url, callback);
    if (isQX) {
      url.method = "PUT";
      $task.fetch(url).then((resp) => callback(null, {}, resp.body));
    }
  };

  // 定义 toObj 方法，用于将字符串转为对象
  const toObj = (str) => JSON.parse(str);

  // 定义 toStr 方法，用于将对象转为字符串
  const toStr = (obj) => JSON.stringify(obj);

  // 定义 queryStr 方法，用于将对象转为可以请求的字符串
  const queryStr = (obj) => {
    return Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  };

  // 定义 log 方法，用于输出日志
  const log = (message) => console.log(message);

  // 定义 done 方法，用于结束任务
  const done = (value = {}) => $done(value);

  // 返回包含所有方法的对象
  return {
    name,
    read,
    write,
    notify,
    get,
    post,
    put,
    toObj,
    toStr,
    queryStr,
    log,
    done,
  };
}
const $ = new Env("XiaoMaoXiJiaYi");

let option = { url: encodeURI("https://api.pearktrue.cn/api/steamplusone") };

$.get(option, (err, resp, response) => {
  if (response) {
    let obj = JSON.parse(response);
    if (obj.code == 200) {
      let changeNum = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
      ];
      let text =
        "今日喜加" +
        changeNum[obj.count] +
        "！ " +
        "[UpdateTime:" +
        obj.time +
        "]" +
        "\n\n\n";
      let listLength = obj.data.length;
      if (listLength) {
        obj.data.forEach((element, index) => {
          text =
            text +
            "🎁仓库加" +
            changeNum[index + 1] +
            "：" +
            element.name +
            "\n\n" +
            "⛓来源类型：" +
            "[" +
            element.source +
            "]" +
            element.type +
            "\n\n" +
            "⏱持续时间：" +
            element.starttime +
            " ~ " +
            element.endtime +
            "\n\n" +
            "🕹领取地址：" +
            element.url +
            "\n\n\n" +
            (listLength == 1 ? "" : "-----------------------------") +
            "\n\n\n";
        });
      }
      $.notify("🕹XiaoMao_喜加一", "🌟点击查看", text);
      $.log(text);
    } else {
      getError("_error_2");
    }
  } else {
    getError("_error_1");
  }
});

function getError(params = "") {
  $.notify(
    "🕹XiaoMao_喜加一",
    "",
    "🚧" + params + "获取失败，请稍后再试❗️",
    "https://i.pixiv.re/img-original/img/2022/09/19/08/00/04/101330591_p0.png"
  );
}
setTimeout(() => {
  $done({});
}, 6000);
