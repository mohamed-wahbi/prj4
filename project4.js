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
function abc (){
if(screen.width<=600 || screen.height<=600){
 
  document.getElementById("cadre").style.width="236px";
  document.getElementById("cadre").style.height="224px";
  document.getElementById("cadre").style.background="red";

  document.getElementById("mongela").style.width="306px";
  document.getElementById("mongela").style.height="234px";
}
}
onload =new abc ();
 function cba (){
   if(screen.width<=300){ 
      document.getElementById("cadre").style.width="236px";
  document.getElementById("cadre").style.height="224px";
  document.getElementById("cadre").style.background="green";

  document.getElementById("mongela").style.width="306px";
  document.getElementById("mongela").style.height="234px"; 
  document.getElementById("ssd").className="w300"; 
document.getElementById("mongela").className="w400";

  }
  


 }
 onload= new cba ();

