import React from "react";
import './styleFeatures.css';
import ProgectGroup from './progectGroup/progectGroup';
import design from '../../../assets/image/design1.png';
import development from '../../../assets/image/development1.png';
import creations from '../../../assets/image/creations1.png'

const Feature:React.FC = () => {
    return(
        <section className="features" id = "features">
                <h2 id = "featureHeader2">OUR CLIENTS LOVE US BECAUSE</h2>
                <div className="projectSection">
                    <ProgectGroup text="Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the blind texts. Separated 
                                they live in Bookmarksgrove right at the coast of the Sematics, a large language ocean."
                    textHeader="Project One"
                    imageSrc= {design}
                    groupType="group1"
                    />
                    <ProgectGroup text="Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the 
                                blind texts. Separated they live in Bookmarksgrove right at the coast of the Sematics, a large language ocean."
                        textHeader="Project Two"
                        imageSrc= {development}
                        reverse = {true}
                        groupType="group2"
                    />
                    <ProgectGroup text=" Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the blind texts. Separated they 
                                live in Bookmarksgrove right at the coast of the Sematics, a large language ocean."
                        textHeader="Project Three"
                        imageSrc= {creations}
                        groupType="group3"
                    />
                </div>
        </section>
    );
}
export default Feature;