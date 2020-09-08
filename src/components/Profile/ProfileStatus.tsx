import React, {ChangeEvent, useEffect, useState} from "react";

type StateType = {
    editMode: boolean
    status: string
}

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    /* componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
         if(prevProps.status !== this.props.status) {
             this.setState({
                 status: this.props.status
             })
         }
     }*/
    return (

        <div>
            {editMode
                ? <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode}
                         autoFocus/>
                : <span onClick={activateEditMode}> {status || 'pusto'}</span>
            }
        </div>

    );
}

export default ProfileStatus;
