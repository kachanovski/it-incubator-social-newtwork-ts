import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store";
import {followAc, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAc} from "../../redux/redusers/usersReduser";
import Users from './Users';
import {UserType} from "../../types/types";
import axios from "axios";

type UsersProps = PropsFromRedux

class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   totalCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged}
                   page={this.props.page}/>
        );
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        count: state.usersPage.count,
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
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
