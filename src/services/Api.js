import axios from 'axios';

// Base URL for the API (this could be your server's address)
const API_BASE_URL = 'https://api.example.com';

// Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET request to fetch data from the API
export const getData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

// POST request to send data to the API
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};

// PUT request to update data on the API
export const putData = async (endpoint, data) => {
    try {
        const response = await apiClient.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
};

// DELETE request to remove data from the API
export const deleteData = async (endpoint) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
};
