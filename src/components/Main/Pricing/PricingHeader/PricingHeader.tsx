import React from "react";
import './stylePricingHeader.css';

const PricingHeader:React.FC = () => {
    return(
        <div className="boxTextRectangle">
            <h2 id = "rectangleHeader">How Much Does it Cost</h2>
            <p id = "rectangleText">Honest pricing, no surprises.</p>
        </div>
    );
};
export default PricingHeader;