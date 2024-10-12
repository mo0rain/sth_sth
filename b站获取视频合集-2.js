var box = document.getElementsByClassName('video-pod__list multip list')[0];
box_single_list = box.querySelectorAll(".simple-base-item");
var class_res = new Array();
var class_res2 = "";
[].forEach.call(box_single_list, (item) => {
  var textline = item.innerText;
  var textline = textline.replace(/\n(?!P\d+)/g,' ');
  class_res.push(textline);
});
// console.log("总共多少集: " + class_res.length); // 总共多少集
[].forEach.call(class_res, (item) => {
  class_res2 += item;
  class_res2 += "\n";
});
// console.log(class_res2); // 课程

var times = 0; // 存放时间
timesStr = ""; // 处理时间格式 h:m:s 这种
var times_lists = document.querySelectorAll(".stats>.stat-item");
[].forEach.call(times_lists, (item) => {
    var ccc = item.innerText;
    time = (ccc.split(':')).length == 3?ccc.replace(/(\d+):(\d+):(\d+)/,($0, $1, $2, $3) => Number($1) * 60 * 60 + Number($2) * 60 + Number($3)):ccc.replace(/(\d+):(\d+)/,($0, $1, $2) => Number($1) * 60 + Number($2))
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


// 浏览器显示在一个框内打印输出
console.log(document.getElementsByClassName("video-title")[0].title  + "\n" + window.location.href.split("?")[0] + "\n" + "总共多少集: " + class_res.length + "\n" + "总时长为：" + times + "S 即：" + timesStr + "\n" + class_res2);

