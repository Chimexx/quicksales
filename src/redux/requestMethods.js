import axios from "axios";

// const BASE_URL = "https://tao-foods.herokuapp.com/api/";
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(localStorage.getItem("taoToken"));

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

// export const authRequest = axios.create({
// 	baseURL: BASE_URL,
// 	headers: { TOKEN: `Bearer ${TOKEN}` },
// });
