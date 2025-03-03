let time=document.querySelector(".time");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let min=0;
let sec=0;
let interval;
function update() {
    time.innerText=`Time: ${min} Min ${sec} Sec`;
}
start.addEventListener("click",()=>{
    if(!interval){
    interval=setInterval(()=>{
        sec++;
        if(sec===60) {
            sec=0;
            min++;
        }
        update();
    },1000);
}
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
})
reset.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
    sec=0;
    min=0;
    update();
})
update();
