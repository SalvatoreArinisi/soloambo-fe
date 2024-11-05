// src/UserController.js
import ApiService from './ApiService';

class UserController {
    async login(nickname, password) {
        let loginResponse = {};
        try {
            const response = await ApiService.login(nickname, password);
            if (response && response.message) {
                loginResponse.status = true;
                loginResponse.message = response.message;
            }
        } catch (error) {
            console.error(error);
            const message = error.response?.data || 'Errore sconosciuto';
            loginResponse.status = false;
            loginResponse.message = message;
        }
        return loginResponse;
    }
}

const userControllerInstance = new UserController();
export default userControllerInstance;
