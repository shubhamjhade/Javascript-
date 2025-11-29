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
let ismute = true;

function add() {
  let sum = ''; 
  reels.forEach((ele, id) => {
    sum += `
      <div class="reel" data-id="${id}">
        <video loop ${ismute ? "muted" : ""} autoplay src="${ele.reelVideo}"></video>

        <div class="right">
          <div class="like" data-id="${id}">
            ${ele.isLiked 
              ? `<i class="ri-heart-fill"></i>` 
              : `<i class="ri-heart-line"></i>`}
            <p>${ele.likeCount}</p>
          </div>

          <div class="comments">
            <i class="ri-chat-3-line"></i>
            <p>${ele.commentCount}</p>
          </div>

          <div class="share">
            <i class="ri-share-fill"></i>
            <p>${ele.shareCount}</p>
          </div>
        </div>

        <div class="follow">
          <img src="${ele.userPhoto}" alt="">
          <p>${ele.username}</p>
          <button class="btn">follow</button>
        </div>

        <div class="bottom">
          <p>${ele.description}</p>
        </div>

        <div class="mute" data-id="${id}">
          ${ismute 
            ? `<i class="ri-volume-mute-line"></i>` 
            : `<i class="ri-volume-up-line"></i>`}
        </div>

      </div>
    `;
  });

  allreels.innerHTML = sum;
}



allreels.addEventListener("click", (event) => {

 
  const likeBox = event.target.closest(".like");
  if (likeBox) {
    const id = likeBox.dataset.id;
    const reel = reels[id];

    reel.isLiked = !reel.isLiked;
    reel.likeCount += reel.isLiked ? 1 : -1;

    likeBox.innerHTML = `
      ${reel.isLiked ? `<i class="ri-heart-fill"></i>` : `<i class="ri-heart-line"></i>`}
      <p>${reel.likeCount}</p>
    `;
    return;
  }

 
  const muteBtn = event.target.closest(".mute");
  if (muteBtn) {
    const reelDiv = muteBtn.closest(".reel");
    const video = reelDiv.querySelector("video");

    ismute = !ismute;
    video.muted = ismute;

    muteBtn.innerHTML = ismute
      ? `<i class="ri-volume-mute-line"></i>`
      : `<i class="ri-volume-up-line"></i>`;

    return;
  }

});


add()