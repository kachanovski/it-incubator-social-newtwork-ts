import {UsersType} from "../../types/types"


export type ActionsType =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof setTotalCount>


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_IS_FETCHING = "SET_IS_FETCHING"


let initialState: UsersType = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 10,
    isFetching: true
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
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
    }
    return state
}
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: "SET_TOTAL_COUNT",
        totalCount: totalCount
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "SET_IS_FETCHING",
        isFetching: isFetching
    } as const
}


export default usersReducer