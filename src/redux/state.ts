export type ActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostValueAC>

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
    newText: string
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

export type AddPostType = (newPostText: string) => void
export type changePostValueType = (newText: string) => void

export type StoreType = {
    _state: rootStateType
    changePostValue: (newText: string) => void
    addPost: () => void
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => rootStateType
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
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
    },
    changePostValue(newText: string) {
        this._state.profilePage.newText = newText
        this._rerender()
    },
    addPost() {
        const newPost: postsType = {
            id: 3,
            textPost: this._state.profilePage.newText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newText = ''
        this._rerender()
    },
    _rerender() {
    },
    subscribe(callback) {
        this._rerender = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: postsType = {
                id: 3,
                textPost: action.newText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newText = ''
            this._rerender()
        } else if (action.type === "CHANGE-POST-VALUE") {
            this._state.profilePage.newText = action.newText
            this._rerender()
        }


    }
}

export const AddPostAC = (newText: string) => {
    return {
        type: "ADD-POST",
        newText: newText
    } as const
}
export const ChangePostValueAC = (newText: string) => {
    return {
        type: "CHANGE-POST-VALUE",
        newText: newText
    } as const
}
