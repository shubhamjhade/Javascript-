const main = document.querySelector("main");

const developers = [
  {
    name: "Shubham Jhade",
    role: "Software Developer",
    description: "Hi, I am a software developer with good interest in AI and AGI. Currently working on AGI.",
    img: "https://images.pexels.com/photos/32214879/pexels-photo-32214879.jpeg"
  },
  {
    name: "John Doe",
    role: "Full Stack Developer",
    description: "I love building scalable backend systems and exploring applied machine learning.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Sophia Lee",
    role: "AI Research Engineer",
    description: "Focused on robotics, neural networks, and advanced automation.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Rahul Verma",
    role: "Frontend Developer",
    description: "Specialized in responsive UI, animations, and modern JavaScript frameworks.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Emily Carter",
    role: "Cloud Engineer",
    description: "Works with AWS, DevOps pipelines, and cloud automation systems.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Michael Zhang",
    role: "Data Scientist",
    description: "Passionate about data analysis, AI models, and predictive analytics.",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19"
  },
  {
    name: "Aarav Kulkarni",
    role: "Mobile App Developer",
    description: "Creates Android and iOS apps with modern UI and optimized performance.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    name: "Isabella White",
    role: "Cybersecurity Engineer",
    description: "Focuses on system security, penetration testing, and threat prevention.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  }
];


let clutter = "";


developers.forEach((current) => {
    clutter += `<div class="card">
            <img src="${current.img}" alt="${current.name}">
            <h1>${current.name}</h1>
            <h2>${current.role}</h2>
            <p>${current.description}</p>
        </div>`;
});


main.innerHTML = clutter;