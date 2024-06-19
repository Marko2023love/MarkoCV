function randomSelect() {
  const items = document.querySelectorAll('.item');
  const index = Math.floor(Math.random() * items.length);
  const img = items[index].querySelector('img').src;
  const name = items[index].querySelector('p').textContent;
  const resultImg = document.querySelector('.result img');
  const resultName = document.querySelector('.result h2');
  resultImg.src = img;
  resultName.textContent = name;
}const items = [
    {
        name: "南京博物馆（近梧桐大道）",
        img: "img/ce88cde1d07f6e1e117d0109ea6ce14.jpg",
        description: "周一闭馆9：00-17：30"
    },
    {
        name: "牛首山（门票135r)",
        img: "img/ab9432f541b9ac4599365fdb855d807.jpg",
        description: "8：30-17：30,号称40亿打造的佛教圣地"
    },
    {
        name: "夫子庙（门票30r)+秦淮河",
        img: "img/6cb211f0db8612fba2a7e1766647898.jpg",
        description: "适合晚上逛，但秦淮河游船很多人说不值"
    },
    {
        name: "总统府（门票35r)",
        img: "img/73cf92189a9293bca7cefa588eeeebd.jpg",
        description: "8：30-17：30"
    },
    {
        name: "鸡鸣寺（门票10r)",
        img: "img/71251ec943f35a0bde044b68bb91eb8.jpg",
        description: "千年古刹鸡鸣寺7：00-17：30"
    },
    {
        name: "玄武湖（免门票）",
        img: "img/bac163c836ac9ca34bfc7415d980620.jpg",
        description: "中国最大的皇家园林湖泊"
    },
    {
        name: "音乐台",
        img: "img/f78f315736d2bc9a022fc9f8d5eb9dd.jpg",
        description: "门票10r"
    }
];

const resultImg = document.querySelector(".result-img");
const resultName = document.querySelector(".result-name");
const drawButton = document.querySelector(".draw");
//弹出框
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

drawButton.addEventListener("click", () => {
  // 随机选择一个项目
  const selectedItem = items[Math.floor(Math.random() * items.length)];

  // 更新抽奖结果
  resultImg.src = selectedItem.img;
  resultName.innerHTML = "<strong>" + selectedItem.name + "</strong>：<br>" + selectedItem.description;

  // 显示抽奖结果
  document.querySelector(".result").style.display = "block";
});

resultImg.addEventListener("click", () => {
  // 显示弹出框
  lightboxImg.src = resultImg.src;
  lightbox.style.display = "block";
});

lightboxClose.addEventListener("click", () => {
  // 隐藏弹出框
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", event => {
  // 如果点击的是弹出框外部，隐藏弹出框
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
function redirectToPage() {
            // 修改下面的 URL 为您要跳转的页面地址
            window.location.href = "ebooksum.html";
        }