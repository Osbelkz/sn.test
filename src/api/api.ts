import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'api-key': '2dece0c4-7aed-430e-aeba-9f10430f969a',
    }
})
let auth = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data.resultCode)
    },
    unfollow(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    getAuthUserData() {
        return auth.get(`auth/me/`);
    },
    login(email: string, password: string, rememberMe:boolean = false) {
        return auth.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return auth.delete(`auth/login` );
    }
}
