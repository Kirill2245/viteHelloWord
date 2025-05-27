import React from "react";
import './styleFooterGroup.css';

interface GroupProps{
    type:"Group1"|"Group2"|"aboutUs";
    headerGroup:string;
    mainInformation:string[];
};

const FooterGroup:React.FC<GroupProps> = ({type,headerGroup,mainInformation}) => {
    return(
        <article className={`footer${type}`}>
        <h5>{headerGroup}</h5>
        {type == "Group1" && (
            <div>
                <p className="p1">{mainInformation[0]}</p>
                <p className="p2">{mainInformation[1]}</p>
                <p className="p3">{mainInformation[2]}</p>
                <p className="p4">{mainInformation[3]}</p>
                <p className="p5">{mainInformation[4]}</p>
            </div>
        )}
        {type == "Group2" && (
            <div>
                <p className="p1">{mainInformation[0]}</p>
                <p className="p2">{mainInformation[1]}</p>
                <p className="p3">{mainInformation[2]}</p>
                <p className="p4">{mainInformation[3]}</p>
            </div>
        )}
        {type == "aboutUs" && (
            <p>{mainInformation[0]}</p>
        )}
    </article>
    );
}
export default FooterGroup;