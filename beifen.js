const resultImg =document.querySelector(".result-img");
const resultName = document.querySelector(".result-name");
const drawButton = document.querySelector(".draw");

drawButton.addEventListener("click", () => {
    // 随机选择一个项目
    const selectedItem = items[Math.floor(Math.random() * items.length)];
    
    // 更新抽奖结果
    resultImg.src = selectedItem.img;
    resultName.innerHTML = "<strong>" + selectedItem.name + "</strong>：<br>" + selectedItem.description;
    
    // 显示抽奖结果
    document.querySelector(".result").style.display = "block";
});

