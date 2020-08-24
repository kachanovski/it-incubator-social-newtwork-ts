import React from 'react';
import userPhoto from '../../accets/images/user.png'
import {UserType} from "../../types/types";
import s from './Users.module.css'
import Pagination from "../components/Pagination";
import {NavLink} from "react-router-dom";

type UsersProps = {
    isFetching: boolean
    currentPage: number
    pageSize: number
    onPageChanged: (currentPage: number) => void
    totalCount: number
    users: Array<UserType>
    followInProgress: Array<number>
    unfollowSuccess: (isFetching: boolean, userId: number) => void
    followSuccess: (isFetching: boolean, userId: number) => void
}


let Users = (props: UsersProps) => {
    return (
        <div className={s.userPage}>
            {props.isFetching
                ? <h3>Loading ....</h3>
                : <Pagination currentPage={props.currentPage}
                              pageSize={props.pageSize}
                              onPageChanged={props.onPageChanged}
                              totalCount={props.totalCount}/>}
            <div className={s.users}>
                {(props.users as Array<UserType>).map(u => {
                    return (
                        <div key={u.id} className={s.user}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </NavLink>
                            <div>
                                <div key={u.id} className={s.userName}>{u.name}</div>
                                <div className={s.userStatus}>{u.status}</div>
                            </div>

                            <div className={s.followButton}>
                                {u.followed
                                    ? <button disabled={props.followInProgress.some((id: number) => id === u.id)}
                                              onClick={() => {
                                                  props.unfollowSuccess(props.isFetching, u.id)
                                              }}>
                                        unfollow
                                    </button>
                                    : <button disabled={props.followInProgress.some((id: number) => id === u.id)}
                                              onClick={() => {
                                                  props.followSuccess(props.isFetching, u.id)
                                              }}>
                                        follow
                                    </button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;
