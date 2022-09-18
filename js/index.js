const DATA = [
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/train.svg",
    name: "Tàu lửa",
    artist: "Alan Walker",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/train160.mp3",
  },

  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/wind.svg",
    name: "Gió",
    artist: "很美味",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/gale160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/forest.svg",
    name: "Chim",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/birds160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/brook.svg",
    name: "Sóng biển",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/ocean.mp3",
  },

  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/thunder.svg",
    name: "Sấm chớp",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/rain/thunder160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/rain.svg",
    name: "Mưa",
    artist: "natural",
    music: "https://ambicular.com/sounds/rain/rainbest160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/road3.svg",
    name: "Xe chạy",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/highway160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/moon.svg",
    name: "Dế",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/crickets160.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/prem/waterfall.svg",
    name: "Suối chảy",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/river160.mp3",
  },

  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/fire.svg",
    name: "Lửa cháy",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/fireplace.mp3",
  },
  {
    img: "https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/leafs.svg",
    name: "Lá cây",
    artist: "natural",
    music: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/aspen-tree160.mp3",
  },
];
let contentMusic = (item, i) => {
  return `  <div class="col-4 item_${i} text-center">
    <h3>${item.name}</h3>
    <img style="height: 80px;width:80px;" class="my-3" src="${item.img}">
    <audio id="${i}">
      <source src="${item.music}" type="audio/mp3">
    </audio>
    <button type="button" onclick="buttonPlay(${i})" class="btn btn-success"><i class="fas fa-play"></i></button>
    <button style="display: none;" type="button" onclick="buttonPause(${i})" class="btn btn-warning hidden"><i class="fa-solid fa-pause"></i></button>
  </div>`;
};
let renderContent = (data) => {
  let contentHTML = "";
  data.forEach((music, i) => {
    let content = contentMusic(music, i);
    contentHTML += content;
  });
  document.getElementById("show").innerHTML = contentHTML;
};

renderContent(DATA);
function buttonPlay(index) {
  document.getElementById(index).play();
  document
    .getElementsByClassName("item_" + index)[0]
    .getElementsByTagName("*")[4].style.display = "none";
  document
    .getElementsByClassName("item_" + index)[0]
    .getElementsByTagName("*")[6].style.display = "inline-block";
}
function buttonPause(index) {
  document.getElementById(index).pause();
  document
    .getElementsByClassName("item_" + index)[0]
    .getElementsByTagName("*")[6].style.display = "none";
  document
    .getElementsByClassName("item_" + index)[0]
    .getElementsByTagName("*")[4].style.display = "inline-block";
}
