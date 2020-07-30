export type rootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}


type dialogPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}
type dialogsType = {
    id: number
    name: string
}
type messageType = {
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
