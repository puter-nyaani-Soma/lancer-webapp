import React from 'react';
import './Home.scss'
import Featured from '../../components/featured/Featured';
import Features from '../../components/features/features';
import Trusted from '../../components/trustedBy/Trusted';
import Slide from '../../components/slide/Slide';
import { cards } from '../../data';
import CatCard from '../../components/catCard/CatCard.jsx';
import ProjectSlider from '../../components/projectCard/ProjectSlider';
import Joinus from '../../components/whyjoinus/Whyjoinus.jsx';
import Footer from '../../components/footer/Footer.jsx';

const Home = () => {

    return (  
        <div className="home">
            
            <Featured />
            <Trusted />
            <Slide slidesToShow={5} arrowsScroll={5}  >
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Features />

        
        

      <ProjectSlider/>
      <Joinus />
      <Footer />
        </div>

    );
}
 
export default Home;