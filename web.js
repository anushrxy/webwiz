setInterval(updatetime,1000)
function updatetime(){
    samay.innerHTML=new Date();
}

function changeBodyBg(color){
    document.body.style.background=color;

}
function fun(){
    alert("welcome")
}
function changetext(){
let headings=document.getElementById('heading');
    headings.textContent='welcome!';
    alert("5 sec completed");
}


