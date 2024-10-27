let menuItems = document.querySelectorAll(".menuItems");
let overviewItems = document.querySelectorAll(".overviewItems");
overviewItems[0].addEventListener("click", () => {
    window.location.assign("/Templates/product.html");
});
overviewItems[1].addEventListener("click", () => {
    window.location.assign("/Templates/billing.html");
});
overviewItems[2].addEventListener("click", () => {
    window.location.assign("/Templates/delivery.html");
});
overviewItems[3].addEventListener("click", () => {
    window.location.assign("/Templates/sales.html");
});
overviewItems[4].addEventListener("click", () => {
    window.location.assign("/Templates/payments.html");
});
overviewItems[5].addEventListener("click", () => {
    window.location.assign("/Templates/transaction.html");
});
menuItems[0].addEventListener("click", () => {
    window.location.assign("/Templates/profile.html");
});
menuItems[1].addEventListener("click", () => {
    window.location.assign("/Templates/ranking.html");
});
menuItems[2].addEventListener("click", () => {
    window.location.assign("/Templates/rating.html");
});
menuItems[3].addEventListener("click", () => {
    window.location.assign("/Templates/order.html");
});
menuItems[4].addEventListener("click", () => {
    window.location.assign("/Templates/setting.html");
});
menuItems[5].addEventListener("click",()=>{
    window.location.assign("/Templates/index.html");
});