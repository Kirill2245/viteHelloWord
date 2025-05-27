import React from "react";
import './styleFooter.css';

import FooterGroup from "./FooterGroup/FooterGroup";
import FollowUs from "./followUs/followUs";
const Footer:React.FC = () => {
    return(
        <footer>
            <section className="footerBox">
                <div className="mainBoxText" id = "mainBoxText">
                    <FooterGroup headerGroup="Group 1" mainInformation={["Home","Features","Pricing","Team","Contact Us"]} type="Group1"/>
                    <FooterGroup headerGroup="Group 2" mainInformation={["Privacy Policy","Terms","FAQ","Support"]} type="Group2"/>
                    <FooterGroup headerGroup="About Us" 
                    mainInformation={["Keiko Corp. the greatest start up of all time Bruno the CEO of Keiko Corp has built the fastest growing tech start up in Silicon Valley."]} 
                    type="aboutUs"/>
                    <FollowUs/>
                </div>
            </section>
        </footer>
    );
}
export default Footer;