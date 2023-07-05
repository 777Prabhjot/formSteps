import axios from 'axios';

export const onLogin = async(payload: object) => {
    const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', payload);
    return response;
}