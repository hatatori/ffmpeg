inp_range_resize_2.onmousemove=()=>{
    let value = inp_range_resize_2.value|0
    img_resize_2.style.width = `${value}px`
    code_resize_2.innerHTML = render_ffmpeg(`ffmpeg -i input.mp4 -vf scale=${value}:${(360*value/640)|0} output.mp4`)
}