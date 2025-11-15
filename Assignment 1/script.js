let num = document.querySelector(".number");
let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")

let i = 0;
inc.addEventListener("click",()=>{
    i++;
    num.innerHTML = `${i}`
})
dec.addEventListener("click",()=>{
    i--;
    num.innerHTML = `${i}`
})
