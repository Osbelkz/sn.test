import axios from "axios";
import {UserType, ProfileType} from "../types/types";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'api-key': '2dece0c4-7aed-430e-aeba-9f10430f969a',
    }
})

type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

type AuthUserData = {
    email: string
    id: number
    login: string
}

type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}



export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(res => res.data.resultCode)
    },
    follow(userId: string) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(res => res.data.resultCode)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
            .then(res => res.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get<ResponseType<AuthUserData>>(`auth/me/`)
            .then(res => res.data);
    },
    login(email: string, password: string, rememberMe:boolean = false) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data);
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login` )
            .then(res => res.data);
    }
}
