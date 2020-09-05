import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'api-key': '2dece0c4-7aed-430e-aeba-9f10430f969a',
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followAPI = {
    follow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data.resultCode)
    },
    unfollow(userId: string){
        return instance.post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    }
}
