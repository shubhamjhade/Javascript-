let box = document.querySelector(".box")
let btn = document.querySelector(".btn")
let name1 = document.querySelector(".name")
let back = document.querySelector(".background")
const iplTeams = [
  {
    name: "Mumbai Indians",
    primaryColor: "#004BA0",     // Blue
    secondaryColor: "#D1AB3E"    // Gold
  },
  {
    name: "Chennai Super Kings",
    primaryColor: "#F1CD00",     // Yellow
    secondaryColor: "#1A3B7A"    // Blue
  },
  {
    name: "Royal Challengers Bangalore",
    primaryColor: "#000000",     // Black
    secondaryColor: "#D1AB3E"    // Gold
  },
  {
    name: "Kolkata Knight Riders",
    primaryColor: "#3A225D",     // Purple
    secondaryColor: "#CBA92B"    // Gold
  },
  {
    name: "Rajasthan Royals",
    primaryColor: "#EA1A8E",     // Pink
    secondaryColor: "#004BA0"    // Blue
  },
  {
    name: "Punjab Kings",
    primaryColor: "#D71920",     // Red
    secondaryColor: "#CBA92B"    // Gold
  },
  {
    name: "Sunrisers Hyderabad",
    primaryColor: "#F26522",     // Orange
    secondaryColor: "#000000"    // Black
  },
  {
    name: "Delhi Capitals",
    primaryColor: "#004C93",     // Blue
    secondaryColor: "#E41B17"    // Red
  }
];


btn.addEventListener("click",()=>{
    let num1 = Math.floor(Math.random()*9);
    name1.innerHTML = `${iplTeams[num1].name}`
    back.style.backgroundColor = `${iplTeams[num1].primaryColor}`
    box.style.backgroundColor = `${iplTeams[num1].secondaryColor}`

})