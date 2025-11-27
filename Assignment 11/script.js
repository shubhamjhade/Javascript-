const reels = [
  {
    username: "nature_vibes",
    userPhoto: "https://i.pravatar.cc/150?img=8mp4",
    reelVideo: "https://www.pexels.com/download/video/2421621/",
    description: "Peaceful waterfall flowing 🌊✨",
    followed: true,
    isLiked: true,
    likeCount: 980,
    commentCount: 120,
    shareCount: 50
  },
  {
    username: "travel_with_me",
    userPhoto: "https://i.pravatar.cc/150?img=32",
    reelVideo: "https://www.pexels.com/download/video/5896379/",
    description: "Exploring mountains ⛰️💙",
    followed: false,
    isLiked: false,
    likeCount: 450,
    commentCount: 80,
    shareCount: 25
  },
  {
    username: "foodielife",
    userPhoto: "https://i.pravatar.cc/150?img=5",
  
    reelVideo: "https://www.pexels.com/download/video/4058084/",
    description: "Street food tastes the best 😋🔥",
    followed: true,
    isLiked: true,
    likeCount: 1500,
    commentCount: 210,
    shareCount: 90
  },
  {
    username: "fitness_daily",
    userPhoto: "https://i.pravatar.cc/150?img=44",
    
    reelVideo: "https://www.pexels.com/download/video/2785531/",
    description: "Morning workout grind 💪🔥",
    followed: false,
    isLiked: false,
    likeCount: 800,
    commentCount: 100,
    shareCount: 40
  }
];

let allreels = document.querySelector(".allreels")

let sum = ''; 
reels.forEach((ele)=>{
    sum= sum+`
    <div class="reel">
    <video autoplay loop muted src="${ele.reelVideo}"></video>
    <div class="right"> ${ele.isLiked 
        ? `<i class="ri-heart-fill"></i>` 
        : `<i class="ri-heart-line"></i>`}<p>${ele.likeCount}</p><i class="ri-chat-3-line"></i> <p>${ele.commentCount}</p><i class="ri-share-fill"></i><p>${ele.shareCount}</p></div>
    <div class="follow"><img src="${ele.userPhoto}" alt=""><p>${ele.username}</p><button class="btn">follow</button></div>
    <div class="bottom"><p>${ele.description}</p></div>
    </div>
    `
})

allreels.innerHTML = sum

