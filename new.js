let maintextplace=document.getElementById("maintextplace");
let mainname=document.getElementById("mainname");
let select=document.querySelector(".select select");
let btn=document.querySelector(".box button");
let btnspan=document.querySelector(".box button span");

select.addEventListener("change",()=>{
  let selectoption = select.options[select.selectedIndex].text;
  btnspan.innerText = selectoption.split(" ")[0];
})

btn.addEventListener("click",function(){
  const blob=new Blob([maintextplace.value],{type : select.value});
  const fileurl=URL.createObjectURL(blob);
  const link=document.createElement("a");
  link.download = mainname.value;
  link.href = fileurl;
  link.click();
})