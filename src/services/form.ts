import axios from 'axios';

const BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs';

const Authaxios = axios.create({
    baseURL: BASE_URL,
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })

export const onFormSubmit = async(payload: object) => {
    const response = await Authaxios.post('/form', payload);
    return response;
}