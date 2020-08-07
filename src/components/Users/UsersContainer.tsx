import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import Users from './Users';
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store";
import {followAc, setUsersAC, unfollowAc} from "../../redux/redusers/usersReduser";

let mapStateToProps = (state: StoreReduxType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAc(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
