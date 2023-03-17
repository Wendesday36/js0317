/**window.addEventListener("load",function(){

})*/
const LIST = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep5.jpg",
  "kepek/kep6.jpg",
];
let db = 0;
const KIVALASZTOTTKEPEK = []
$(function () {
  /**console.log("barmi") Selection.append('')*/
  const FELSOELEM = $("#felso");
  let tartalom = osszeAllit();
  FELSOELEM.append(tartalom);
  /**kiskepekre kattintas */
  //fogd meg a kskepeket,adj hozza esemeny kezelot
  const FELSOKEPEK = $("#felso img");

  FELSOKEPEK.on("click", kepreKattintas);
});
function kepreKattintas(event) {
  const aktualisKep = event.target;
  console.log(aktualisKep.id);
  console.log($(aktualisKep).attr("id"));
  aktualisKep.src = LIST[aktualisKep.id];
  KIVALASZTOTTKEPEK.push($(aktualisKep).attr("id"));
  db++;
  if (db == 2) {
    db = 0;
    visszaFordit();
    
  }
}
function osszeAllit() {
  let txt = "";
  for (let index = 0; index < LIST.length; index++) {
    txt += `<div><img src = "kepek/hatter.jpg" alt = "" id ="${index}"></div>`;
  }
  console.log(txt);
  return txt;
}
function visszaFordit() {
  console.log(KIVALASZTOTTKEPEK);

  setTimeout(function () {
    const FELSOKEPEK = $("#felso img");
    let aktualisKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
    console.log(aktualisKep);
    $(aktualisKep).attr("src", "kepek/hatter.jpg");
    aktualisKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
    $(aktualisKep).attr("src", "kepek/hatter.jpg");
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
  }, 1000);
}
function osszeKever(){
    /**osszekevrnmi a listat */
}