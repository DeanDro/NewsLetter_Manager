'use strict'

document.getElementById('test_segment').addEventListener('click', ()=>{
    alert(window.innerWidth)
})

screen.addEventListener('resize', ()=>{
    if(screen.innerWidth < 1500){
        let card_text = document.getElementsByClassName('card-body')
        alert('resize')
        card_text.style.display = 'none'
    }
})

document.getElementById('upload_content_link').addEventListener('click', ()=>{
    alert('hey')
})

