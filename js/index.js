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
  return `  <div class="col-4 item_${i} text-center"  style="height:250px;">
    
    <img onclick="buttonPlay(${i})" style="height: 80px;width:80px;" class="my-3" src="${item.img}">
    <audio loop id="${i}">
      <source src="${item.music}" type="audio/mp3">
    </audio>
    <section class="volumeChange"><input style="display:none;" id="volume_${i}" onchange="setVolume(${i})" type="range" min="0" max="100" value="30" ></section>
    <h3>${item.name}</h3>
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
  let x = document.getElementById(index);
  let y = document.getElementById("volume_" + index);
  if (y.style.display === "none") {
    x.play();
    y.style.display = "inline-block";
  } else {
    x.pause();
    y.style.display = "none";
  }
}
function setVolume(index) {
  var x = document.getElementById("volume_" + index).value;
  document.getElementById(index).volume = x / 100;
}
function startTimer(duration, display, reset) {
  // if (reset) {

  // document.querySelector("#showTime").innerHTML = "";
  // }
  var timer = duration,
    minutes,
    seconds;
  let x = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(x);
      let elementAudio = document
        .getElementById("show")
        .getElementsByTagName("audio");
      for (let index = 0; index < elementAudio.length; index++) {
        elementAudio[index].pause();
      }
      document.querySelector("#showTime").innerHTML = "Time out ! F5 please";
    }
  }, 1000);
}

document.getElementById("setTime").addEventListener("click", () => {
  var minutes = document.getElementById("inputTime").value * 60,
    display = document.querySelector("#showTime"),
    reset = false;
  var input = document.getElementById("inputTime");
  if (input.disabled) {
    reset = true;
  }
  startTimer(minutes, display, reset);
  // var element = document.getElementById("setTime").getElementsByTagName("i");
  // element[0].style.display = "none";
  // element[1].style.display = "block";
  input.disabled = "true";
document.getElementById("setTime").disabled="true"

  
});
