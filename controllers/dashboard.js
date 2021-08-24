'use strict'

document.getElementById('Submit').addEventListener('click', ()=>{
    let user = document.getElementById('username')
    let pass_word = document.getElementById('password')

    if (user.value == 'admin' && pass_word.value == 'admin'){
        alert('Access approved')
    } else {
        alert('Access denied')
        
    }
})