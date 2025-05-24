import React from "react";
import './Main.css';

import Hero from './Hero/Hero';
import Subscribe from "./Subscribe/Subscribe";


const Main:React.FC = () => {
    return (
        <main>
            <Hero/>
            <Subscribe/>
        </main>
    );
};
export default Main