import React from "react";
import './Main.css';

import Hero from './Hero/Hero';
import Subscribe from "./Subscribe/Subscribe";
import Feature from "./Features/Features";
import Companies from "./Companies/Companies";

const Main:React.FC = () => {
    return (
        <main>
            <Hero/>
            <Subscribe/>
            <Feature/>
            <Companies/>
        </main>
    );
};
export default Main