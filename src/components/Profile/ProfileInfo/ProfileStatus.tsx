import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}


class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        if (this.props.status !== this.state.status) {
            this.props.updateStatus(this.state.status)
        }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.target.value})
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div onDoubleClick={this.activateEditMode}>
                        {this.props.status || "no status"}
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode}
                               onChange={this.onStatusChange}
                               autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;
