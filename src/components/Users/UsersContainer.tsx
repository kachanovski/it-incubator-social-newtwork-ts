import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    unfollow,
    setIsFetching
} from "../../redux/redusers/usersReduser";
import Users from './Users';
import {UserType} from "../../types/types";
import axios from "axios";

type UsersProps = PropsFromRedux

class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    onPageChanged = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (
            <Users users={this.props.users}
                   follow={this.props.follow}
                   pageSize={this.props.pageSize}
                   unfollow={this.props.unfollow}
                   totalCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   currentPage={this.props.currentPage}/>
        );
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCount(totalCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetching(isFetching))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
