const wrapper=document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
})
const currentProductSizes = document.querySelectorAll(".size");
currentProductSizes.forEach((size, index) => {
size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "White";
        size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
});
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const sliderButton = document.querySelector(".buyNow");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
})
close.addEventListener("click", ()=>{
    payment.style.display = "none";
})
sliderButton.addEventListener("click", () => {
    payment.style.display = "flex";
})
