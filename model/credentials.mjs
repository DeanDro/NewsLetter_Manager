//This is a temporary class to hold the login information of the users

'use strict'

export class UsersLogin{

    constructor(){
        this.username = 'admin'
        this.password = 'admin'
    }

    getCredentials(){
        let credentials = [this.username, this.password]
        return credentials
    }
}
