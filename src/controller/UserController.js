import ApiService from '../services/ApiService';

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
            loginResponse.status = false;
            if(error.status === 404){
                loginResponse.message = error.response.data;
            }else{
                loginResponse.message = 'Servizio non disponibile, riprova più tardi';
            }
            
        }
        return loginResponse;
    }
}

const userControllerInstance = new UserController();
export default userControllerInstance;
