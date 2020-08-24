import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StoreReduxType} from "../../redux/store";
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    unfollowSuccess
} from "../../redux/redusers/usersReduser";
import Users from './Users';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/authRedirect";

type UsersProps = PropsFromRedux

class UsersContainer extends React.Component<UsersProps> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {


        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   followInProgress={this.props.followInProgress}
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
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

const connector = connect(mapStateToProps, {
    setTotalCount, setCurrentPage, setIsFetching, getUsers, followSuccess,
    unfollowSuccess
})  //?????

export type PropsFromRedux = ConnectedProps<typeof connector>


export default compose<React.ComponentType>(
    connector,
    withAuthRedirect
)(UsersContainer)