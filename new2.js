let maintextplace=document.getElementById("maintextplace");
let btn=document.querySelector(".box button");
let btnspan=document.querySelector(".box button span");
let mainname=document.getElementById("mainname");
let select=document.querySelector(".select select")

select.addEventListener("click",function(){
  let theselectedone = select.options[select.selectedIndex].text;
  btnspan.innerHTML=`<span>${theselectedone.split(" ")[0]}</span>`
})

btn.addEventListener("click",function(){
  let bob=new Blob([maintextplace.value],{type : select.value});
  const newurl=URL.createObjectURL(bob);
  const a=document.createElement("a");
  a.download=mainname.value;
  a.href=newurl;
  a.click();
})