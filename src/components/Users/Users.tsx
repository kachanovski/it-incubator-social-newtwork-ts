import React from 'react';
import {PropsFromRedux} from './UsersContainer';
import axios from 'axios'
import userPhoto from '../../accets/images/user.png'

type UsersProps = PropsFromRedux

class Users extends React.Component<UsersProps> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => {
                    return (
                        <span>
                        <div> <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                        <div key={u.id}>{u.name}</div>
                        <div>{u.status}</div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>unfollow</button>}
                    </span>
                    )
                })}
            </div>
        );
    }
}

export default Users;
