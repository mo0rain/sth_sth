var box = document.getElementsByClassName('list-box')[0];
var boxtext = box.innerText;
var textline = boxtext.replace(/\n(?!P\d+)/g,' ');
len = textline.split("\n").length
console.log("总共多少集: " + len);
// 获取总时间
var ul = document.querySelector(".cur-list>.list-box"),
liList = ul.getElementsByTagName("li"), // 获取列表的liList数组
times = 0, // 存放时间
timesStr = ""; // 处理时间格式 h:m:s 这种
// 处理（获取）总时长
[].forEach.call(liList, (item) => {
  var a = item.getElementsByTagName("a")[0],
    title = a.title,
    div = a.getElementsByClassName("duration")[0],
    time = (div.innerText.split(':')).length == 3?div.innerText.replace(/(\d+):(\d+):(\d+)/,($0, $1, $2, $3) => Number($1) * 60 * 60 + Number($2) * 60 + Number($3)):div.innerText.replace(/(\d+):(\d+)/,($0, $1, $2) => Number($1) * 60 + Number($2))
    times += Number(time);
});
// 处理时间格式
((_) => {
  var h = parseInt(times / 3600),
    m = parseInt((times - h * 3600) / 60),
    ss = times - h * 3600 - m * 60, // 仅仅是验证秒的正确性
    s = times % 60;
    [h, m, s].forEach((item, index) => {
        item = item < 10 ? "0" + item : item;
        // 让[h, m, s]的最后一位时走esle
        index < 2 ? timesStr += item + ":" : timesStr += item;
   });
})();
console.log("总时长为：" + times + "S 即：" + timesStr);
// 打印视频列表 格式: P1 01 视频单p标题 时长
console.log(textline);
// 打印url地址
// 浏览器显示在一个框内打印输出
console.log(document.getElementsByClassName("video-title")[0].title  + "\n" + window.location.href + "\n" + "总共多少集: " + len + "\n" + "总时长为：" + times + "S 即：" + timesStr + "\n" + textline);
