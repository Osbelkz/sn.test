import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks:React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        props.isOwner && setEditMode( true)
    }
    const deactivateEditMode = () => {
        setEditMode( false)
        if (props.status !== status) {
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus( e.target.value)
    }

    return (
            <div style={{margin: "5px"}}>
                {!editMode
                    ? <div onDoubleClick={activateEditMode}>
                        {status || "no status"}
                    </div>
                    : <div>
                        <input onBlur={deactivateEditMode}
                               onChange={onStatusChange}
                               autoFocus={true}
                               value={status}/>
                    </div>
                }
            </div>
        );
};

export default ProfileStatusWithHooks;
