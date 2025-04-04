// utils/apiConfig.js
import { Platform } from 'react-native';

// Import environment variables
import { API_URL_EMULATOR, API_URL_DEVICE } from '@env';

export const getApiUrl = () => {
  if (Platform.OS === 'android') {
    // For Android devices, use the emulator or device IP
    return __DEV__ ? API_URL_EMULATOR : API_URL_DEVICE;
  } else if (Platform.OS === 'ios') {
    // For iOS simulators, use localhost (if running on the same machine)
    return __DEV__ ? 'http://localhost:5000' : API_URL_DEVICE;
  }
};