import axios from 'axios';
import store from '../store'

axios.defaults.withCredentials = true

const instance = axios.create({
	baseURL: 'http://localhost:3000'
});

instance.interceptors.response.use(
	(res) => {
		console.log(res.data.result)
		if(res.data.result == 401) {
			store.state.isLogined = false;
		}
		return res;
	},
	(err) => {
		return err;
	}
)

export function registerUser(userData) {
	return instance.post('/api/signup', userData);
}

export function loginUser(userData) {
	return instance.post("/api/login", userData)
}

export function logout() {
	return instance.post("/api/logout")
}

export function qwe() {
	return instance.post("/api/addmovie")
}