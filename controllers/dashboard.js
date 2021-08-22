'use strict'

import {UsersLogin as Login} from '../model/credentials.mjs'

let credentials = new Login()

console.log(credentials.getCredentials())

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