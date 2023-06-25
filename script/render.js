function render_ffmpeg(str){

    let comment = str.match(/#.+/g)
    comment = comment == null ? "" : comment[0].replace(/.+/g, "<span class='t-gray'>$&</span>")

    str = str
    .replace(/#.+/g,"")
    .split(" ").map(e=>{
        e = e
        .replace(/^".*?"/g, "<span class='t-green'>$&</span>")
        .replace(/^(-[\w:]+)/g, "<span class='t-orange'>$1</span>")
        .replace(/^(\w+)(=)([^ ]+)/g, "<span class='t-green'>$1</span><span class='t-pink'>$2</span><span class='t-red'>$3</span>")
        .replace(/^[/\w%]+\.\w{3,4}/g, "<span class='t-pink'>$&</span>")
        .replace(/^\d+[^ ]+/g, "<span class='t-red'>$&</span>")
        .replace(/^(\d+)/g, "<span class='t-red'>$1</span>")
        // .replace(/#.+/g, "<span class='t-gray'>$&</span>")
        return e
    })

    str.push(comment)

    return str.join(" ")
}

function render_init(){
    console.log('ok')
    console.log('ok')
    console.log('ok')
    for(el of document.querySelectorAll(".code-ffmpeg")){
        el.innerHTML = render_ffmpeg(el.innerText)
    }

    for(i of document.querySelectorAll(".image_example")){
        i.onclick = function(){
            this.classList.toggle('image_example-full')
        }
    }
}


for(el of document.querySelectorAll(".code-ffmpeg")){
    el.innerHTML = render_ffmpeg(el.innerText)
}

for(i of document.querySelectorAll(".image_example")){
    i.onclick = function(){
        this.classList.toggle('image_example-full')
    }
}
