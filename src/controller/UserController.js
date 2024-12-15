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
            }else if(error.status === 401){
                loginResponse.message = 'utente non riconosciuto';
            }else{
                loginResponse.message = 'Servizio non disponibile, riprova più tardi';
            }
            
        }
        return loginResponse;
    }

    async registrazione(nickname, password) {
        let registrazioneResponse = {};
        try {
            const response = await ApiService.registrazione(nickname, password);
            if (response && response.message) {
                registrazioneResponse.status = true;
                registrazioneResponse.message = response.message;
            }
        } catch (error) {
            registrazioneResponse.status = false;
            if(error.status === 404 || error.status === 400){
                registrazioneResponse.message = error.response.data;
            }else{
                registrazioneResponse.message = 'Servizio non disponibile, riprova più tardi';
            }
        }
        return registrazioneResponse;
    }
}

const userControllerInstance = new UserController();
export default userControllerInstance;
