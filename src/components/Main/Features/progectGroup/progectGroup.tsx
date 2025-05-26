import React from "react";
import './styleGroup.css'
import ProgectInformation from './progectInformation/progectInformation'

interface TextImageComponentProps {
    text: string; 
    imageSrc: string; 
    reverse?: boolean; 
    textHeader:string;
    groupType: 'group1' | 'group2' | 'group3';
}

const ProgectGroup:React.FC<TextImageComponentProps> = ({ text,textHeader, imageSrc, reverse,groupType }) => {
    return (
        <div className={groupType}> 
                {reverse && (
                    <ProgectInformation text={text} textHeader={textHeader} groupType={groupType}/>
                )}
                <picture>
                    <img src={imageSrc} alt="design" />
                </picture>
                {!reverse && (
                    <ProgectInformation text={text} textHeader={textHeader} groupType={groupType}/>
                )}
        </div>
    );
}

export default ProgectGroup;