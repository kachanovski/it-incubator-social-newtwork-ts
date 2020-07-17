let rerender = (state: any) => {

}

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
        newText: ""
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


export let addPost = () => {
    const newPost: postsType = {
        id: 3,
        textPost: state.profilePage.newText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newText = ''
    rerender(state)
}

export let changePostValue = (newText:string) => {
    state.profilePage.newText = newText
    rerender(state)
}

export const subscribe =(observer:any) => {
rerender = observer
}