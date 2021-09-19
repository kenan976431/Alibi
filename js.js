 var nameRef = document.getElementById('name');
 var schoolRef = document.getElementById('school');
 var studentIdRef = document.getElementById('studentId');
 var timeRef = document.getElementById('time');

 function check(val) {
   if (val < 10) {
     return ("0" + val);
   } else {
     return (val);
   }
 }

 function displayTime() {
   //获取系统当前的年、月、日、小时、分钟、毫秒
   var date = new Date();
   var month = date.getMonth() + 1;
   if (month < 10) {
     month = '0' + month;
   }
   var day = date.getDate();
   if (day < 10) {
     day = '0' + day;
   }
   var hour = date.getHours();
   var minutes = date.getMinutes();
   var second = date.getSeconds();
   var timestr = `${month}-${day} ${check(hour)}:${check(minutes)}:${check(second)}`;
   timeRef.innerHTML = timestr;

 }
 //每隔1秒调用一次displayTime函数
 function start() {
   window.setInterval("displayTime()", 1000) //单位是毫秒
 }
 window.onload = function () {
   start();
   setmessage();
 }

 function getQueryVariable(variable) {
   var query = decodeURI(window.location.search.substring(1));
   var vars = query.split("&");
   for (var i = 0; i < vars.length; i++) {
     var pair = vars[i].split("=");
     if (pair[0] === variable) {
       return pair[1];
     }
   }
   return false;
 }

 function setmessage() {
   let name = getQueryVariable('name');
   let school = getQueryVariable('school');
   let studentId = getQueryVariable('studentId');
   nameRef.innerText = (name || '王涵') + nameRef.innerText;
   schoolRef.innerText = school || '信息工程学院';
   studentIdRef.innerText = studentId || '330402199801100335';
 }
 //?name=王涵&school=信息工程学院&studentId=330402199801100335
 //https://用户名.github.io/Alibi/index.html?name=王涵&school=信息工程学院&studentId=330402199801100335
