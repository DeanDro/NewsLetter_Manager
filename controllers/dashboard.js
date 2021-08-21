'use strict'

import {getCredentials} from '../model/credentials.mjs'

let credentials = getCredentials()

console.log(getCredentials())

/*
function confirmLoginDetails(){
    let username = document.getElementById('username')
    let password = document.getElementById('password')

    let credentials = loginData.getCredentials()
    if (username === credentials[0] && password === credentials[1]){
        alert('Confirm')
    }
}

document.getElementById('Submit').onclick(confirmLoginDetails())
*/