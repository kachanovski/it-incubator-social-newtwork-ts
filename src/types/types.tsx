export type dialogPageType = {
    messages: Array<messageType>
}
export type messageType = {
    date: any
    id: number
    message: string
}

export type profilePageType = {
    posts: Array<postsType>
    profile: any
    status: string
}
export type postsType = {
    id: number
    textPost: string
    likesCount: number
}



export type UsersType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalCount: number
    isFetching: boolean
    followInProgress: Array<number>   // ????
}
export type UserType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}
type PhotosType = {
    small: string
    large: string
}


export type AuthType = {
    id?: null | number
    email?: null | string
    login?: null | string
    isAuth?: boolean
}
