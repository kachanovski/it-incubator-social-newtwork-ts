import {UsersType} from "../../types/types"


export type ActionsType =
    ReturnType<typeof followAc> |
    ReturnType<typeof unfollowAc> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalCountAC>


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


let initialState: UsersType = {
    users: [],
    count: 5,
    page: 1,
    totalCount:10

}

export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_TOTAL_COUNT:
            return  {
                ...state,
                totalCount: action.totalCount
            };
 case SET_CURRENT_PAGE:
            return  {
                ...state,
                page: action.page
            };

    }
    return state
}
export const followAc = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAc = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users:any) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const setTotalCountAC = (totalCount:number) => {
    return {
        type: "SET_TOTAL_COUNT",
        totalCount: totalCount
    } as const
}
export const setCurrentPageAC = (page:number) => {
    return {
        type: "SET_CURRENT_PAGE",
        page: page
    } as const
}


export default usersReducer