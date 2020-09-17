import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "433ebc08-7fe5-4695-a52a-f92d6f2c7aba"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => {
            if (response.data.resultCode === 0) {
            }
        })
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => {
            if (response.data.resultCode === 0) {
            }
        })
    },

}


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`,).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`,).then(response => response.data)
    }


}
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status}).then(response => response.data)
    },
    savePhotos(photo: any) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}


