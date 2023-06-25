function material_select(select){
    select.enabled = false
    let select_window = select.querySelector(".select_window")
    let select_content = select.querySelector(".select_content")
    
    select.enable = test => {
        select.enabled = test
        if(test){
            select_window.classList.add('select_window-enabled')
        }else{
            select_window.classList.remove('select_window-enabled')
        }
    }
    
    select_content.addEventListener('click', ()=>{
        select.enable(!select.enabled)
    })
    
    Array.from(select_window.children).map((el,pos)=>{
        el.addEventListener('click', function(){
            select.enable(!select.enabled)
            select_content.innerHTML = this.innerHTML
            select.value = this.innerText
            select.position = pos
        })
    })
    
}

Array.from(document.querySelectorAll(".select")).map(e=>{
    material_select(e)
})

// material_select(select2)