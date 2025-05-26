import React from "react";
import './styleInformation.css'

interface informationProps{
    text: string; 
    textHeader:string;
    groupType: 'group1' | 'group2' | 'group3';
}
const ProgectInformation:React.FC<informationProps> = ({text,textHeader,groupType}) => {
    return(
        <article className={`${groupType}-article`}>
            <h3>{textHeader}</h3>
            <p>{text}</p>
        </article>
    );
}
export default ProgectInformation