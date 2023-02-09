
function render_ffmpeg(str){
    str = str
    .replace(/-\w+:\w+|-\w+/g,"<span class='t-orange'>$&</span>")
    .replace(/([\/\w+%]+)(\.\w{3,4})/g,"<span class='t-pink'>$&</span>")
    .replace(/\w+=\d+.+?\ /g,"<span class='t-green'>$&</span>")
    .replace(/\d+:.+? /g,"<span class='t-red'>$&</span>")
    .replace(/\"/g,"<span class='t-orange'>$&</span>")

    return str
}

// .replace(/-\w+/g,"<span class='t-orange'>$&</span>")
//     .replace(/([\/\w+%]+)(\.\w{3,4})/g,"<span class='t-pink'>$&</span>")
//     .replace(/\w+=\d+.+?\ /g,"<span class='t-green'>$&</span>")
//     .replace(/\w+:.+? /g,"<span class='t-red'>$&</span>")
//     .replace(/\"/g,"<span class='t-orange'>$&</span>")

// .replace(/\w+:.+? /g,"<span class='t-red'>$&</span>")

// render_ffmpeg("ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner")


// ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner

// document.querySelector(".code-ffmpeg").innerHTML = render_ffmpeg("ffmpeg -i video_1920.mp4 -vf scale=640:360 video_640.mp4 -hide_banner")

// let list = [...document.querySelectorAll(".code-ffmpeg")]

for(el of document.querySelectorAll(".code-ffmpeg")){
    el.innerHTML = render_ffmpeg(el.innerText)
}

for(i of document.querySelectorAll(".image_example")){
    i.onclick = function(){
        console.log(this)
        this.classList.toggle('image_example-full')
    }
}
//     e.innerHTML = render_ffmpeg(e.innerHTML)
// cons