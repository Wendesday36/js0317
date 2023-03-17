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
  const FELSOELEM = $("#felso");
  let tartalom = osszeAllit();
  FELSOELEM.append(tartalom);
  /**kiskepekre kattintas */
  //fogd meg a kskepeket,adj hozza esemeny kezelot
  const FELSOKEPEK = $("#felso img");
  FELSOKEPEK.on("click",kepreKattintas)
});
function kepreKattintas() {
   console.log(event.target)
   

  
}
function osszeAllit() {
  let txt = "";
  for (let index = 0; index < LIST.length; index++) {
    txt += `<div><img src = "${LIST[index]}" alt = ""></div>`;
  }
  console.log(txt);
  return txt;
}
