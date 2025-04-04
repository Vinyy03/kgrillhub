// redux/actions/authActions.js
import axios from 'axios';
import api from '../utils/axiosInstance';

// redux/actions/authActions.js

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });
    const response = await api.post('https://localhost:5000/api/v1/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response?.data?.message || 'Login failed' });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'REGISTER_REQUEST' });
    const response = await axios.post('https://localhost:5000/api/v1/auth/register', { name, email, password });
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data.message });
  }
};