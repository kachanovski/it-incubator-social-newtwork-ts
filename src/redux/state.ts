import {rerender} from "../render";

export type postsType = {
    id: number
    textPost: string
    likesCount: number


}
type dialogsType = {
    id: number
    name: string
}
type messageType = {
    message: string
}
export type profilePageType = {
    newText:string
    posts: Array<postsType>

}
type dialogPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}


export type rootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType

}

let state: rootStateType = {
    profilePage: {
        posts: [
            {id: 1, textPost: 'first', likesCount: 23},
            {id: 2, textPost: 'start', likesCount: 12},
        ],
        newText: "123"
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Lexa'},
            {id: 2, name: 'Aliaksandr'},
        ],
        messages: [
            {message: 'hi'},
            {message: 'yo'},
            {message: 'uo'}
        ]
    },
}

export default state

export type AddPostType = (newPostText: string) => void
export type changePostValueType = (newText: string) => void


export let addPost = (newPostText: string) => {
    const newPost: postsType = {
        id: 3,
        textPost: newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerender(state)
}

export let changePostValue = (newText:string) => {
    state.profilePage.newText = newText
    rerender(state)
}