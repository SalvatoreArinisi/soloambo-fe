import axios from 'axios';

class ApiService {

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getAmbi() {
        try {
            await this.delay(3000); 

            const response = await axios.get('/api/ambo', {
                headers: {
                    'x-user-nickname': localStorage.getItem('nickname'),
                    'x-user-password': localStorage.getItem('password')
                },
            });
            return response.data;
        } catch (error) {
            console.error('Errore durante la chiamata Axios:', error);
            localStorage.setItem('nickname',null);
            localStorage.setItem('password',null);
            throw error; 
        }
    }

    async login(nickname, password) {
        try {
            const response = await axios.post('/api/user/login', {
                nickname,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('Errore durante la chiamata di login:', error);
            throw error;
        }
    }

    async registrazione(nickname, password) {
        try {
            const response = await axios.post('/api/user/register', {
                nickname,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('Errore durante la chiamata di register:', error);
            throw error;
        }
    }

    async getPrivacy() {
        try {
            const response = await axios.get('/privacy.json', {});
            return response.data;
        } catch (error) {
            console.error('Errore durante la chiamata Axios:', error);
            throw error; 
        }
    }
}

const apiServiceInstance = new ApiService();  
export default apiServiceInstance; 
