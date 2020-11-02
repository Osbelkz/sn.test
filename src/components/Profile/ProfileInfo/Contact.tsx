import React from "react";

type ContactType = {
    contactTitle: string | null
    contactValue: any
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>{contactValue}</div>
}

export default Contact
