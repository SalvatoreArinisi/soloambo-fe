import axios from 'axios';

class ApiService {
    async getAmbi() {
        try {
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
}

const apiServiceInstance = new ApiService();  
export default apiServiceInstance; 
