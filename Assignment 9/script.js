const text = document.querySelector("#text");
const currentCount = document.querySelector("#current-count");
const max = 20; 

text.addEventListener("input", () => {
    let len = text.value.length;
    
    currentCount.innerText = len;

 
    if (len === max) {
        text.classList.add("limit-reached");
    } else {
        text.classList.remove("limit-reached");
    }
});