import React, {ChangeEvent} from "react";

type StateType = {
    editMode: boolean
    status: string
}

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType, any> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (

            <div>
                {this.state.editMode
                    ? <input value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                             autoFocus/>
                    : <span onClick={this.activateEditMode}> {this.props.status || 'pusto'}</span>
                }
            </div>

        );
    }

}

export default ProfileStatus;
