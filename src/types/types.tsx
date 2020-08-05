export type rootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}


export type dialogPageType = {
    messages: Array<messageType>
    newMessage: string
}
type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

export type profilePageType = {
    newText: string
    posts: Array<postsType>
}
export type postsType = {
    id: number
    textPost: string
    likesCount: number
}


export type AddPostType = (newPostText: string) => void
export type changePostValueType = (newText: string) => void
