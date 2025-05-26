import React from "react";
import './Main.css';

import Hero from './Hero/Hero';
import Subscribe from "./Subscribe/Subscribe";
import Feature from "./Features/Features";
import Companies from "./Companies/Companies";
import Testimonials from "./Testimonials/Testimonials";
import Pricing from "./Pricing/Pricing";

const Main:React.FC = () => {
    return (
        <main>
            <Hero/>
            <Subscribe/>
            <Feature/>
            <Companies/>
            <Testimonials/>
            <Pricing/>
        </main>
    );
};
export default Main