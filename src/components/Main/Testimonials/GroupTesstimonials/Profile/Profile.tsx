import React from "react";
import './styleProfile.css';

interface ProfileProps{
    name:string,
    description:string,
    ImageSrc:string;
}

const Profile:React.FC<ProfileProps> = ({name,description,ImageSrc}) => {
    return(
        <div className="profile">
            <img src = {ImageSrc} alt = "team"></img>
            <article>
                <h4>{name}</h4>
                <p>{description}</p>
            </article>
        </div>
    );
};
export default Profile;
