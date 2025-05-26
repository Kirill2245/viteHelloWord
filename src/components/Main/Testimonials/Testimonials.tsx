import React from "react";
import './styleTestimonials.css';

import TestimonialsHeader from "./TestimonialsHeader/TestimonialsHeader";
import GroupTestimonials from "./GroupTesstimonials/GroupTesstimonials";

import imgProfile from '../../../assets/image/team1.svg';

const Testimonials:React.FC = () => {
    return(
        <section className="testimonials">
            <TestimonialsHeader/>
            <div className="boxGroupTestimonials">
                <GroupTestimonials 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quis leo vel quis mi. Rutrum risus purus tincidunt faucibus vestibulum. 
                    Id fusce tempus eu, volutpat."
                    name="Kristin Watson"
                    description="Lead Developer at Netflix"
                    ImageSrc={imgProfile}
                />
                <GroupTestimonials 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quis leo vel quis mi. Rutrum risus purus tincidunt faucibus vestibulum. 
                    Id fusce tempus eu, volutpat."
                    name="Kristin Watson"
                    description="Lead Developer at Netflix"
                    ImageSrc={imgProfile}
                />
                <GroupTestimonials 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quis leo vel quis mi. Rutrum risus purus tincidunt faucibus vestibulum. 
                    Id fusce tempus eu, volutpat."
                    name="Kristin Watson"
                    description="Lead Developer at Netflix"
                    ImageSrc={imgProfile}
                />
            </div>
        </section>
    );
};
export default Testimonials