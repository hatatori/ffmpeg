
function render_ffmpeg(str){
    str = str
    .replace(/-\w+/g,"<span class='t-orange'>$&</span>")
    .replace(/\w+\.\w+/g,"<span class='t-pink'>$&</span>")
    .replace(/\w+=\d+.+?\ /g,"<span class='t-green'>$&</span>")
    .replace(/\w+:.+? /g,"<span class='t-red'>$&</span>")
    .replace(/\"/g,"<span class='t-orange'>$&</span>")

    return str
}

// render_ffmpeg("ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner")


// ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner

// document.querySelector(".code-ffmpeg").innerHTML = render_ffmpeg("ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner")

// let list = [...document.querySelectorAll(".code-ffmpeg")]

for(el of document.querySelectorAll(".code-ffmpeg")){
    el.innerHTML = render_ffmpeg(el.innerText)
}

//     e.innerHTML = render_ffmpeg(e.innerHTML)
// cons