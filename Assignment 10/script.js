let btn1 = document.querySelector(".btn")
let list = document.querySelector("#list")
let text = document.querySelector("input")

btn1.addEventListener("click",()=>{
    let input = text.value;
    let li = document.createElement("li")
        if (input === "") {
        alert("Please enter something!");
        return;
    }
    li.classList.add("litstyle");
    li.textContent = input;

    list.appendChild(li);
   text.value = "";

   let btn = document.createElement("button")
   btn.classList.add("delbtn");
   btn.textContent = "delete"
   li.appendChild(btn);
   
    btn.addEventListener("click",()=>{
        li.remove();
    })
})