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
    profile: ProfileType | null
    status: string
}
export type ProfileType = {
    userId?: number | null
    lookingForAJob?: boolean | null
    lookingForAJobDescription?: string | null
    fullName?: string | null
    contacts?: ContactsType | null

}

type ContactsType = {
    github?: string | null
    vk?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    website?: string | null
    youtube?: string | null
    mainLink?: string | null
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
    lookingForAJob: boolean
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
    logout?: () => void
}

export type AppType = {
    initialized?: boolean
}
