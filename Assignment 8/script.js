let btn = document.querySelector(".btn")
let i = document.querySelector(".btn i")
let main = document.querySelector("main")

let flag = 0

btn.addEventListener("click",()=>{
    if (flag===1) {
        btn.style.backgroundColor = "white"
        i.className = "ri-moon-line"
        i.style.color ="black"
        main.style.backgroundColor = "black"
        flag--
     
       
 
    }else{
        
        btn.style.backgroundColor = "black"
        i.className = "ri-sun-line"
        i.style.color ="white"
        main.style.backgroundColor = "white"
        flag++;
    }
})