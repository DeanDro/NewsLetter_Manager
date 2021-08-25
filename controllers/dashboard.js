'use strict'

//Code for main login page
document.getElementById('Submit').addEventListener('click', ()=>{
    let user = document.getElementById('username')
    let pass_word = document.getElementById('password')

    if (user.value == 'admin' && pass_word.value == 'admin'){
        alert('Access approved')
        window.open('./views/html/dashboard.html', '_blank', 'width=1200, height=800')
    } else {
        alert('Access denied')
        window.close()
    }
})

