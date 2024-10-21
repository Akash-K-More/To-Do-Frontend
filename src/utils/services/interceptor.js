// For interceptors to add tokens to API requests
import { getID, removeID } from './auth';

export const fetchWithAuth = async (url, options = {}) => {
    let token = getID();

    const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        'user-id': token ? token : '',
    };

    const fetchOptions = {
        ...options,
        headers,
    };

    try {
        let response = await fetch(url, fetchOptions);

        // If the token is expired (401 Unauthorized), attempt to refresh the token
        if (response.status === 401) {
            const refreshResponse = await refreshToken();
            // If refresh fails, remove the token and redirect to login/home page
            removeID();
            window.location.href = '/login';
            return;
        }

        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};