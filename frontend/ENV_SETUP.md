# Environment Variables Setup

This project uses environment variables for configuration. Follow these steps to set up your environment:

## Setting Up Environment Variables

1. Create a file named `.env` in the `frontend` directory with the following variables:

```
# API Configuration
VITE_API_URL=http://localhost:5002
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_ENABLED=true
VITE_TOKEN_STORAGE_KEY=hirenext_auth_token

# Application Config
VITE_APP_NAME=HireNext
VITE_APP_VERSION=1.0.0
VITE_ENV=development

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

2. Adjust the values as needed for your environment:
   - `VITE_API_URL`: URL of your backend API (default: http://localhost:5002)
   - `VITE_API_TIMEOUT`: API request timeout in milliseconds
   - `VITE_AUTH_ENABLED`: Enable/disable authentication features
   - `VITE_TOKEN_STORAGE_KEY`: Key used for storing authentication token in localStorage
   - `VITE_APP_NAME`: Application name
   - `VITE_APP_VERSION`: Application version
   - `VITE_ENV`: Current environment (development, staging, production)
   - `VITE_ENABLE_ANALYTICS`: Enable/disable analytics features

## Important Notes

- All environment variables for Vite must be prefixed with `VITE_` to be accessible in the frontend code
- The environment variables are loaded during build time, so you need to restart the development server after making changes
- In production, set these variables through your hosting provider's environment configuration

## Usage in Code

Environment variables are accessed through the config object:

```javascript
import config from '../config';

// Using the API URL
fetch(`${config.API_URL}/api/endpoint`);
``` 