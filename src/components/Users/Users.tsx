import React from 'react';
import userPhoto from '../../accets/images/user.png'
import {UserType} from "../../types/types";
import {PropsFromRedux} from "./UsersContainer";
import s from './Users.module.css'
import Pagination from "../components/Pagination";
import {NavLink} from "react-router-dom";

type UsersProps = PropsFromRedux   ///?????

let Users = (props: any) => {


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
                        <div className={s.user}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            </NavLink>
                            <div>
                                <div key={u.id} className={s.userName}>{u.name}</div>
                                <div className={s.userStatus}>{u.status}</div>
                            </div>

                            <div className={s.followButton}>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>follow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>unfollow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Users;
