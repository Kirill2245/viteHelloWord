import React from "react";
import './styleCompanies.css';

import CompaniHeader from "./CompaniHeader/CompaniHeader";
import LogoBox from "./LogoBox/LogoBox";
const Companies:React.FC = () => {
    return(
        <section className="companies">
            <CompaniHeader/>
            {/* <h2>You are in good company</h2>
            <p>We are funded with the world’s trusted brands</p> */}
            <LogoBox/>
        </section>
    );
};
export default Companies