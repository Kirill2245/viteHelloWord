import React from "react";
import './styleComment.css';

interface CommentProps{
    text:string;
};

const Comment:React.FC<CommentProps> = ({text}) => {
    return(
        <div className="restangle">
            <p>{text}</p>
        </div>
    );
};
export default Comment