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
                    'x-user-nickname': 'salvatore',
                    'x-user-password': '123',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Errore durante la chiamata Axios:', error);
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
