// Environment Variables
const config = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5002',
  AUTH_ENABLED: import.meta.env.VITE_AUTH_ENABLED === 'true',
  TOKEN_STORAGE_KEY: import.meta.env.VITE_TOKEN_STORAGE_KEY || 'hirenext_auth_token',
  APP_NAME: import.meta.env.VITE_APP_NAME || 'HireNext',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  ENV: import.meta.env.VITE_ENV || 'development',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
};

export default config; 