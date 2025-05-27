import React from "react";
import './stylePricing.css';

import PricingHeader from "./PricingHeader/PricingHeader";
import PricingCard from "./PricingCard/PricingCard";
const Pricing:React.FC = () => {
    return(
        <section className="rectangle1" id = "rectangle1">
                <div className="rectangleBox">
                    <PricingHeader/>
                    <section className="boxCard">
                        <PricingCard headerCard="PERSONAL" arrInfo = {["5 recommendations", "2 perks", "Unlimited data"]} count="10" cardID="One"/>
                        <PricingCard headerCard="AGENCY" arrInfo = {["10 recommendations", "5 perks", "Unlimited data"]} count="20" cardID="Two"/>
                        <PricingCard headerCard="ENTERPRISE" arrInfo = {["All lower deals +", "Unlimited recommendations", "Unlimited perks"]} count="49" cardID="Three"/>
                    </section>
                </div>
            </section>
    );
};
export default Pricing;