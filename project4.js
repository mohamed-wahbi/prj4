function tjdid_wakt (){
  var date = new Date();
  var wakt = document.getElementById("wakt");
  wakt.innerHTML=date.getHours() + ":" + date.getMinutes();
  var terikh = document.getElementById("terikh");
  terikh.innerHTML = date.getDate() + "/" + parseInt(date.getMonth()+1) + "/" + date.getFullYear();
}
setInterval(tjdid_wakt,100);
onload = tjdid_wakt ();

function lon (){
  var lonn = document.getElementById("lonn");
  localStorage.setItem("loun",lonn.value) ;
  var mongela = document.getElementById("cadre");
  mongela.style.background=localStorage.getItem("loun");
}
function lonh (){
document.getElementById("lonn").value = localStorage.getItem("loun");

var mongela = document.getElementById("cadre");
mongela.style.background=localStorage.getItem("loun");

}
onload = lonh ();

