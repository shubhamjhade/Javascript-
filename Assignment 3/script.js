
let  btn = document.querySelector(".btn")
let main = document.querySelector(".main")

const quotes = [
  "If you don’t take risks, you can’t create a future.",
  "A real ninja is one who endures no matter what gets thrown at him.",
  "If you don’t like your destiny, don’t accept it.",
  "Whatever you lose, you’ll find it again. But what you throw away, you’ll never get back.",
  "The world isn't perfect. But it's there for us, trying the best it can.",
  "Fear is not evil. It tells you what your weakness is.",
  "Whatever happens, happens.",
  "If you don't fight, you can't win!",
  "Humans are strong because we can change ourselves.",
  "Sometimes, we have to accept our fate and win over it.",
  "The unexamined life is not worth living.",
  "Happiness depends upon ourselves.",
  "He who has a why to live can bear almost any how.",
  "The only thing I know is that I know nothing.",
  "We are what we repeatedly do.",
  "Man is condemned to be free.",
  "You must be the change you wish to see in the world.",
  "Two things are infinite: the universe and human stupidity.",
  "The mind is everything. What you think, you become.",
  "Knowing yourself is the beginning of all wisdom.",
  "Act only according to that maxim which you can will to become universal law.",
  "No man ever steps in the same river twice.",
  "The greatest wealth is to live content with little.",
  "Life must be understood backward, but lived forward.",
  "It is not things themselves that disturb us, but our opinions about them.",
  "The only true wisdom is in knowing you know nothing.",
  "Power comes in response to a need, not a desire.",
  "People’s lives don’t end when they die, it ends when they lose faith.",
  "If you want to know sadness, you must first know happiness.",
  "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness.",
  "A lesson without pain is meaningless.",
  "Whatever you do, enjoy it to the fullest.",
  "You can’t win without fighting.",
  "Push through the pain. Giving up hurts more.",
  "If you wanna make people dream, you’ve got to start by believing in that dream yourself."
];


btn.addEventListener("click",function(){
    let r = Math.floor(Math.random()*quotes.length)
    let r2 = Math.floor(Math.random()*60)
    let r3 = Math.floor(Math.random()*60)
    let r4 = Math.floor(Math.random()*90)
    let h = document.createElement("h1")
    h.innerHTML = `${quotes[r]}`
    h.style.color = "white"
    h.style.position = "absolute"
    h.style.top = `${r2}%`
    h.style.left = `${r3}%`
   h.style.transform = `rotate(${r4}deg)`
    main.appendChild(h);
})