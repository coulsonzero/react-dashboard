"use strict";
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

// Change the activeItem of menuItems
function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");
    if (activeItem == item) return;
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
}

// Set the offser of menuBorder
function offsetMenuBorder(element, menuBorder) {
    // Get the position and resize of activeItem
    const offsetActiveItem = element.getBoundingClientRect();
    // Calculate the Offset(偏移量) of menuBorder
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}


// 1.设置活跃按钮的偏移边框
offsetMenuBorder(activeItem, menuBorder);

// 2.监听菜单栏内的所有按钮，更新活跃按钮
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

// 监听偏移边框
window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    // 手机端菜单栏大小
    menu.style.setProperty("--timeOut", "none");
});