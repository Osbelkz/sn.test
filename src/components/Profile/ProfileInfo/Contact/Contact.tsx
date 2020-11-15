import React from "react";
import classes from "./Contact.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebookF, faTwitter, faInstagram, faYoutube, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

type ContactType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {

    const faIcons: {[key: string]: IconDefinition} = {
        facebook: faFacebookF,
        vk: faVk,
        twitter: faTwitter,
        instagram: faInstagram,
        github: faGithub,
        youtube: faYoutube,
    }
    const iconSVG = faIcons[contactTitle] ? faIcons[contactTitle] : faShareAlt

    return <a className={classes.contact} target={"_blank"} href={contactValue as string}>
        <FontAwesomeIcon size={"1x"} icon={iconSVG} color={"white"}  />
    </a>
}

export default Contact
