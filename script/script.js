div_script.innerHTML = render_ffmpeg("# Type")
textarea_script.addEventListener("keyup",e=>{
    div_script.innerHTML = render_ffmpeg(textarea_script.value)
})

inp_range_resize_2.addEventListener('mousemove', ()=>{
    let val = inp_range_resize_2.value
    // img_resize_2.style.width = value+"px"
    // code_resize_2.innerHTML = 'ok'
    console.log(val)
})