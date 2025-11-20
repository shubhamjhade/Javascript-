let like = document.querySelector("i")
var img = document.querySelector('img')

img.addEventListener("dblclick",()=>{
 like.style.opacity = "1"
 like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
 like.style.transition = "all ease 0.8s"
 setTimeout(()=>{
     like.style.transform = "translate(-50%,-800%) scale(0) rotate(-60deg)"
     like.style.transition = "all ease 1s"
     like.style.opacity = "0.8"
    },1000)
 setTimeout(()=>{
      like.style.transform = "translate(-50%,-50%) scale(0) rotate(0deg)"
     like.style.opacity = "0"
    },1500)
})