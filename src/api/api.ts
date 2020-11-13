import axios from "axios";
import {UserType, ProfileType, ContactsType} from "../types/types";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'api-key': '2dece0c4-7aed-430e-aeba-9f10430f969a',
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    follow(userId: string) {
        return instance.post<ResponseType>(`follow/${userId}`)
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
    },
    savePhoto(file: any) {
        let formData = new FormData()
        formData.append("image", file)
        return instance.put<ResponseType<ProfileType>>(`profile/photo`, formData)
            .then(res => res.data)
    },
    updateProfile(data: UpdateProfileRequestType) {
        return instance.put<ResponseType>(`profile`, data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get<ResponseType<AuthUserData>>(`auth/me/`)
            .then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data);
    }
}

export const securityAPI = {
    getCaptchUrl() {
        return instance.get(`security/get-captcha-url`)
    },

}


export enum ResultCodes {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type UpdateProfileRequestType = {
    userId: string
    lookingForAJob: boolean
    aboutMe: string | null
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType
}



type GetUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: string | null
}

type AuthUserData = {
    email: string
    id: string
    login: string
}

type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
