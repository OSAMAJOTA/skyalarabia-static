let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
document.addEventListener("DOMContentLoaded", function () {
  // إخفاء مؤشر التحميل وعرض محتوى الموقع
  setTimeout(function () {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".content").style.display = "block";
  }, 2000); // يمكنك تعديل هذا الرقم لتحديد مدى طول مؤشر التحميل
});

var textElement = document.getElementById("changing-text");
var newTexts = [ "الاستثمار العقاري ", "المقاولات ", "الاستثمار التعليمي ", "الاستثمار الطبي ", "الاستثمار التعليمي ", "الاستثمار المالي ", "الاستثمار الترفيهي ", "الاستثمار الزراعي ", "الاستثمار الغذائي ", "الاستثمار التقني "];
var currentIndex = 0;

function changeText() {
  textElement.textContent = newTexts[currentIndex];
  currentIndex = (currentIndex + 1) % newTexts.length;
}

// تغيير النص كل 5 ثوانٍ
setInterval(changeText, 5000);