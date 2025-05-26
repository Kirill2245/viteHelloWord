import React from "react";
import './styleTestimonialsHeader.css';

const TestimonialsHeader:React.FC = () => {
    return(
        <div className="TestimonialsHeader">
            <h2 id = "testimonialsHeader">Testimonials</h2>
            <p className="testimoialsP" id = "testimoialsP">Don’t take our word for it, see what our customers said.</p>
        </div>
    );
};
export default TestimonialsHeader;