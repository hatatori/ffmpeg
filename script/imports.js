function import_head(text){
    let txt = text
    let d = document.createElement("div")
    d.innerHTML = txt
    d = d.firstChild
    document.head.appendChild(d)
}
function import_script(url){
    var sc = document.createElement("script");
    sc.setAttribute("src", url);
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
}
function import_body(text){
    let txt = text
    let d = document.createElement("div")
    d.innerHTML = txt
    d = d.firstChild
    document.body.appendChild(d)
}

import_head('<link rel="stylesheet" href="style/ffmpeg.css"></link>')
import_script("./script/render.js")

