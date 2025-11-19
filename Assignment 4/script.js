let btn = document.querySelector(".btn")
let bar = document.querySelector('.bar2')
let percent = document.querySelector(".per h1")


btn.addEventListener("click",()=>{
     var num = 50 + Math.floor(Math.random()*50)
     btn.style.pointerEvents = 'none'
    let grow =0;
    let int = setInterval(()=>{
        grow++;
        bar.style.width = `${grow}%`
        percent.innerHTML = `${grow}%`
    },num)

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);
})