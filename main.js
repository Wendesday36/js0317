/**window.addEventListener("load",function(){

})*/
const LIST = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
];
$(function () {
  /**console.log("barmi") Selection.append('')*/
  const felsoElem = $("#felso");
  osszeAllit();
});
function osszeAllit() {
  let txt = "";
  for (let index = 0; index < LIST.length; index++) {
    txt += `<div><img src = "${LIST[index]}" alt = ""></div>`;
  }
  console.log(txt);
}
