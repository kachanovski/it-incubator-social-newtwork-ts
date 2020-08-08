import React from 'react';
import userPhoto from '../../accets/images/user.png'
import {UserType} from "../../types/types";
import {PropsFromRedux} from "./UsersContainer";

type UsersProps = PropsFromRedux

let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalCount / props.page)
    debugger
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {(props.users as Array<UserType>).map(u => {
                return (
                    <span>
                        <div> <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                        <div key={u.id}>{u.name}</div>
                        <div>{u.status}</div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>unfollow</button>}
                    </span>
                )
            })}
        </div>
    )
}

export default Users;
