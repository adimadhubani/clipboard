

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

export const APIUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';