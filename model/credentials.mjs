//This is a temporary class to hold the login information of the users

class UsersLogin{

    constructor(){
        this.username = 'admin'
        this.password = 'admin'
    }

    getCredentials(){
        login_credentials = [this.username, this.password]
        return login_credentials
    }
}


export function getCredentials(){
    return UsersLogin.getCredentials()
}