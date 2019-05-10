import { server } from './helper';
import axios from "axios";
class AuthenticationService {
    login() {
        return axios.get(`${server.baseURL}login/user`);
    }
    registerSuccessfulLogin(username, password) {
        console.log("Register Successful")
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        console.log("Logout Successful")
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) {
            return false
        }
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) {
            return ''
        }
        return user
    }
}

export default new AuthenticationService()