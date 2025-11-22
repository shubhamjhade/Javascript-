let boxes = document.querySelectorAll('[class^="div"]');


let sounds = [];
for (let i = 1; i <= 10; i++) {
    sounds.push(new Audio(`A${i}.mp3`));
}


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        sounds[index].currentTime = 0;
        sounds[index].play();
    });
});

document.addEventListener("keydown", (e) => {
    let key = Number(e.key);   

    if (key >= 0 && key <= 9) {
        sounds[key].currentTime = 0;
        sounds[key].play();
    }
});
