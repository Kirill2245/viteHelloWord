import React from "react";
import './Main.css';

import Hero from './Hero/Hero';
import Subscribe from "./Subscribe/Subscribe";
import Feature from "./Features/Features";
import Companies from "./Companies/Companies";
import Testimonials from "./Testimonials/Testimonials";

const Main:React.FC = () => {
    return (
        <main>
            <Hero/>
            <Subscribe/>
            <Feature/>
            <Companies/>
            <Testimonials/>
        </main>
    );
};
export default Main