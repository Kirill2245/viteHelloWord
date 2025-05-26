import React from "react";
import './styleGroupTesstimonials.css';

import Comment from "./Comment/Comment";
import Profile from "./Profile/Profile";
interface GroupProps{
    text:string;
    name:string,
    description:string,
    ImageSrc:string;
};

const GroupTestimonials:React.FC<GroupProps> = ({text,name,description,ImageSrc}) => {
    return(
        <div className="groupTestimonials">
            <Comment text={text}
            />
            <Profile name = {name} description = {description} ImageSrc = {ImageSrc}/>
        </div>
    );
};
export default GroupTestimonials