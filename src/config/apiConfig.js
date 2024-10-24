const API_BASE_URL = 'https://to-do-backend-mi1j.onrender.com/api'; // Replace with your API base URL

const API_ENDPOINTS = {
    register: `${API_BASE_URL}/auth/register`,
    login: `${API_BASE_URL}/auth/login`,
    addTask: `${API_BASE_URL}/tasks/add-task`,
    getTasks: `${API_BASE_URL}/tasks/get-tasks`,
    // Add more endpoints as needed
};

export default API_ENDPOINTS;