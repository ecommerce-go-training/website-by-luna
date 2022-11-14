import api from 'services/api';

export const signIn = info => api.post('login', info);

export const signUp = info => api.post('register', info);
