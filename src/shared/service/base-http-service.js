import axios from "axios";

class BaseHttpService {
    BASE_URL = 'http://localhost:3000';

    async get(endpoint = '', options = {}) {
        try {
            const { data } = await axios.get(`${this.BASE_URL}/${endpoint}`, options);
            return data;
        }
        catch (error) {
        }
    }

}

export default BaseHttpService;