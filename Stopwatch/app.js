let interval;
let jsMiliSec = 0;
let jsSec = 0;

function stopWatchStart() {
    console.log("clicked");
    clearInterval(interval);

    let getPlayBtn = document.getElementById("play-btn");
    let getHideBtn = Array.from(document.getElementsByClassName("hide"));
    getHideBtn.forEach(element => {
        element.classList.remove("hide")
    });
    getPlayBtn.classList.add("hide");

    interval = setInterval(function () {
        let sec = document.getElementById("sec");
        let miliSec = document.getElementById("miliSec");

        miliSec.innerHTML = String(jsMiliSec).padStart(2, '0');
        jsMiliSec++;
        sec.innerHTML = jsSec;

        if (jsMiliSec === 100) {
            jsMiliSec = 0;
            jsSec++;
        }
    }, 10);
}

function pause() {
    clearInterval(interval);
    let pauseBtn = document.getElementById("pause-btn")
    pauseBtn.classList.add("hide")
    let playBtn = document.getElementById("play-btn")
    playBtn.classList.remove("hide")
}


function restart() {
    let btn = Array.from(document.getElementsByClassName("btn"))
    btn.forEach(element => {
        element.classList.toggle("hide")
    });
    
    clearInterval(interval);
    let sec = document.getElementById("sec");
    let miliSec = document.getElementById("miliSec");
    jsMiliSec = 0
    jsSec = 0
    sec.innerHTML = "0"
    miliSec.innerHTML = "00"
}